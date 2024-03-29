---
slug: /tutorials/docker
---

# Dockerized versions

:::warning
To use the dockerized versions of Pterodactyl you need to install Docker!
For a quick start you can run `curl -sSL https://get.docker.com/ | CHANNEL=stable bash`. For more information refer to the official [Docker documentation](https://docs.docker.com/engine/install/).
:::

## Panel Image
`ghcr.io/pterodactyl/panel` is a ready to use docker image for the panel.

### Requirements
The docker image requires some additional software to function. The software can either be provided in other containers (see the [docker-compose.yml](https://github.com/pterodactyl/panel/blob/1.0-develop/docker-compose.example.yml) as an example) or as existing instances.

A mysql database is required. We recommend the stock [MariaDB Image](https://hub.docker.com/_/mariadb/) image if you prefer to run it in a docker container. As a non-containerized option we recommend mariadb.

A caching software is required as well. We recommend the stock [Redis Image](https://hub.docker.com/_/redis/) image. You can choose any of the [supported options](#cache-drivers).

You can provide additional settings using a custom `.env` file or by setting the appropriate environment variables in the docker-compose file.
If using the docker-compose file the location of a custom `.env` file would be `/srv/pterodactyl/var/.env`. 

### Setup
Start the docker container and the required dependencies (either provide existing ones or start containers as well, see the [docker-compose.yml](https://github.com/pterodactyl/panel/blob/1.0-develop/docker-compose.example.yml) file as an example).
```bash
# If you are using docker compose
curl -L -o docker-compose.yml https://raw.githubusercontent.com/pterodactyl/panel/1.0-develop/docker-compose.example.yml
docker-compose up -d

# If you are running the docker container without docker compose
docker create -it --name panel ghcr.io/pterodactyl/panel
```

After the startup is complete you'll need to create a panel user.
```bash
# If you are using docker compose
docker-compose exec panel php artisan p:user:make

# If you are running the docker container without docker compose
docker exec -it panel php artisan p:user:make
```

### Environment Variables
There are multiple environment variables to configure the panel when not providing your own `.env` file, see the following table for details on each available option.

:::warning 
If your `APP_URL` starts with `https://` you need to provide an `LE_EMAIL` as well so certificates can be generated.
:::

| Variable             | Description                                                                    | Required |
| -------------------- | ------------------------------------------------------------------------------ | -------- |
| `APP_URL`            | The URL the panel will be reachable with (including protocol)                  | yes      |
| `APP_TIMEZONE`       | The [timezone](http://php.net/manual/en/timezones.php) to use for the panel    | yes      |
| `LE_EMAIL`           | The email used for letsencrypt certificate generation                          | maybe    |
| `DB_HOST`            | The host of the mysql instance                                                 | yes      |
| `DB_PORT`            | The port of the mysql instance                                                 | yes      |
| `DB_DATABASE`        | The name of the mysql database                                                 | yes      |
| `DB_USERNAME`        | The mysql user                                                                 | yes      |
| `DB_PASSWORD`        | The mysql password for the specified user                                      | yes      |
| `CACHE_DRIVER`       | The cache driver        (see [Cache drivers](#cache-drivers) for detais)       | yes      |
| `SESSION_DRIVER`     | The session driver      (see [Session drivers](#session-drivers) for detais)   | yes      |
| `QUEUE_DRIVER`       | The queue driver        (see [Queue drivers](#queue-drivers) for detais)       | yes      |
| `REDIS_HOST`         | The hostname or IP address of the redis database                               | maybe    |
| `REDIS_PORT`         | The port the redis database is using on the host                               | maybe    |
| `REDIS_PASSWORD`     | The password used to secure the redis database                                 | maybe    |
| `MEMCACHED_HOST`     | The hostname or IP address of memcached                                        | maybe    |
| `MEMCACHED_PORT`     | The port of memcached                                                          | maybe    |
| `MEMCACHED_USERNAME` | The memcached user                                                             | maybe    |
| `MEMCACHED_PASSWORD` | The memcached password for the specified user                                  | maybe    |
| `MAIL_DRIVER`        | The email driver (see [Mail drivers](#mail-drivers) for details)               | yes      |
| `MAIL_FROM`          | The email that should be used as the sender email                              | yes      |
| `MAIL_HOST`          | The host of your mail driver instance                                          | maybe    |
| `MAIL_PORT`          | The port of your mail driver instance                                          | maybe    |
| `MAIL_USERNAME`      | The username for your mail driver                                              | maybe    |
| `MAIL_PASSWORD`      | The password for your mail driver                                              | maybe    |

#### Cache drivers
You can choose between different cache drivers depending on what you prefer.
We recommend `redis` when using docker as it can be started in a container easily.

| Driver    | Description                         | Required variables                                                             |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------ |
| redis     | [Redis](https://redis.io/)          | `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`                                   |
| database  | MySQL database                      | `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`              |
| memcached | [Memcached](https://memcached.org/) | `MEMCACHED_HOST`, `MEMCACHED_PORT`, `MEMCACHED_USERNAME`, `MEMCACHED_PASSWORD` |
| file      | Filesystem                          |                                                                                |

#### Session drivers
You can choose between different session drivers depending on what you prefer.
We recommend `redis` when using docker as it can be started in a container easily.

| Driver    | Description                         | Required variables                                                             |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------ |
| redis     | [Redis](https://redis.io/)          | `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`                                   |
| database  | MySQL database                      | `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`              |
| memcached | [Memcached](https://memcached.org/) | `MEMCACHED_HOST`, `MEMCACHED_PORT`, `MEMCACHED_USERNAME`, `MEMCACHED_PASSWORD` |
| file      | Filesystem                          |                                                                                |
| cookie    | Cookies                             |                                                                                |

#### Queue drivers
You can choose between different queue drivers depending on what you prefer.
We recommend `redis` when using docker as it can be started in a container easily.

| Driver    | Description                         | Required variables                                                |
| --------- | ----------------------------------- | ----------------------------------------------------------------- |
| redis     | [Redis](https://redis.io/)          | `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`                      |
| database  | MySQL database                      | `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` |
| sync      | Run tasks synchronously             |                                                                   |

#### Mail drivers
You can choose between different mail drivers according to your needs.
Every driver requires `MAIL_FROM` to be set.

| Driver   | Description                          | Required variables                                            |
| -------- | ------------------------------------ | ------------------------------------------------------------- |
| mandrill | [Mandrill](http://www.mandrill.com/) | `MAIL_USERNAME`                                               |
| postmark | [Postmark](https://postmarkapp.com/) | `MAIL_USERNAME`                                               |
| mailgun  | [Mailgun](https://www.mailgun.com/)  | `MAIL_USERNAME`, `MAIL_HOST`                                  |
| smtp     | Any SMTP server can be configured    | `MAIL_USERNAME`, `MAIL_HOST`, `MAIL_PASSWORD`, `MAIL_PORT`    |

## Wings Image
`ghcr.io/pterodactyl/wings` is a ready to use docker image for wings.

### Requirements
The docker image doesn't require any additional software to function. See the [docker-compose.yml](https://github.com/pterodactyl/wings/blob/develop/docker-compose.example.yml) as an example.

:::warning
If your panel uses SSL your wings need to use SSL as well. Make sure you generated and provided the needed certificates in that case.
:::

### Setup
Start the docker container.
```bash
# If you are using docker compose
curl -L -o docker-compose.yml https://raw.githubusercontent.com/pterodactyl/wings/develop/docker-compose.example.yml
docker-compose up -d

# If you are running the docker container without docker compose
docker create -it --name wings ghcr.io/pterodactyl/wings
```

After the startup is complete you can follow the [normal wings setup guide](./../wings/installing.md#configure) to create a new node.

### Environment Variables
There are some environment variables to configure wings, see the following table for details on each available option.

| Variable            | Description                                                                    | Required |
| ------------------- | ------------------------------------------------------------------------------ | -------- |
| `TZ`                | The timezone to use for wings                                                  | yes      |
| `WINGS_UID`         | The UID of the wings user                                                      | yes      |
| `WINGS_GID`         | The GID of the wings user                                                      | yes      |
| `WINGS_USERNAME`    | The username of the wings user                                                 | yes      |
---
slug: /panel/webserver
hide_table_of_contents: true
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Webserver Configuration

:::caution
When using the SSL configuration you MUST create SSL certificates, otherwise your webserver will fail to start. See the [Creating SSL Certificates](./../tutorials/creating_ssl_certificates.md) documentation page to learn how to create these certificates before continuing.
:::

<Tabs>
  <TabItem value="Nginx With SSL" label="Nginx With SSL" default>
    First, remove the default NGINX configuration.

```bash
rm /etc/nginx/sites-enabled/default
```

Now, you should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called `pterodactyl.conf` and place the file in `/etc/nginx/sites-available/`, or &mdash; if on CentOS, `/etc/nginx/conf.d/`.

```nginx
server_tokens off;

server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name <domain>;

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    # SSL Configuration - Replace the example <domain> with your domain
    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    # See https://hstspreload.org/ before uncommenting the line below.
    # add_header Strict-Transport-Security "max-age=15768000; preload;";
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### Enabling Configuration

The final step is to enable your NGINX configuration and restart it.

```bash
# You do not need to symlink this file if you are using CentOS.
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# You need to restart nginx regardless of OS.
sudo systemctl restart nginx
```
  </TabItem>
  <TabItem value="Nginx Without SSL" label="Nginx Without SSL">
First, remove the default NGINX configuration.

```bash
rm /etc/nginx/sites-enabled/default
```
Now, you should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called
`pterodactyl.conf` and place the file in `/etc/nginx/sites-available/`, or &mdash; if on CentOS, `/etc/nginx/conf.d/`.

```nginx
server {
    # Replace the example <domain> with your domain name or IP address
    listen 80;
    server_name <domain>;


    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### Enabling Configuration

The final step is to enable your NGINX configuration and restart it.

```bash
# You do not need to symlink this file if you are using CentOS.
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf

# You need to restart nginx regardless of OS.
sudo systemctl restart nginx
```
  </TabItem>
  <TabItem value="Apache With SSL" label="Apache With SSL">
First, remove the default Apache configuration.

```bash
a2dissite 000-default.conf
```

Now, you should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called
`pterodactyl.conf` and place the file in `/etc/apache2/sites-available`, or &mdash; if on CentOS, `/etc/httpd/conf.d/`.

Note: When using Apache, make sure you have the `libapache2-mod-php` package installed or else PHP will not display on your webserver.

```apache
<VirtualHost *:80>
  ServerName <domain>
  
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] 
</VirtualHost>

<VirtualHost *:443>
  ServerName <domain>
  DocumentRoot "/var/www/pterodactyl/public"

  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M

  <Directory "/var/www/pterodactyl/public">
    Require all granted
    AllowOverride all
  </Directory>

  SSLEngine on
  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem
</VirtualHost> 
```

### Enabling Configuration

Once you've created the file above, simply run the commands below. If you are on CentOS _you do not need to run the commands
below!_ You only need to run `systemctl restart httpd`.

```bash
# You do not need to run any of these commands on CentOS
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo a2enmod ssl
sudo systemctl restart apache2
```
  </TabItem>
   <TabItem value="Apache Without SSL" label="Apache Without SSL">
First, remove the default Apache configuration.

```bash
a2dissite 000-default.conf
```

Now, you should paste the contents of the file below, replacing `<domain>` with your domain name being used in a file called
`pterodactyl.conf` and place the file in `/etc/apache2/sites-available`, or &mdash; if on CentOS, `/etc/httpd/conf.d/`.

Note: When using Apache, make sure you have the `libapache2-mod-php` package installed or else PHP will not display on your webserver.

```apache
<VirtualHost *:80>
  ServerName <domain>
  DocumentRoot "/var/www/pterodactyl/public"
  
  AllowEncodedSlashes On
  
  php_value upload_max_filesize 100M
  php_value post_max_size 100M
  
  <Directory "/var/www/pterodactyl/public">
    AllowOverride all
    Require all granted
  </Directory>
</VirtualHost>
```

### Enabling Configuration

Once you've created the file above, simply run the commands below. If you are on CentOS _you do not need to run the commands
below!_ You only need to run `systemctl restart httpd`.

```bash
# You do not need to run any of these commands on CentOS
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```
  </TabItem>
</Tabs>




#### Next Step: [Wings Installation](./../wings/installing.md)
import React from 'react';

const InfoPterodactyl = () => (
    <div style={{ padding: '5rem 0', textAlign: 'center', maxWidth: '40%', margin: 'auto' }}>
      <h1>Pterodactyl Panel</h1>
      <br />
      <p style={{ wordWrap: 'break-word' }}>
        Pterodactyl® is a free, open-source game server management panel built with PHP, React, and Go. Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users.
      </p>
      <br />
      <p>
        <strong>Stop settling for less. Make game servers a first-class citizen on your platform.</strong>
      </p>
      <img src="https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png" alt="Your Image" style={{ width: '75%' }} />
    </div>
);

export default InfoPterodactyl;

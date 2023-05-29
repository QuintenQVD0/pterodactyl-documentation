import React from 'react';
import './custom.css';

const GetStartedSection = () => (
  <div className="section" style={{ backgroundColor: '#10529F', color: '#FFFFFF', textAlign: 'center' }}>
    <div className="container" style={{ paddingTop: '1rem' }}>
      <h1 style={{ marginTop: '1rem' }}>Get Started</h1>
      <p style={{ marginTop: '1rem' }}>Ready to fly on the Pterodactyl?</p>
      <div style={{ marginTop: '1rem' }}>
        <a className="btn-container">
          <a className="btn btn-primary rounded-full px-4 py-2" href="docs/documentation/project/introduction" style={{ color: 'white' }}>
            About the project
          </a>
        </a>
        <a className="btn-container">
          <a className="btn btn-primary rounded-full px-4 py-2" mr-2 href="https://discord.gg/pterodactyl" style={{ color: 'white' }}>
            Discord
          </a>
        </a>
      </div>
    </div>
  </div>
);

export default GetStartedSection;

import React from 'react';
import './GetStartedSection.css';

const GetStartedSection = () => (
  <div className="section" style={{ backgroundColor: '#10529F', color: '#FFFFFF', textAlign: 'center' }}>
    <div className="container" style={{ paddingTop: '4rem' }}>
      <h1 style={{ fontSize: '2rem' }}>Get Started</h1>
      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Ready to fly on the Pterodactyl?</p>
      <div style={{ marginTop: '2rem' }}>
        <span className="btn-container">
          <a className="btn btn-primary rounded-full px-4 py-2" href="docs/project/introduction" style={{ color: 'white' }}>
            About the project
          </a>
        </span>
        <span className="btn-container">
          <a className="btn btn-primary rounded-full px-4 py-2 mr-2" href="https://discord.gg/pterodactyl" style={{ color: 'white' }}>
            Discord
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default GetStartedSection;

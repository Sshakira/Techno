// import React from 'react';

// function CanvasDesign() {
//   return (
//     <>
//       <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '100.0000%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
//         <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} src="https://www.canva.com/design/DAFtVIk6JeY/view?embed" allowFullScreen={true} allow="fullscreen"></iframe>
//       </div>
//       <a href="https://www.canva.com/design/DAFtVIk6JeY/view?utm_content=DAFtVIk6JeY&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener">Copy of TECHNOVANZA</a> by Devyani Shende
//     </>
//   );
// }

// export default CanvasDesign;

import React from 'react';
import './CanvasDesign.css';  // Import your CSS file

function CanvasDesign() {
  return (
    <>
      <div className="canvas-container">
        <iframe
          loading="lazy"
          title="Technovanza Canva Design"
          className="canvas-iframe"
          src="https://www.canva.com/design/DAFtVIk6JeY/view?embed"
          allowFullScreen={true}
          allow="fullscreen"
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAFtVIk6JeY/view?utm_content=DAFtVIk6JeY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
        target="__blank"
        rel="noopener"
        className="canvas-link"
      >
        TECHNOVANZA CORE COMMITTEE
      </a>
    </>
  );
}

export default CanvasDesign;


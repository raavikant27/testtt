import React, { useState, useEffect } from 'react';

function Home() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(savedVideos);
  }, []);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={homeContainerStyle}>
      <div style={contentWrapper}>
        <h1 style={headingStyle}>All Uploaded Videos</h1>
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
          />
        </div>
        <div style={videoListStyle}>
          {filteredVideos.length === 0 ? (
            <p style={emptyTextStyle}>No videos found.</p>
          ) : (
            filteredVideos.map((video, index) => (
              <div key={index} style={videoBoxStyle}>
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  style={iframeStyle}
                />
                <p style={videoTitleStyle}>{video.title}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Styles
const homeContainerStyle = {
  minHeight: '100vh',
  backgroundColor: '#e9f7fa',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Poppins', sans-serif",
  padding: '20px',
};

const contentWrapper = {
  width: '100%',
  maxWidth: '800px',
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  color: '#333',
  textAlign: 'center',
  marginBottom: '1rem',
  animation: 'fadeIn 1s ease', // Added animation
};

const searchContainerStyle = {
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const searchInputStyle = {
  padding: '12px',
  fontSize: '1rem',
  width: '100%',
  maxWidth: '400px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  transition: 'border 0.3s ease', // Transition for border
};

const videoListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '1.5rem',
};

const videoBoxStyle = {
  backgroundColor: '#ffffff',
  padding: '1rem',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  border: '2px solid #00796b',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for hover effect
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.05)', // Scale effect on hover
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Change shadow on hover
  },
};

const iframeStyle = {
  borderRadius: '10px',
  marginBottom: '10px',
};

const videoTitleStyle = {
  fontSize: '1rem',
  fontWeight: '600',
  marginTop: '5px',
  color: '#004d40',
  textAlign: 'center',
};

const emptyTextStyle = {
  fontSize: '1.2rem',
  color: '#888',
  textAlign: 'center',
};

// Keyframes for animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}`, styleSheet.cssRules.length);
styleSheet.insertRule(`
  input:focus {
    border: 2px solid #00796b; // Change border color on focus
  }
`, styleSheet.cssRules.length);

export default Home;

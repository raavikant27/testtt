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
    <div style={homeStyle}>
      <h1 style={{ color: '#00796b' }}>All Uploaded Videos</h1>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchInputStyle}
      />
      <div style={videoListStyle}>
        {filteredVideos.length === 0 ? (
          <p>No videos uploaded yet.</p>
        ) : (
          filteredVideos.map((video, index) => (
            <div key={index} style={videoBoxStyle}>
              <iframe
                width="400"
                height="300"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
                style={iframeStyle}
              />
              <p style={{ margin: '0.5rem 0', color: '#004d40' }}>{video.title}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const homeStyle = {
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#e0f2f1', // Light teal background
  minHeight: '100vh',
};

const searchInputStyle = {
  padding: '0.5rem',
  fontSize: '1em',
  borderRadius: '4px',
  border: '1px solid #00796b',
  margin: '1rem 0',
  width: '300px',
};

const videoListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const videoBoxStyle = {
  margin: '1rem',
  transition: 'transform 0.3s ease',
  display: 'inline-block',
  textAlign: 'center',
  backgroundColor: '#ffffff', // White background for video box
  border: '1px solid #00796b',
  borderRadius: '8px',
  padding: '1rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
};

const iframeStyle = {
  borderRadius: '8px',
};

videoBoxStyle[':hover'] = {
  transform: 'scale(1.05)',
};

export default Home;

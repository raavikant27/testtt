import React, { useState, useEffect } from 'react';

function UploadVideo() {
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [videos, setVideos] = useState([]);
  const [previewVideoId, setPreviewVideoId] = useState(null);
  const [sortOption, setSortOption] = useState('uploadTime');

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(savedVideos);
  }, []);

  const handleUpload = () => {
    const videoId = extractVideoId(videoUrl);
    if (videoId && title) {
      const newVideo = { id: videoId, title, uploadTime: new Date() };
      const updatedVideos = [...videos, newVideo];
      setVideos(updatedVideos);
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
      setVideoUrl('');
      setTitle('');
      setPreviewVideoId(null);
    } else {
      alert('Please enter a valid YouTube URL and title.');
    }
  };

  const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/|(?:v|embed|shorts|watch)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handlePreview = () => {
    const videoId = extractVideoId(videoUrl);
    setPreviewVideoId(videoId);
  };

  const handleDelete = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const handleCopyLink = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    navigator.clipboard.writeText(url);
    alert('Video link copied to clipboard!');
  };

  const sortVideos = (videos) => {
    if (sortOption === 'uploadTime') {
      return [...videos].sort((a, b) => new Date(b.uploadTime) - new Date(a.uploadTime));
    } else if (sortOption === 'title') {
      return [...videos].sort((a, b) => a.title.localeCompare(b.title));
    }
    return videos;
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapper}>
        <h1 style={headingStyle}>Upload YouTube Video</h1>
        <div style={formStyle}>
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Enter Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
          <div style={buttonGroupStyle}>
            <button onClick={handlePreview} style={primaryButtonStyle}>Preview</button>
            <button onClick={handleUpload} style={primaryButtonStyle}>Upload</button>
          </div>
        </div>

        {previewVideoId && (
          <div style={previewStyle}>
            <h2 style={subHeadingStyle}>Video Preview</h2>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${previewVideoId}`}
              title="Video Preview"
              frameBorder="0"
              allowFullScreen
              style={iframeStyle}
            />
          </div>
        )}

        <div style={videoListStyle}>
          <h2 style={subHeadingStyle}>Uploaded Videos</h2>
          <div style={sortContainerStyle}>
            <label style={labelStyle}>Sort by: </label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={selectStyle}
            >
              <option value="uploadTime">Upload Time</option>
              <option value="title">Title</option>
            </select>
          </div>

          {videos.length === 0 ? (
            <p style={emptyTextStyle}>No videos uploaded yet.</p>
          ) : (
            <div style={gridStyle}>
              {sortVideos(videos).map((video, index) => (
                <div key={index} style={videoCardStyle}>
                  <iframe
                    width="100%"
                    height="250"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                    style={iframeStyle}
                  />
                  <p style={videoTitleStyle}>{video.title}</p>
                  <div style={buttonGroupStyle}>
                    <button
                      onClick={() => handleDelete(index)}
                      style={dangerButtonStyle}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleCopyLink(video.id)}
                      style={infoButtonStyle}
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#e6f9e6', // Mehndi color for background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Poppins', sans-serif",
  padding: '20px',
};

const contentWrapper = {
  width: '100%',
  maxWidth: '1200px',
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: '600',
  color: '#fff',
  textAlign: 'center',
  marginBottom: '1.5rem',
  padding: '1rem',
  backgroundColor: '#4caf50', // Mehndi color for heading
  borderRadius: '10px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '2rem',
};

const inputStyle = {
  padding: '12px',
  fontSize: '1rem',
  width: '100%',
  maxWidth: '500px',
  borderRadius: '6px',
  border: '1px solid #ddd',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
};

const primaryButtonStyle = {
  padding: '12px 24px',
  fontSize: '1.1rem',
  backgroundColor: '#007bff', // Change to match navbar color
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  margin: '0 10px',
};

const dangerButtonStyle = {
  ...primaryButtonStyle,
  backgroundColor: '#dc3545',
};

const infoButtonStyle = {
  ...primaryButtonStyle,
  backgroundColor: '#17a2b8',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

const previewStyle = {
  marginTop: '2rem',
};

const videoListStyle = {
  marginTop: '2rem',
};

const subHeadingStyle = {
  fontSize: '2rem',
  fontWeight: '500',
  color: '#555',
  textAlign: 'center',
  padding: '0.5rem',
  backgroundColor: '#e9ecef',
  borderRadius: '8px',
};

const sortContainerStyle = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const labelStyle = {
  fontSize: '1rem',
  marginRight: '10px',
};

const selectStyle = {
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #ddd',
};

const emptyTextStyle = {
  fontSize: '1.2rem',
  color: '#888',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '2rem',
};

const videoCardStyle = {
  backgroundColor: '#f8f9fa',
  padding: '1rem',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  overflow: 'hidden',
};

const iframeStyle = {
  borderRadius: '10px',
};

const videoTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: '500',
  marginTop: '10px',
  color: '#333',
};

export default UploadVideo;

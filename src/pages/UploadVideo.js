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
    <div style={styles.uploadContainer}>
      <h1 style={styles.uploadHeading}>Upload YouTube Video</h1>
      <div style={styles.formContainer}>
        <input
          type="text"
          placeholder="Enter YouTube video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          style={styles.inputField}
        />
        <input
          type="text"
          placeholder="Enter Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.inputField}
        />
        <div style={styles.buttonGroup}>
          <button onClick={handlePreview} style={styles.primaryButton}>Preview</button>
          <button onClick={handleUpload} style={styles.primaryButton}>Upload</button>
        </div>
      </div>

      {previewVideoId && (
        <div style={styles.previewSection}>
          <h2>Video Preview</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${previewVideoId}`}
            title="Video Preview"
            allowFullScreen
          />
        </div>
      )}

      <div style={styles.videoListSection}>
        <h2>Uploaded Videos</h2>
        <div style={styles.sortSection}>
          <label>Sort by: </label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={styles.sortDropdown}
          >
            <option value="uploadTime">Upload Time</option>
            <option value="title">Title</option>
          </select>
        </div>

        {videos.length === 0 ? (
          <p>No videos uploaded yet.</p>
        ) : (
          <div style={styles.videoGrid}>
            {sortVideos(videos).map((video, index) => (
              <div key={index} style={styles.videoCard}>
                <iframe
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allowFullScreen
                />
                <p>{video.title}</p>
                <div style={styles.buttonGroup}>
                  <button onClick={() => handleDelete(index)} style={styles.deleteButton}>Delete</button>
                  <button onClick={() => handleCopyLink(video.id)} style={styles.copyLinkButton}>Copy Link</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  uploadContainer: {
    minHeight: '100vh',
    backgroundColor: '#e6f9e6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
  },
  uploadHeading: {
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#4caf50',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputField: {
    padding: '12px',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '6px',
    marginBottom: '1rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  primaryButton: {
    padding: '12px 24px',
    fontSize: '1.1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  previewSection: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '500px',
  },
  videoListSection: {
    marginTop: '40px',
    width: '100%',
    maxWidth: '1000px',
  },
  sortSection: {
    marginBottom: '20px',
  },
  sortDropdown: {
    padding: '10px',
    borderRadius: '5px',
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '2rem',
  },
  videoCard: {
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  copyLinkButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UploadVideo;

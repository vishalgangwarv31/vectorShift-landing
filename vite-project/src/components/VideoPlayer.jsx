const VideoPlayer = () => {
  return (
    <div className="video-container">
      <video
        className="custom-video"
        muted
        autoPlay
        loop
        controls
        >
        <source src="https://framerusercontent.com/assets/KLHZGCcEgZNxUcAaRJ8UHNmDTI.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

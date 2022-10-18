import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VideoPlayer from "react-background-video-player";
import BackgroundVideo from "./star-effect.mp4";

ReactDOM.render(
<React.StrictMode>
	<VideoPlayer
		style={{ position: 'fixed', zIndex: '-1' }}
		className="video"
		src={
			BackgroundVideo
		}
		autoPlay={true}
		muted={true}
	/>
	<App />
</React.StrictMode>,
document.getElementById('root')
);

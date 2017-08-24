import React from 'react';

// const VideoListItem = (props) => {
//   const Video = props.video;
//   return <li>Video</li>
// };

// above code is completely identical to below code.
// using {video} of props object will declare a similar constant under the hood.

const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>

          <div className="media-body">
            <div className="media-heading"> {video.snippet.title} </div>
          </div>
          </div>
      </li>
    );
};

export default VideoListItem;

import React from 'react';

const images = ['image/gif', 'image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/svg+xml'];
const videos = ['image/mp4', 'image/webm'];
const documents = ['application/pdf'];

function MessageFiles(props) {
  const { files } = props;
  return (
    <div className="files">
      {files.map(file => (
        <div>
          {images.includes(file.type) ? (
            <img width={100} height={100} src={file.path} alt=""/>
          ) : null}
          {videos.includes(file.type) ? (
            <video width={100} height={100} controls>
              <source src={file.path} type={file.type}/>
            </video>
          ) : null}
          {documents.includes(file.type) ? (
            <a className="pdf" href={file.path} target="_blank">
              <iframe width={100} height={100} src={file.path}/>
            </a>
          ) : null}
          {![...images, ...videos, ...documents].includes(file.type) ? (
            <a href={file.path} download={file.name}>
              {file.name}
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default MessageFiles;

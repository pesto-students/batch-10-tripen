/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'react-bootstrap';
import './ImgDropAndCrop.css';


const ImgDropAndCrop = () => {
  const [imgSrc, setImgSrc] = useState(null);

  const maxSize = 3145728;

  const handleOnDrop = (file, rejectedFile) => {
    if (file && file.length > 0) {
      const currentFile = file[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgSrc(reader.result);
      }, false);
      reader.readAsDataURL(currentFile);
    } else if (rejectedFile && rejectedFile.length > 0) {
      if (rejectedFile[0].size > 0) {
        //   Set Alert here
      }
    }
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: handleOnDrop,
    maxSize,
    multiple: false,
    accept: 'image/*',
  });

  const files = acceptedFiles.map((file) => (`${file.path}-${file.size} bytes`));

  const removeImage = () => {
    setImgSrc(null);
  };


  const imageDiv = () => (
    <div>
      <Button onClick={removeImage}>Remove</Button>
    </div>
  );
  return (
    <div>
      <div {...getRootProps({ className: 'dropzone text-center pl-5 pr-5 pt-3 mt-4 mb-4' })}>
        <input {...getInputProps()} />
        {imgSrc === null ? null : imageDiv()}
        {files.length > 0 ? <p>{files}</p>
          : <h5>Drag and drop cover image here or click/touch to upload.(Max size 3 MB)</h5>}
      </div>
    </div>
  );
};


export default ImgDropAndCrop;

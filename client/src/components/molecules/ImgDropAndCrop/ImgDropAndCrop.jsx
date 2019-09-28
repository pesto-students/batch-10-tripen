/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dropzone from 'react-dropzone';

const ImgDropAndCrop = () => {
  const handleOnDrop = (files) => (console.log(files));
  return (
    <div>
      <Dropzone onDrop={handleOnDrop} maxSize={3145728} multiple={false} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag &apos;n&apos; drop cover photo here. (Max size 3MB)</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default ImgDropAndCrop;

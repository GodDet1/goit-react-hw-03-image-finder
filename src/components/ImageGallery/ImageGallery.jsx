import { PropTypes } from 'prop-types';
import React from 'react';
import { MyList } from './styled.module';

function ImageGallery({ children }) {
  return <MyList>{children}</MyList>;
}

ImageGallery.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ImageGallery;

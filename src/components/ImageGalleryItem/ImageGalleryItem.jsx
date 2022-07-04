import { PropTypes } from 'prop-types';
import React from 'react';
import { MyImg, MyListItem } from './styled.module';

function ImageGalleryItem({ dataImage, handleId }) {
  return dataImage.map(item => (
    <MyListItem
      key={item.id}
      className="gallery-item"
      onClick={() => {
        handleId(item.id);
      }}
    >
      <MyImg src={item.webformatURL} alt={item.tags} width="362" />
    </MyListItem>
  ));
}

ImageGalleryItem.propTypes = {
  dataImage: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ImageGalleryItem;

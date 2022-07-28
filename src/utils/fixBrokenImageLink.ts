import { SyntheticEvent } from 'react';

const fixBrokenImageLink = (event: SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.src =
    'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584296.jpg';
  event.currentTarget.onerror = null;
};

export default fixBrokenImageLink;

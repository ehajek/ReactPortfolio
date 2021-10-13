import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <p>{currentCategory.description}</p>
    </section>
  );
}
export default Gallery;

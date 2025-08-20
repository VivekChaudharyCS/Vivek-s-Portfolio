import React from 'react';
import PropTypes from 'prop-types';

function BlurBlob({position, size}) {
    const {top, right} = position;
    const {height, width} = size;
  return (
    <div className='absolute'
        style={{
            top: top,
            right: right,
            width: width,
            height: height, 
            transform: 'translate(50%, -50%)',
        }}
    >
        <div className='w-full h-full bg-[#0fbbff] rounded-full opacity-20 blur-3xl animate-blob'>

        </div>
      
    </div>
  )
}

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlurBlob

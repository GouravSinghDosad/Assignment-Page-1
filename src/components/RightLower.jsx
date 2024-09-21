import React from 'react'
import './RightLower.css'
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import image1 from '../Images/Img1.jpg'
import image2 from '../Images/Img2.jpg'
import image3 from '../Images/Img3.jpg'
import image4 from '../Images/Img4.jpg'
import image5 from '../Images/Img5.jpg'
import image6 from '../Images/Img6.jpg'
import image7 from '../Images/Img7.jpg'
import { useRef } from 'react';


function RightLower() {

  const fileInputRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
};

const scrollLeft = () => {
  scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
};

const scrollRight = () => {
  scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
};

  return (
    <div className='lower_box'>
      <div className='navbar'>
          <button id='button'>Gallery</button>

          <button id='add_image' onClick={handleButtonClick}>+ ADD IMAGE</button>
          <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
            />

          <button className='arrow_btn' onClick={scrollLeft}>
            <FaArrowLeft className="arrow-icon" />
          </button>

          <button className='arrow_btn' onClick={scrollRight}>
            <FaArrowRight className="arrow-icon" />
          </button>
      </div>

      <div className="gallery-section">
      <div className="image-slider" 
      ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    overflowX: 'auto',
                    width: '80%',
                    whiteSpace: 'nowrap'
                }}>
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
        <img src={image5} alt="Image 5" />
        <img src={image6} alt="Image 6" />
        <img src={image7} alt="Image 7" />
      </div>
    </div>
    </div>
  )
}

export default RightLower

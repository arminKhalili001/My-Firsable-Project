import React, { useState } from 'react'
import SliderData from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


import './ImageSlider.css';
import { useEffect } from 'react';

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;


    const PreSlide = () => {

        setCurrent(current === 0 ? 5 : current - 1)
    }
    const NextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    // useEffect(()=> {
    //     setTimeout(()=> setCurrent(current === length - 1 ? 0 : current + 1),10000)
    // })
   
    return (
        <section className='Slider'>
            <FaArrowAltCircleLeft className="Left-arrow" onClick={PreSlide} />
            <FaArrowAltCircleRight className="Right-arrow" onClick={NextSlide} />

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {
                            index === current &&
                            
                            <img src={slide.image} alt='Home image' className='Slider-image' />
                        }
                    </div>
                )
            })}

        </section>
    )
}

export default ImageSlider


import React from 'react';
import { useState } from 'react';
import { FaChevronLeft,FaChevronRight,FaQuoteRight  } from "react-icons/fa";
import { developers } from '../data/developers';
const Developer = () => {
    // const {name, job, text, image } = developers[0]

const [index, setIndex] = useState(0)
const {name,job, image, text,} = developers[index]

const nextPerson = () =>{
  setIndex((currentIndex)=>{
    const newIndex = currentIndex + 1
    if(newIndex > developers.length -1){
      return 0;
    }
    return newIndex
  })
}
const prevPerson = () =>{
  setIndex((currentIndex)=>{
    const newIndex = currentIndex - 1
    if(newIndex < 0  ){
      return developers.length -1;
    }
    return newIndex
  })
} 
    return (
        <main className="developer-container" id="developers">
            <h2>Developer</h2>
            <article className='review'>
            <div className="img-container">
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'> <FaQuoteRight/></span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="btn-container">
            <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
            <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>
            </div>
        </article>
        </main>
    );
};

export default Developer;
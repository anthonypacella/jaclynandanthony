import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../images/image1.jpg';
import photo2 from '../images/image2.jpg';
import photo3 from '../images/image3.jpg';
import photo4 from '../images/image4.jpg';
import photo5 from '../images/image5.jpg';
import photo6 from '../images/image6.jpg';


export default function Home() {
    return (
      <div className =  'fullContainer '>
        <div className = 'transparent has-text-centered headerContainer'>
          <div className= 'mainHeader'>
            <h1 className = 'has-text-weight-semibold'>JACLYN & ANTHONY</h1>
          </div>
          <div className = 'backHeaders'>
            <h1 className='cursive'>jaclyn&nbsp; anthony</h1>
          </div>
        </div>
        
        <div className='container photoContainer'>
          <figure className = 'image photo1Container'>
            <img className = 'collagePhoto photo1' src={photo1}></img>
          </figure>
          <figure className = 'image photo2Container'>
            <img className = 'collagePhoto photo2' src={photo2}></img>
          </figure>
          <figure className = 'image photo3Container'>
            <img className = 'collagePhoto photo3' src={photo3}></img>
          </figure>
          <figure className = 'image photo4Container'>
            <img className = 'collagePhoto photo4' src={photo4}></img>
          </figure>
          <figure className = 'image photo5Container'>
            <img className = 'collagePhoto photo5' src={photo5}></img>
          </figure>
          <figure className = 'image photo6Container'>
            <img className = 'collagePhoto photo6' src={photo6}></img>
          </figure>
        </div>

        <div className="columns storyContainer">
          <div className="column">
            <div className="box storyTitleBlock">
              <span className = 'storyClass'></span>
              <span className = 'storyClass'>
                A STORY
                <br></br>
                TEN YEARS
                <br></br>
                IN THE
                <br></br>
                MAKING</span>
            </div>
          </div>
          <div className="column storyparagraphContainer">
            <div className="">
              <p className='title is-5'>A STORY TEN YEARS IN THE MAKING</p>
              <p className='storyParagraph'>
                Jaclyn and Anthony's story begins in 2013 at The Ohio State University - where they both attended college. 
                <br></br>
                <br></br>
                Being from the same hometown, it was only a matter of time until their many mutual friends in Columbus led them to cross paths.
                <br></br>
                <br></br>
                After 7 wonderful years together, Anthony asked Jaclyn to marry him on the beach in one of their favorite places in the world: Orange Beach, Alabama. Both Anthony and Jaclyn couldn't be more exctied to celebrate with you in June!
                </p>
            </div>
          </div>
        </div>
      </div>

      );
  }

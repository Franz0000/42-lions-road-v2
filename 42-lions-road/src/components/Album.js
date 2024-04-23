
import React from 'react';
import Photos from "./Photos";
import Title from "./Title";
import { gallery } from "../data/gallery";

const Album = () => {
    return <>
        <section className='section' id='gallery'>
            <Title title="Gallery" subTitle="Album"></Title>
            <div className='section-center featured-center'>
            {gallery.map((data) => {
                return <Photos {...data} key={data.id}></Photos>
            })}
            </div>
        </section>
        
    </> 
};


export default Album;

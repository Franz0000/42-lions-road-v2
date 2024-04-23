import { useState } from "react";
import  PhotoAlbum  from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
const Photos = ({id,images,title, date,info,location,highlights}) =>{
    const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
    const [index, setIndex] = useState(-1);

    const Photos = images.map((photo) => ({
        src: photo.src,
        width: photo.width,
        height: photo.height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
              src: photo.src,
              width: breakpoint,
              height,
            };
        }),
    }))

    return (
        <article className='tour-card'>
          <div className='tour-img-container'>
          <PhotoAlbum layout="columns" photos={highlights} key={id}targetRowHeight={150} onClick={({ index }) => setIndex(index)}/>
            <Lightbox
                slides={Photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            <p className='tour-date'>{date}</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>{title}</h4>
            </div>
            <p>{info}</p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>
                {location}
              </p>
            </div>
          </div>
        </article>
      )
}
export default Photos;
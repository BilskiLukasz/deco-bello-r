import { imgsGallery } from '../assets/images';
import { useState } from 'react';
import fakeBG from '../assets/fake-bg.png';

const Gallery = () => {
    const [activeImg, setActiveImg] = useState(imgsGallery[0].url)


    return ( 
        <div className="gallery margin-section">                      
            <div className="gallery-preview" style={{backgroundImage: `url(${activeImg})`}}>
                <img className="fakeBG" src={fakeBG} alt="empty background"/>
            </div>
            <div className="width-container">
                <p className="gallery-title">Przykładowe prace</p> 
                <div className="gallery-slider">
                    {imgsGallery.map(image => 
                        <div key={image.id} className="gallery-slider-item" onClick={(e) => setActiveImg(image.url)}>
                            <img key={image.id} className="gallery-slider-img" src={image.url} alt=""/>
                        </div>
                    )}
                </div>
            </div> 
        </div>
     );
}
 
export default Gallery;
import { imgsGallery } from '../assets/images';
import { useState, useEffect } from 'react';
import fakeBG from '../assets/fake-bg.png';

const Gallery = () => {
    const [activeImg, setActiveImg] = useState(imgsGallery[0].url)
    const [render, setRender] = useState(false)

    useEffect( ()=> {
        window.addEventListener("scroll", ()=>{setRender(true)});
    },[])

    return ( 
        <div className="gallery margin-section">
        {render &&                     
            <div>
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
        }
        </div>
     );
}
 
export default Gallery;
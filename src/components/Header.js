import {useState, useEffect} from 'react';
import leftImage from  '../assets/header/Hero-1.jpg';
import centerImage from  '../assets/header/Hero-2.jpg';
import rightImage from  '../assets/header/Hero-3.jpg';

const Header = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImg = (imgUrl) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = imgUrl;
        image.onload = () => {
          resolve(imgUrl);
        }        
      })
    }

    Promise.all([loadImg(leftImage), loadImg(centerImage), loadImg(rightImage)])
    .then(() => {setImgsLoaded(true)})
  })

  return (    
    <div className="header container">
      { imgsLoaded ?
        <div className="header-bg">       
          <div className="header-bg-item" style={{ backgroundImage: `url(${leftImage})` }}></div>
          <div className="header-bg-item" style={{ backgroundImage: `url(${centerImage})` }}></div>
          <div className="header-bg-item" style={{ backgroundImage: `url(${rightImage})` }}></div> 
        </div>
        :
        <div className="header-bg header-bg-loading"></div>
      }     
    </div>
   );
}
 
export default Header;
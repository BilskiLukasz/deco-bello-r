import Tile from './Tile.js';

const ShortTiles = () => {
    const elements = [
        {title: "Styl boho",
        text: "Nisi, elit ut ornare arcu, egestas. Egestas sed ut massa et cursus lorem orci a sem. Nunc in adipiscing volutpat at aliquet orci. Donec quis lectus sagittis rutrum. Donec ac pellentesque mauris netus mauris tincidunt fringilla morbi vitae. Tempor dictum in enim proin porttitor eu. Nisi, elit ut ornare arcu, egestas. Egestas sed ut massa et cursus lorem orci a sem. Nunc in adipiscing volutpat at aliquet orci. Donec quis lectus sagittis rutrum. Donec ac pellentesque mauris netus mauris tincidunt fringilla morbi vitae. Tempor dictum in enim proin porttitor eu.",
        bgImg: "/gallery/gallery-9.jpg"},
        {title: "Styl rustykalny",
        text: "Nisi, elit ut ornare arcu, egestas. Egestas sed ut massa et cursus lorem orci a sem. Nunc in adipiscing volutpat at aliquet orci. Donec quis lectus sagittis rutrum. Donec ac pellentesque mauris netus mauris tincidunt fringilla morbi vitae. Tempor dictum in enim proin porttitor eu. ",
        bgImg: "/gallery/gallery-11.jpg"},        
        {title: "Tytuł kafla",
        text: "Nisi, elit ut ornare arcu, egestas. Egestas sed ut massa et cursus lorem orci a sem. Nunc in adipiscing volutpat at aliquet orci. Donec quis lectus sagittis rutrum. Donec ac pellentesque mauris netus mauris tincidunt fringilla morbi vitae. Tempor dictum in enim proin porttitor eu. ",
        bgImg: "/gallery/gallery-21.jpg"}
    ]


    return ( 
        <div className="shortTiles width-container margin-section">
            {elements.map(element => 
                <Tile title={element.title} text={element.text} bgImg={element.bgImg} key={element.bgImg}/>    
            )}
        </div> )
    ;    
}
 
export default ShortTiles;  
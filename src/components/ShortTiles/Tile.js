
const Tile = (props) => {


    return ( 
        <div className="tile text">
            <p className="tile-title">{props.title}</p>
            <p className="tile-text text">{props.text}</p>
            <div className="tile-arrow">
                <span className="tile-arrow-sign">&#129138;</span>
            </div>
            <div className="tile-bg" style={{backgroundImage: `url(${props.bgImg})`}}></div>
        </div>
     );
}
 
export default Tile;
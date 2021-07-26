const Parallax = () => {
    const element = {
        text: ["Spersonalizowne prezenty,", "nie wiem w sumie co tu może być,", "ale dobrze to wygląda"],
        imgUrl: "/Parallax.png"
    }

    return ( 
        <div className="parallax" style={{backgroundImage: `url(${element.imgUrl})`}}>
            <div className="width-container">
                {element.text.map((el, index) => (
                    <p key={index}>{el}</p>
                ))}
            </div>
        </div>
     );
}
 
export default Parallax;
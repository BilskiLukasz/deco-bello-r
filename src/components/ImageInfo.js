const ImageInfo = () => {
    const element = {
        title: "Krótko o nas i czym się zajmujemy",
        imgUrl: "/Profile.png",
        altTag: "Malesuada tristique amet",
        text: ["Malesuada tristique amet mi magnis in donec. Mattis interdum commodo pellentesque arcu. Vulputate sed pretium massa risus, amet odio massa. Phasellus quis vitae ut elementum. Tortor, quisque aliquam vestibulum, netus. Morbi massa in quis tellus. Ultrices velit quisque eget tellus enim sit aenean consectetur.", "Vulputate ut ac viverra eu quis elementum morbi. Mi malesuada senectus ultrices arcu, id nec blandit. Nisi velit ante neque aliquet. Arcu vestibulum, neque, orci vulputate. Et volutpat, vitae vel sit sapien, et amet. Egestas diam diam nullam elementum euismod dictumst proin. Venenatis ac vitae cursus sapien, duis vitae. Et leo, cum montes, congue eget scelerisque risus amet. Ut dictum arcu sed tellus maecenas in vulputate nulla donec. Sit et massa convallis.", "Phasellus quis vitae ut elementum. Tortor, quisque aliquam vestibulum, netus. Morbi massa in quis tellus. Ultrices velit quisque eget tellus enim sit aenean consectetur."]
    }

    return ( 
        <div id="about" className="imgInfo width-container">   
            <div className="imgInfo-img" style={{backgroundImage: `url(${element.imgUrl})`}}>
                <p className="imgInfo-title">{element.title}</p>               
            </div>

            <div className="imgInfo-text">
                {element.text.map((el, index) => (
                    <p className="text" key={index}>{el}</p>
                ))}
            </div>
        </div>
     );
}
 
export default ImageInfo;
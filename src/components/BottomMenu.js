const BottomMenu = () => {
    const items = [
        {id:0, text:'Dekoracje kościoła'},
        {id:1, text:'Dekoracje sal'},
        {id:2, text:'Unikatowe prezenty'},
        {id:3, text:'Usługi grawerskie'},
        {id:4, text:'Ozdoby na święta'},   
    ]    

    return ( 
        <div className="bottomMenu width-container">
            {items.map(item => {
                return <div key={item.id} className="bottomMenu-item">
                    <p>{item.text}</p>           
                </div>
            })}
        </div>
     );
}
 
export default BottomMenu;
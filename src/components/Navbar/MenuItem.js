const MenuItem = (props) => {

    return ( 
        <a
            href={props.href}
            className={`menu-item ${props.active ? "menu-item-active" : ""}`}
            style={{transition: `all .${props.delay+3}s ease-in-out`}}
        >
            {props.text}
        </a>
     );
}
 
export default MenuItem;
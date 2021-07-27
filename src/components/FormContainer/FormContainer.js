import Form from './Form';

const FormContainer = () => {
    return ( 
        <div id="contact" className="formContainer-bg">
            <div className="width-container formContainer">
                <Form />
                <div className="formContainer-msg">
                    <p>
                        ZAPRASZAM DO KONTAKTU<br />
                        PRZEZ FORMULARZ<br />
                        LUB PRZEZ MESSENGER
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default FormContainer;
import {useState} from 'react';


const Form = () => {
    const [isSending, setIsSending] = useState(false);
    const [visibleConfirmation, setvisibleConfirmation] = useState(false);
    
    const sendEmail = (e) =>{
        e.preventDefault();
        setIsSending(true);

        setTimeout(() => {
            setIsSending(false);
            setvisibleConfirmation(true);

            setTimeout(()=>{
                setvisibleConfirmation(false);
            },5000 )

        },1000)
    }
    

    return ( 
        <div className="form">
            <form>
                <input type="text" name="name" placeholder="Podaj imię"/>
                <input type="text" name="phone" placeholder="Numer telefonu"/>
                <input type="text" name="email" placeholder="Adres e-mail"/>   
                <textarea type="text" name="message" placeholder="Wpisz wiadomość" rows="7"/>
                {visibleConfirmation && <span className="form-confirmation">Dziękujemy za kontakt, odpowiemy wkrótce ;)</span>}           
                <button value="Wyślij" onClick={(e) => sendEmail(e)} className={isSending ? 'disabled' : undefined}>
                    {isSending ? <span className="loader"></span> : <span>Wyślij</span>}
                </button>
            </form>
        </div>
     );
}
 
export default Form;
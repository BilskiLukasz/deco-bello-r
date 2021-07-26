import {useState} from 'react'

const ReviewSlider = () => {

    const reviews = [
        {
            id: 0,
            review: "Aliquam enim, mi etiam non risus viverra ut scelerisque nisl. Aliquam enim, mi etiam non risus viverra ut scelerisque nisl.Aliquam enim, mi etiam ut scelerisque nisl. Aliquam enim, mi etiam non risus viverra ut scelerisque nisl. Nisi, elit ut ornare arcu, egestas.",
            author: "Konstanty",
            date: "03/04/2020"
        },
        {
            id: 1,
            review: "Nisi, elit ut ornare arcu, egestas. Egestas sed ut massa et cursus lorem orci a sem. Nunc in adipiscing volutpat at aliquet orci. Donec quis lectus sagittis rutrum. Donec ac pellentesque mauris netus mauris tincidunt fringilla morbi vitae. Tempor dictum in enim proin porttitor eu.",
            author: "Pellentesque",
            date: "03/06/2021"
        },
        {
            id: 2,
            review: "Tempor dictum in enim proin porttitor eu. Nisi, elit ut ornare arcu, egestas. Egestas sed ut massa et cursus lorem orci a sem. Nunc in adipiscing volutpat at aliquet orci. Donec quis lectus sagittis rutrum. Donec ac pellentesque mauris netus mauris tincidunt fringilla morbi vitae.",
            author: "Gienia",
            date: "07/07/2020"
        },
        {
            id: 3,
            review: "Risus viverra ut scelerisque nisl.Aliquam enim, mi etiam ut scelerisque nisl. Aliquam enim, mi etiam non risus viverra ut scelerisque nisl. Nisi, elit ut ornare arcu, egestas.",
            author: "Konstanty",
            date: "03/04/2020"
        },
    ]

    const [activeReview, setActiveReview] = useState(0);
    const [animation, setAnimation] = useState('')

    const changeSlide = (step) => {       

        const index = activeReview + step;

        if(reviews.hasOwnProperty(index)) {
            setActiveReview(index)
        } else if (index < 0){
            setActiveReview(reviews.length-1)
        } else {
            setActiveReview(0)
        }        
    }

    return ( 
        <div className="reviewSlider width-container margin-section">
            <div className="reviewSlider-button reviewSlider-button-prev" onClick={() => {changeSlide(-1); setAnimation('slide-from-left')}}>
                <p>&#8678;</p>
            </div>
            <div className="reviewSlider-description">
                <p className="reviewSlider-title">MÓWIĄ O NAS!!!</p>
                <p className={`text reviewSlider-review ${animation}`} key={reviews[activeReview].id}>{reviews[activeReview].review}</p>
                <p className="reviewSlider-author">{reviews[activeReview].author}, {reviews[activeReview].date}</p>
            </div>
            <div className="reviewSlider-button reviewSlider-button-next" onClick={() => {changeSlide(1); setAnimation('slide-from-right')}}>
                <p>&#8680;</p>
            </div>
        </div>
     );
}
 
export default ReviewSlider;
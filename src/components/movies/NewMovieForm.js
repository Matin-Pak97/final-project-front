import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMovieForm.module.css';

function NewMovieForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const yearInputRef = useRef();
    const descInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredYear = yearInputRef.current.value;
        const enteredDesc = descInputRef.current.value;
    
        const movieData = {
            title: enteredTitle,
            image: enteredImage,
            year: enteredYear,
            description: enteredDesc,
        }

        props.onAddMovie(movieData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Movie Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Movie Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="year">Movie Construction Year</label>
                    <input type="number" max="2024" required id="year" ref={yearInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea rows="5" required id="description" ref={descInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Movie</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMovieForm;
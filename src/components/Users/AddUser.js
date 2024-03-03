import React, {useState} from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter valid name and age'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'age can not be 0 or less',
                message: 'insert correct age'
            })
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usenameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ errorHandler} />}
            <Card className={classes.input}>
            <form action="" onSubmit={addUserHandler}>
                <label htmlFor="username">Name: &nbsp;</label>
                <input type="text" name="" id="username" value={enteredUsername} onChange={usenameChangeHandler} />
                <label htmlFor="age">Age: &nbsp;</label>
                <input type="number" name="" id="age" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Done!</Button>
            </form>
            </Card>
        </div>
  )
}

export default AddUser
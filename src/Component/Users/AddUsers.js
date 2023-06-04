import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "../UI/Card.css";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card>
      <form className={classes.form_control} onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
        </div>
        <div>
          <label htmlFor="age" id="age">
            Age
          </label>
          <input onChange={ageChangeHandler} type="number" id="age" value={enteredAge} />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUsers;

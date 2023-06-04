import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.user}>
      <ul>
        {props.users.map((user) => (
          <li id="user.id">
            {user.name}({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;

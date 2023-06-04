import React, { useState } from "react";
import "./App.css";
import AddUsers from "./Component/Users/AddUsers";

const App = () => {
  const [newUser, setNewUser] = useState([
    { name: "Andrias", age: 30, id: "name1" },
    { name: "Alis", age: 29, id: "name2" },
  ]);
  const addUserHandler = (enteredUser, enteredAge) => {
    setNewUser((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: enteredUser, age: enteredAge, id: Math.random().toString() });
      return updatedUsers;
    });
  };
  // if (newUser.length > 0) {
  //   content = <Form items={newUser} />;
  // }
  return (
    <div>
      <AddUsers onSubmit={addUserHandler} />
    </div>
  );
};

export default App;

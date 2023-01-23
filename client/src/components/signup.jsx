import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";
import './style.css';

const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const handelSubmit = async () => {
    console.log(newUser);
    const { data } = await axios.post(
      "http://localhost:4000/user",
      newUser
    );
    console.log(data);
    setNewUser({});
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handelSubmit();
        }}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(ev) => setNewUser({ ...newUser, name: ev.target.value })}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(ev) =>
              setNewUser({ ...newUser, email: ev.target.value })
            }
          />
          <span id="emailHelp" class="form-text">
           
          </span>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(ev) =>
              setNewUser({ ...newUser, password: ev.target.value })
            }
          />
        </div>

        <button type="submit" class="sign-up-form button">
          sign up
        </button>
      </form>
    </Fragment>
  );
};

export default Signup;

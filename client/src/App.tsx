import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const USERS = gql`
  query Users {
    allUsers {
      id
      name
      email
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <div className="card">
        <h2>Overview</h2>
        <p>
          This is a React + TypeScript + Apollo + Tailwind CSS template
          application created by <a href="">@banbanaste</a>. This React App is
          part of a fullstack template monorepo containerized by Docker and
          served by NGINX. The Following snippet is an example of fetching data
          from an Apollo GQL Server.
        </p>
        <h4>User Data Query Return</h4>
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </div>
    </div>
  );
}

export default App;

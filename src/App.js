import React from "react";
import "./App.css";
import { DataList } from "./DataList";

function App() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>BankAccounts</h1>
      </div>
      <hr></hr>
      <h2>My Account</h2>
      <hr></hr>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">AccountNumber</th>
            <th scope="col">CustomerID</th>
            <th scope="col">Type</th>
            <th scope="col">BranchAddress</th>
            <th scope="col">Create</th>
          </tr>
        </thead>
        <tbody>
          <DataList />
        </tbody>
      </table>
    </div>
  );
}

export default App;
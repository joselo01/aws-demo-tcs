import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="text-center"><h1>BankAccounts</h1></div>
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
    <tr>
      <th scope="row">186576453</th>
      <td>1</td>
      <td>Savings</td>
      <td>123 Mnain Street, New York</td>
      <td>2021-08-31</td>
    </tr>
    <tr>
      <th scope="row">186576454</th>
      <td>2</td>
      <td>Savings</td>
      <td>123 Mnain Street, New York</td>
      <td>2021-08-31</td>
    </tr>
    <tr>
      <th scope="row">186576455</th>
      <td>3</td>
      <td>Savings</td>
      <td>123 Mnain Street, New York</td>
      <td>2021-08-31</td>
    </tr>
    <tr>
      <th scope="row">186576456</th>
      <td>4</td>
      <td>Savings</td>
      <td>123 Mnain Street, New York</td>
      <td>2021-08-31</td>
    </tr>

   
  </tbody>
</table>
    </div>
  );
}

export default App;

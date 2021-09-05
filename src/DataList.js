import React from "react";

export const DataList = () => {
  const initialState = [
    {
      AccountNumber: "186576453",
      CustomerID: "1",
      Type: "Savings",
      BranchAddress: "123 Mnain Street, New York",
      Create: "2021-08-31",
    },
    {
      AccountNumber: "186576454",
      CustomerID: "2",
      Type: "Savings",
      BranchAddress: "123 Mnain Street, New York",
      Create: "2021-08-31",
    },
    {
      AccountNumber: "186576455",
      CustomerID: "3",
      Type: "Savings",
      BranchAddress: "123 Mnain Street, New York",
      Create: "2021-08-31",
    },
    {
      AccountNumber: "186576456",
      CustomerID: "4",
      Type: "Savings",
      BranchAddress: "123 Mnain Street, New York",
      Create: "2021-08-31",
    },
  ];

  const [data, setData] = React.useState(initialState);

  return (
    <>
      {data.map((item, CustomerID) => (
        <tr key={CustomerID}>
          <td>{item.AccountNumber}</td>
          <td>{item.CustomerID}</td>
          <td>{item.Type}</td>
          <td>{item.BranchAddress}</td>
          <td>{item.Create}</td>
        </tr>
      ))}
    </>
  );
};

import React from "react";

function Transaction({ date, description, category, amount, id,deleteTransaction }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={() => deleteTransaction(id)}>
          Delete
        </button>
      </td>

    </tr>
  );
}

export default Transaction;

import React from "react";
import "../App.css";
import Unified from "./Unified.js";

function Orders({ match, matchfull, matchChar, handleChipClick }) {
  //define the table columns for the page
  const matchColumns = [
    { id: "order", align: "left", label: "Order", minWidth: 100 },
  ];

  //dead-end the tablesort for this page
  const handleTableSort = () => {};

  return (
    <Unified
      source="orders"
      match={match}
      matchfull={matchfull}
      matchChar={matchChar}
      tableColumns={matchColumns}
      handleChipClick={handleChipClick}
      handleTableSort={handleTableSort}
    />
  );
}

export default Orders;

import React from "react";
import "../App.css";
import Unified from './Unified.js';

function Orders({ match, matchfull, handleChipClick }) {

  const matchColumns = [
    { id: "order", align: "left", label: "Order", minWidth: 100 }
  ];

  const handleTableSort = () => {};

  return (
    <Unified match={match} matchfull={matchfull} tableColumns={matchColumns} handleChipClick={handleChipClick} handleTableSort={handleTableSort} />
  )
}

export default Orders;

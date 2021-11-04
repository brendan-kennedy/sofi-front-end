import React from "react";
import "../App.css";
import Unified from './Unified.js';

function Houses({ match, matchfull, handleChipClick }) {

  const matchColumns = [
    { id: "house", align: "left", label: "House", minWidth: 100 }
  ];

  const handleTableSort = () => {};

  return (
    <Unified match={match} matchfull={matchfull} tableColumns={matchColumns} handleChipClick={handleChipClick} handleTableSort={handleTableSort} />
  )
}

export default Houses;

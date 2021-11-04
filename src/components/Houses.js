import React from "react";
import "../App.css";
import Unified from "./Unified.js";

function Houses({ match, matchfull, matchChar, handleChipClick }) {
  //define the table columns for the page
  const matchColumns = [
    { id: "house", align: "left", label: "House", minWidth: 100 },
  ];

  //dead-end the tablesort for this page
  const handleTableSort = () => {};

  return (
    <Unified
      source="houses"
      match={match}
      matchfull={matchfull}
      matchChar={matchChar}
      tableColumns={matchColumns}
      handleChipClick={handleChipClick}
      handleTableSort={handleTableSort}
    />
  );
}

export default Houses;

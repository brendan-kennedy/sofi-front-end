import React from "react";
import "../App.css";
import Unified from "./Unified.js";

function Characters({
  dataCard,
  dataTable,
  dataGroup,
  dataDrawer,
  handleChipClick,
  handleTableSort,
}) {

  const matchColumns = [
    { id: "name", align: "left", label: "Name", minWidth: 50 },
    { id: "house", align: "left", label: "House", minWidth: 50 },
    { id: "order", align: "left", label: "Order", minWidth: 50 },
  ];

  return (
    <Unified
      source="character"
      dataCard={dataCard}
      dataTable={dataTable}
      dataGroup={dataGroup}
      dataDrawer={dataDrawer}
      tableColumns={matchColumns}
      handleChipClick={handleChipClick}
      handleTableSort={handleTableSort}
    />
  );
}

export default Characters;

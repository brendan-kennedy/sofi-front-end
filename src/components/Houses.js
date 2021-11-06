import React from "react";
import "../App.css";
import Unified from "./Unified.js";

function Houses({ dataCard, dataTable, dataGroup, dataDrawer, handleTableSort, handleChipClick }) {
  const matchColumns = [
    { id: "name", align: "left", label: "Name", minWidth: 50 },
    { id: "house", align: "left", label: "House", minWidth: 50 },
    { id: "order", align: "left", label: "Order", minWidth: 50 },
  ];

  return (
    <Unified
      source="house"
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

export default Houses;

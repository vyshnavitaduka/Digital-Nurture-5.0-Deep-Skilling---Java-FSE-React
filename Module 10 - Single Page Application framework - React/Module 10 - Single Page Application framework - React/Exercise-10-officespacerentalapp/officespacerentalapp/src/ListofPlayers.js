import React from "react";
import IndianPlayers from "./IndianPlayers";

// NOTE: your screenshot showed these files inside "officespacerentalapp",
// even though the names suggest a cricket-players app instead. Kept as-is
// to match what was visible — verify this is correct for your assignment.

function ListofPlayers() {
  return (
    <div>
      <h2>List of Players</h2>
      <IndianPlayers />
    </div>
  );
}

export default ListofPlayers;

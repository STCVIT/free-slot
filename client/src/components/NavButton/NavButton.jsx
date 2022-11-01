import { useState } from "react";

import { createRoot } from "react-dom/client";
import links from "./LinkData";
import Link from "./Link";
const NavButton = () => {
  const [squares, setSquares] = useState(links);

  function toggle(id, component) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        const root = createRoot(document.getElementById("MeetingCards"));
        root.render(component);
        return square.id === id
          ? { ...square, on: true }
          : { ...square, on: false };
      });
    });
  }
  const squareElements = squares.map((square) => (
    <Link
      linkName={square.linkName}
      id={square.id}
      on={square.on}
      toggle={toggle}
      component={square.component}
    />
  ));
  return <ul className="grid grid-cols-3 w-full">{squareElements}</ul>;
};
export default NavButton;

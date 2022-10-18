import React from "react";
export default function Link(props) {
  const onActiveClass = props.on
    ? "border-blueTheme"
    : "border-transparent hover:border-gray-200";
  return (
    <button
      className={`px-4 py-2 border-b-4  transition-colors duration-300 ${onActiveClass}`}
      onClick={() => {
        return props.toggle(props.id, props.component);
      }}
    >
      {props.linkName}
    </button>
  );
}

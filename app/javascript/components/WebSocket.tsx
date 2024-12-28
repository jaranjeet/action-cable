import * as React from "react";
import * as ReactDOM from "react-dom";

interface WebSocketProps {
  arg: string;
}

function WebSocket({ arg }: WebSocketProps) {
  return <div>{`Hello, ${arg}!`}</div>;
}

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<WebSocket arg="Rails 7 with ESBuild" />, rootEl);
});
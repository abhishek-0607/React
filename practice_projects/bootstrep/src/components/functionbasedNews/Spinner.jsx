import React from "react";
import spin from "./spin.gif";
export const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spin} alt="Loading..." />
    </div>
  );
};

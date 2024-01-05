import React from "react";

export const ButtonReset = ({ reset }: { reset: () => void }) => {
  return (
    <button type="button" onClick={reset}>
      Reset
    </button>
  );
};

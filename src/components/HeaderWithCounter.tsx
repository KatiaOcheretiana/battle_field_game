import React from "react";

export const HeaderWithCounter = ({ turn }: { turn: number }) => {
  return (
    <>
      <h2>Your battle count: {turn}</h2>
    </>
  );
};

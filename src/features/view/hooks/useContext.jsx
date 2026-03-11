import { Typography } from "@mui/material";
import { useState } from "react";

export const UseContext = () => {
  return <Component1 />;
};

function Component1() {
  const [user] = useState("Linus");

  return (
    <>
    <Typography variant="h5">Hello {user}!</Typography>
    <Component2 user={user} />
    </>
);
}

function Component2({ user }) {
  return (
    <>
      <Typography variant="h6">Component 2</Typography>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <Typography variant="h6">Component 3</Typography>
      <Typography>Hello {user} again!</Typography>
    </>
  );
}
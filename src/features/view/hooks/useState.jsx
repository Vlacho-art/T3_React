import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const UseStatecolor = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color }}
        gutterBottom
      >
        My favorite color is {color}!
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button onClick={() => setColor("blue")}>Blue</Button>
        <Button onClick={() => setColor("red")}>Red</Button>
        <Button onClick={() => setColor("pink")}>Pink</Button>
        <Button onClick={() => setColor("green")}>Green</Button>
      </Stack>
    </>
  );
};
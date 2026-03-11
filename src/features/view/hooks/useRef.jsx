import { useRef } from "react";
import { Button, TextField, Stack, Typography } from "@mui/material";

export const UseRefExample = () => {
  const inputRef = useRef();

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        useRef
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Escribe algo"
          inputRef={inputRef}
          fullWidth
        />

        <Button variant="contained" onClick={enfocar}>
          Enfocar Input
        </Button>
      </Stack>
    </>
  );
};
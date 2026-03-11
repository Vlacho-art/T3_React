import { useState, useCallback } from "react";
import { Button, Typography } from "@mui/material";

export const UseCallbackExample = () => {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador(prev => prev + 5);
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        useCallback
      </Typography>

      <Typography variant="h4">
        Contador: {contador}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={incrementar}
      >
        Incrementar
      </Button>
    </>
  );
};
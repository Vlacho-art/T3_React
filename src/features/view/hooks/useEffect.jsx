import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export const UseEffectExample = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        useEffect
      </Typography>

      <Typography variant="h4">
        Contador automático: {contador}
      </Typography>
    </>
  );
};
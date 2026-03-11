import { useMemo, useState } from "react";
import { Button, Typography, Stack } from "@mui/material";

export const UseMemoExample = () => {
  const [numero, setNumero] = useState(0);
  const [otroEstado, setOtroEstado] = useState(0);

  const calculoPesado = (num) => {
    console.log("Calculando...");
    for (let i = 0; i < 500000000; i++)
    return num * 2;
  };

  const resultado = useMemo(() => {
    return calculoPesado(numero);
  }, [numero]);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        useMemo
      </Typography>

      <Stack spacing={2}>
        <Typography>Resultado: {resultado}</Typography>

        <Button onClick={() => setNumero(numero + 1)}>
          Cambiar número
        </Button>

        <Button onClick={() => setOtroEstado(otroEstado + 2)}>
          Otro estado ({otroEstado})
        </Button>
      </Stack>
    </>
  );
};
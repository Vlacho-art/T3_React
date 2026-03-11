import { useCart } from "../hooks/usecart";

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Stack
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Mybuys = () => {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeCart,
    clearCart
  } = useCart();

  const getPrice = (price) => {
    return Number(price.replace(/[^0-9]/g, ""));
  };

  const total = cart.reduce(
    (acc, item) => acc + getPrice(item.price) * item.qty,
    0
  );

  return (

    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >

      {/* CONTENIDO */}
      <Box sx={{ mt: 5, px: 3, flex: 1 }}>

        <Typography
  variant="h4"
  sx={{
    mb: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1
  }}
>
  <ShoppingCartIcon sx={{ color: "primary.main" }} fontSize="inherit" />
  Mi Carrito
</Typography>

        <Typography sx={{
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1
        }}>
          Tienes {cart.reduce((acc, item) => acc + item.qty, 0)} artículos en tu carrito
        </Typography>

        {cart.map((item) => {

          const subtotal = getPrice(item.price) * item.qty;

          return (

            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                p: 2
              }}
            >

              <CardMedia
                component="img"
                image={item.img}
                sx={{ width: 90 }}
              />

              <CardContent sx={{ flex: 1 }}>

                <Typography variant="h6">
                  {item.name}
                </Typography>

                <Typography>
                  {item.price}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>

                  <IconButton onClick={() => decreaseQty(item.id)}>
                    <RemoveIcon />
                  </IconButton>

                  <Typography>
                    {item.qty}
                  </Typography>

                  <IconButton onClick={() => increaseQty(item.id)}>
                    <AddIcon />
                  </IconButton>

                </Stack>

                <Typography sx={{ mt: 1 }}>
                  Subtotal: ${subtotal.toLocaleString()}
                </Typography>

              </CardContent>

              <IconButton
                color="error"
                onClick={() => removeCart(item.id)}
              >
                <DeleteIcon />
              </IconButton>

            </Card>

          );
        })}

        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >

          <Typography variant="h5">
            Total: ${total.toLocaleString()}
          </Typography>

          <Stack direction="row" spacing={2}>

            <Button
              variant="outlined"
              color="error"
              onClick={clearCart}
            >
              Vaciar Carrito
            </Button>

            <Button variant="contained">
              Pagar
            </Button>

          </Stack>

        </Box>

      </Box>

    </Box>
  );
};
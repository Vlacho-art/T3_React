import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography
} from "@mui/material";

import { useFavorites } from "../../auth/hooks/usefavorites";
import { useCart } from "../../auth/hooks/usecart";

export const Articles = () => {

  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { addCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Patineta Skate",
      category: "Deportes",
      price: "$159.900",
      img: "/img/Skate1.webp",
      stock: "En stock",
      alt: "Skate"
    },
    {
      id: 2,
      name: "Patineta Eléctrica",
      category: "Deportes",
      price: "$249.000",
      img: "/img/Electrica1.webp",
      stock: "Pocas unidades",
      alt: "Eléct"
    },
    {
      id: 3,
      name: "Patinetas Clásicas",
      category: "Deportes",
      price: "$49.900",
      img: "/img/Clasica.webp",
      stock: "En stock",
      alt: "Clásica"
    },
    {
      id: 4,
      name: "Patineta Skate Pro",
      category: "Deportes",
      price: "$399.000",
      img: "/img/Skate2.webp",
      stock: "Pocas unidades",
      alt: "Pro"
    }
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "70vh",
        px: 3,
        py: 5
      }}
    >

      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4 }}
      >
        Últimos Artículos
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap"
        }}
      >

        {products.map((product) => {

          const isFavorite = favorites.some((item) => item.id === product.id);

          return (

            <Card
              key={product.id}
              sx={{
                width: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >

              <CardMedia
                component="img"
                image={product.img}
                alt={product.alt}
                sx={{
                  height: 180,
                  objectFit: "contain",
                  p: 2
                }}
              />

              <CardContent>

                <Typography variant="h6">
                  {product.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Categoría: {product.category}
                </Typography>

                <Chip
                  label={product.stock}
                  color={product.stock === "En stock" ? "success" : "warning"}
                  size="small"
                  sx={{ mt: 1 }}
                />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  {product.price}
                </Typography>

              </CardContent>

              <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>

                <Button
                  size="small"
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => addCart(product)}
                >
                  Comprar
                </Button>

                {isFavorite ? (
                  <Button
                    size="small"
                    color="warning"
                    startIcon={<FavoriteIcon />}
                    onClick={() => removeFavorite(product.id)}
                  >
                    Quitar
                  </Button>
                ) : (
                  <Button
                    size="small"
                    color="error"
                    startIcon={<FavoriteIcon />}
                    onClick={() => addFavorite(product)}
                  >
                    Favoritos
                  </Button>
                )}

              </CardActions>

            </Card>
          );
        })}

      </Box>
    </Box>
  );
};
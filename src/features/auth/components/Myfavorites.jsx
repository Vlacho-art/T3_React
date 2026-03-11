import { useFavorites } from "../hooks/usefavorites";
import { Box, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';


export const Myfavorites = () => {

  const { favorites, removeFavorite } = useFavorites();

  return (

    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >

      <Box sx={{ mt: 5, px: 3, flex: 1 }}>

        <Typography
          variant="h4"
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1
          }}
        >
        <FavoriteIcon sx={{ color: "error.main" }} fontSize="inherit" />
          Mis Favoritos
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3
          }}
        >

          {favorites.map((item) => (

            <Card
              key={item.id}
              sx={{
                width: 260,
                borderRadius: 2,
                boxShadow: 3
              }}
            >

              <CardMedia
                component="img"
                height="160"
                image={item.img}
                sx={{ objectFit: "contain", p: 2 }}
              />

              <CardContent>

                <Typography variant="h6">
                  {item.name}
                </Typography>

                <Typography sx={{ mb: 2 }}>
                  {item.price}
                </Typography>

                <Button
                  size="small"
                  color="warning"
                  startIcon={<FavoriteIcon />}
                  onClick={() => removeFavorite(item.id)}
                >Quitar
                </Button>
              </CardContent>

            </Card>

          ))}

        </Box>

      </Box>

    </Box>
  );
};
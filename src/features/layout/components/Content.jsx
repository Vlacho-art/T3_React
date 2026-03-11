import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const Content = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "70vh",
        px: 3,
        py: 5,
      }}
    >
      {/* HERO */}
      <Card
        component="section"
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <CardMedia
          component="img"
          image="/img/Skate.webp"
          alt="Colección de patinetas profesionales skate"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1200"
          height="380"
          sx={{
            height: 380,
            objectFit: "cover",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 3,
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              color="white"
              mb={2}
            >
              Patinetas de Calidad
            </Typography>

            <Typography
              variant="body1"
              color="white"
              mb={3}
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Descubre nuestras patinetas profesionales: resistencia,
              diseño urbano y el mejor control para riders de todos los niveles.
            </Typography>

            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                href="https://github.com/Vlacho-art/T3_React.git"
                target="_blank"
                sx={{ borderRadius: "20px" }}
              >
                Ver Repositorio de GitHub
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>

      {/* TEXTO */}
      <Box component="section" sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Bienvenido a nuestra tienda
        </Typography>

        <Typography variant="body1">
          Encuentra tu estilo y domina las calles con nuestras patinetas de alta calidad.
        </Typography>
      </Box>

      {/* CARDS */}
      <Box
        component="section"
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          maxWidth: 1100,
          mx: "auto",
        }}
      >
        {/* CARD 1 */}
        <Card sx={{ width: 260 }}>
          <CardMedia
            component="img"
            image="/img/Clasica.webp"
            alt="Patineta clásica urbana"
            loading="lazy"
            decoding="async"
            width="260"
            height="160"
            sx={{
              height: 160,
              objectFit: "contain",
              p: 2,
            }}
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              Patinetas Clásicas
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Diseños clásicos resistentes y ligeros para uso urbano y recreativo.
            </Typography>
          </CardContent>
        </Card>

        {/* CARD 2 */}
        <Card sx={{ width: 260 }}>
          <CardMedia
            component="img"
            image="/img/Skate1.webp"
            alt="Patineta profesional para skate"
            loading="lazy"
            decoding="async"
            width="260"
            height="160"
            sx={{
              height: 160,
              objectFit: "contain",
              p: 2,
            }}
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              Patineta Skate
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Perfectas para trucos, rampas y alto rendimiento profesional.
            </Typography>
          </CardContent>
        </Card>

        {/* CARD 3 */}
        <Card sx={{ width: 260 }}>
          <CardMedia
            component="img"
            image="/img/Electrica.webp"
            alt="Patineta eléctrica moderna"
            loading="lazy"
            decoding="async"
            width="260"
            height="160"
            sx={{
              height: 160,
              objectFit: "contain",
              p: 2,
            }}
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="h3">
              Patineta Eléctrica
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Movilidad moderna con batería recargable y máxima velocidad urbana.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
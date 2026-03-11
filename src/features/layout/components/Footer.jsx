import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        width: '100%',
        textAlign: 'center'
      }}
    >
      <Typography variant="body2">
        © 2026 Vladimir Durango Vargas. Todos los derechos reservados.
      </Typography>
    </Box>
  )
}
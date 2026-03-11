import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge
} from '@mui/material'

import CssBaseline from '@mui/material/CssBaseline'

import MenuIcon from '@mui/icons-material/Menu'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ArticleIcon from '@mui/icons-material/Article'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HomeIcon from '@mui/icons-material/Home'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { useFavorites } from "../../auth/hooks/usefavorites";
import { useCart } from "../../auth/hooks/usecart";

export const Header = () => {

  const [open, setOpen] = useState(false)

  const { favorites } = useFavorites()
  const { cart } = useCart()

  const toggleDrawer = () => {
    setOpen(!open)
  }

  // contar productos reales del carrito
  const cartCount = cart.reduce((total, item) => total + item.qty, 0)

  const menuItems = [
    { text: "Inicio", icon: <HomeIcon />, path: "/" },
    { text: "Artículo", icon: <ArticleIcon />, path: "/articles" },
    { text: "Ofertas", icon: <LocalOfferIcon />, path: "/offers" },
    { text: "Mi Cuenta", icon: <AccountBoxIcon />, path: "/myaccount" },
    {
      text: "Favoritos",
      icon: (
        <Badge badgeContent={favorites.length} color="error">
          <BookmarkIcon />
        </Badge>
      ),
      path: "/myfavorites"
    },
    {
      text: "Carrito",
      icon: (
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      ),
      path: "/mybuys"
    }
  ]

  return (
    <>
      <CssBaseline />

      <AppBar position="fixed" color="secondary">

        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1
          }}
        >

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

            <IconButton
              color="inherit"
              aria-label="abrir menú"
              title="Abrir menú"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Sistema de Carrito
            </Typography>

          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: 'none', md: 'flex' }
            }}
          >

            <Button component={NavLink} to="/" startIcon={<HomeIcon />} color="inherit">
              Inicio
            </Button>

            <Button component={NavLink} to="/articles" startIcon={<ArticleIcon />} color="inherit">
              Artículo
            </Button>

            <Button component={NavLink} to="/offers" startIcon={<LocalOfferIcon />} color="inherit">
              Ofertas
            </Button>

            <Button component={NavLink} to="/myaccount" startIcon={<AccountBoxIcon />} color="inherit">
              Mi Cuenta
            </Button>

            <Button
              component={NavLink}
              to="/myfavorites"
              color="inherit"
              startIcon={
                <Badge badgeContent={favorites.length} color="error">
                  <BookmarkIcon />
                </Badge>
              }
            >
              Favoritos
            </Button>

          </Stack>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >

            <InputBase
              id='name'
              placeholder="Buscar productos..."
              inputProps={{ 'aria-label': 'buscar productos' }}
              autoComplete='off'
              sx={{
                backgroundColor: 'white',
                px: 2,
                py: 0.5,
                borderRadius: 5,
                width: { xs: 120, sm: 200 }
              }}
            />
            <IconButton
              component={NavLink}
              to="/mybuys"
              color="inherit"
              aria-label="ir al carrito"
              title="Carrito"
            >
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

          </Box>

        </Toolbar>

      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >

        <Box sx={{ width: 250 }}>

          <List>

            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                component={NavLink}
                to={item.path}
                onClick={toggleDrawer}
                aria-label={item.text}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />

              </ListItemButton>
            ))}

          </List>

        </Box>

      </Drawer>

      <Toolbar />

    </>
  )
}
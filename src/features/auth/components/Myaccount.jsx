import React, { useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton
} from '@mui/material'

import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export const Myaccount = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const passwordValid = password.length >= 8

  const formValid = emailValid && passwordValid

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formValid) return
    alert("Inicio de sesión correcto")
  }

  return (

    <main>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          background: '#f5f5f5'
        }}
      >

        <Card
          sx={{
            width: 400,
            borderRadius: 3,
            boxShadow: 5
          }}
        >

          <CardContent>

            <Typography
              variant="h5"
              align="center"
              sx={{ mb: 3, fontWeight: 'bold' }}
            >
              Bienvenido
            </Typography>

            <form onSubmit={handleSubmit}>

              <TextField
                fullWidth
                label="Correo electrónico"
                margin="normal"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                error={email !== '' && !emailValid}
                helperText={
                  email !== '' && !emailValid
                    ? "Introduce un correo válido"
                    : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon
                        sx={{
                          color: emailValid ? 'green' : 'inherit'
                        }}
                      />
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                fullWidth
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                margin="normal"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                error={password !== '' && !passwordValid}
                helperText={
                  password !== '' && !passwordValid
                    ? "Mínimo 8 caracteres"
                    : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon
                        sx={{
                          color: passwordValid ? 'green' : 'inherit'
                        }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 1
                }}
              >

                <FormControlLabel
                  control={<Checkbox />}
                  label="Recordarme"
                />

                <Typography
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    color: 'primary.main'
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </Typography>

              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!formValid}
                sx={{
                  mt: 2,
                  borderRadius: 2
                }}
              >
                INICIAR SESIÓN
              </Button>

              <Typography align="center" sx={{ mt: 2 }}>
                o
              </Typography>

              <Typography align="center" sx={{ mt: 1 }}>
                ¿No tienes cuenta?
                <Typography
                  component="span"
                  sx={{
                    ml: 1,
                    color: 'primary.main',
                    cursor: 'pointer'
                  }}
                >
                  Regístrate
                </Typography>
              </Typography>

            </form>

          </CardContent>

        </Card>

      </Box>

    </main>
  )
}


import React from 'react'
import { UseStatecolor } from '../hooks/useState'
import { UseReducerList } from '../hooks/useReducer'
import { UseContext } from '../hooks/useContext'
import { UseEffectExample } from '../hooks/useEffect'
import { UseCallbackExample } from '../hooks/useCallback'
import { UseRefExample } from '../hooks/useRef'
import { UseMemoExample } from '../hooks/useMemo'
import { StatusBar } from '../hooks/useOnelineState'

import { Box, Container, Card, CardContent } from "@mui/material";

export const Offers = () => {
  return (
    <Box sx={{ mt: 10, px: 3 }}>
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center"
          }}
        >

          <Card sx={{ width: 320 }}>
            <CardContent>
              <UseRefExample />
            </CardContent>
          </Card>

          <Card sx={{ width: 320 }}>
            <CardContent>
              <UseMemoExample />
            </CardContent>
          </Card>

          <Card sx={{ width: 320 }}>
            <CardContent>
              <UseCallbackExample />
            </CardContent>
          </Card>

          <Card sx={{ width: 320 }}>
            <CardContent>
              <UseReducerList />
            </CardContent>
          </Card>

          <Card sx={{ width: 320 }}>
            <CardContent>
              <UseStatecolor />
            </CardContent>
          </Card>

          <Card sx={{ width: 320 }}>
            <CardContent>
              <UseContext />
            </CardContent>
          </Card>

          <Card sx={{ width: 320 }}>
            <CardContent>
              <UseEffectExample />
            </CardContent>
          </Card>

          <Card sx={{ width: 320 }}>
            <CardContent>
              <StatusBar />
            </CardContent>
          </Card>

        </Box>

      </Container>
    </Box>
  )
}
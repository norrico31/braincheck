import Routes from './shared/routes/Routes'
import Container from '@mui/material/Container'
// import { useColorModeCtx } from './shared/contexts/Theme'

function App() {
  // const { mode, toggleColorMode } = useColorModeCtx()
  return <Container maxWidth='xl' sx={{ height: '100%' }}>
    <Routes />
  </Container>
}

export default App

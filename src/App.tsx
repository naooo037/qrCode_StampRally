import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from 'smarthr-ui'

import 'smarthr-ui/smarthr-ui.css'

import { Routes } from './routes'

const theme = createTheme()

export const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</ThemeProvider>
)

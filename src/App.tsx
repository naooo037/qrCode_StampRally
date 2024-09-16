import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from 'smarthr-ui'

import 'smarthr-ui/smarthr-ui.css'

import { ErrorScreenAdapter } from './components/layout/ErrorScreen'
import { Routes } from './routes'

const theme = createTheme()

export const App = () => (
	<ThemeProvider theme={theme}>
		<ErrorScreenAdapter>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</ErrorScreenAdapter>
	</ThemeProvider>
)

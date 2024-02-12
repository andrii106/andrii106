import { FC, PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import theme from './theme';

const MuiProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={createTheme(theme)}>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<CssBaseline />
					{children}
				</LocalizationProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default MuiProvider;

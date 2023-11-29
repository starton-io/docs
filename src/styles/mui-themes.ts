/*
| Developed by Starton
| Filename : mui-themes.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { createTheme, Theme } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Default Starton theme
|--------------------------------------------------------------------------
*/
let theme: Theme = createTheme({
	palette: {
		primary: {
			main: '#01FEE2',
			dark: '#01CBB5',
			light: '#67FEEE',
			hover: '#01FEE21A',
			contrastText: '#161B1F',
		},
		secondary: {
			main: '#35414C',
			dark: '#1E242A',
			light: '#8799AB',
			hover: '#A5B3C01A',
			contrastText: '#F1F3F5',
		},
		reverse: {
			main: '#1E242A',
			dark: '#0E1114',
			light: '#8799AB',
			hover: '#A5B3C033',
			contrastText: '#F1F3F5',
		},
		text: {
			primary: '#F1F3F5',
			secondary: '#8799AB',
			disabled: '#667C92',
		},
		background: {
			default: '#1A1F25',
			paper: '#161B1F',
			paper2: '#0E1114',
		},
		error: {
			main: '#F1486F',
			dark: '#EF2B58',
			light: '#FCDAE2',
			hover: '#F1486F1A',
			contrastText: '#161B1F',
		},
		warning: {
			main: '#E5791A',
			dark: '#B76115',
			light: '#FAE4D1',
			hover: '#E5791A1A',
			contrastText: '#161B1F',
		},
		info: {
			main: '#30B0FA',
			dark: '#0696E9',
			light: '#D6EFFE',
			hover: '#30B0FA1A',
			contrastText: '#161B1F',
		},
		success: {
			main: '#21DEA5',
			dark: '#1AB284',
			light: '#D3F8ED',
			hover: '#21DEA51A',
			contrastText: '#161B1F',
		},
		component: {
			alpha5: '#F1F3F50D',
			overlay: '#0E111480',
			disabled: '#35414C',
			uiWhite: '#F1F3F5',
			uiLight: '#8799AB',
			uiDarker: '#161B1F',
		},
		divider: '#435160',
		action: {
			active: '#A5B3C01A',
			hover: '#A5B3C01A',
			disabledOpacity: 0.5,
		},
		dataviz: {
			set1: {
				value1: '#01FEE2',
				value2: '#E5791A',
				value3: '#30B0FA',
				value4: '#F1486F',
				value5: '#21DEA5',
				value6: '#DD6AFA',
			},
			set2: {
				value1: '#1E242A',
				value2: '#35414C',
				value3: '#435160',
				value4: '#556779',
				value5: '#667C92',
				value6: '#8799AB',
				value7: '#A5B3C0',
			},
		},
	},
	typography: {
		h1: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 'Inktrap Ultrabold',
			lineHeight: '140%',
			fontSize: 48,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'uppercase',
		},
		h2: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 700,
			lineHeight: '140%',
			fontSize: 32,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'uppercase',
		},
		h3: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 600,
			lineHeight: '120%',
			fontSize: 24,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'uppercase',
		},
		h4: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 600,
			lineHeight: '150%',
			fontSize: 16,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'uppercase',
		},
		h5: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 'Inktrap Medium',
			lineHeight: '140%',
			fontSize: 14,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'uppercase',
		},
		h6: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 'Inktrap Medium',
			lineHeight: '140%',
			fontSize: 12,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'uppercase',
		},
		subtitle1: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 400,
			lineHeight: '140%',
			fontSize: 32,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'none',
		},
		subtitle2: {
			fontFamily: 'PP Neue Machina',
			fontWeight: 400,
			lineHeight: '135%',
			fontSize: 24,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'none',
		},
		body1: {
			fontFamily: 'Inter',
			fontWeight: 500,
			lineHeight: '160%',
			fontSize: 16,
			letterSpacing: -0.16,
			textDecoration: 'none',
			textTransform: 'none',
		},
		body2: {
			fontFamily: 'Inter',
			fontWeight: 500,
			lineHeight: '155%',
			fontSize: 14,
			letterSpacing: -0.16,
			textDecoration: 'none',
			textTransform: 'none',
		},
		button: {
			fontFamily: 'Fira Code',
			fontWeight: 500,
			lineHeight: '100%',
			fontSize: 14,
			letterSpacing: -0.16,
			textDecoration: 'none',
			textTransform: 'none',
		},
		button2: {
			fontFamily: 'Inter',
			fontWeight: 'Medium',
			lineHeight: '100%',
			fontSize: 12,
			letterSpacing: -0.16,
			textDecoration: 'none',
			textTransform: 'none',
		},
		overline: {
			fontFamily: 'Inter',
			fontWeight: 500,
			lineHeight: '115%',
			fontSize: 16,
			letterSpacing: 1.328,
			textDecoration: 'none',
			textTransform: 'uppercase',
		},
		caption: {
			fontFamily: 'Inter',
			fontWeight: 400,
			lineHeight: '130%',
			fontSize: 12,
			letterSpacing: -0.16,
			textDecoration: 'none',
			textTransform: 'none',
		},
		input: {
			label: {
				fontFamily: 'Inter',
				fontWeight: 500,
				lineHeight: '125%',
				fontSize: 14,
				letterSpacing: -0.16,
				textDecoration: 'none',
				textTransform: 'none',
			},
			placeholder: {
				fontFamily: 'Inter',
				fontWeight: 'Medium',
				lineHeight: '115%',
				fontSize: 14,
				letterSpacing: -0.16,
				textDecoration: 'none',
				textTransform: 'none',
			},
			info: {
				fontFamily: 'Inter',
				fontWeight: 500,
				lineHeight: '100%',
				fontSize: 12,
				letterSpacing: -0.16,
				textDecoration: 'none',
				textTransform: 'none',
			},
		},
		table: {
			header: {
				fontFamily: 'Inter',
				fontWeight: 'Medium',
				lineHeight: '170%',
				fontSize: 14,
				letterSpacing: 1.328,
				textDecoration: 'none',
				textTransform: 'uppercase',
			},
			text: {
				fontFamily: 'Inter',
				fontWeight: 500,
				lineHeight: '170%',
				fontSize: 14,
				letterSpacing: -0.16,
				textDecoration: 'none',
				textTransform: 'none',
			},
		},
		display: {
			sm: {
				fontFamily: 'PP Neue Machina',
				fontWeight: 700,
				lineHeight: '115%',
				fontSize: 40,
				letterSpacing: 1.328,
				textDecoration: 'none',
				textTransform: 'uppercase',
			},
			md: {
				fontFamily: 'PP Neue Machina',
				fontWeight: 700,
				lineHeight: '115%',
				fontSize: 48,
				letterSpacing: 1.328,
				textDecoration: 'none',
				textTransform: 'uppercase',
			},
			lg: {
				fontFamily: 'PP Neue Machina',
				fontWeight: 700,
				lineHeight: '115%',
				fontSize: 56,
				letterSpacing: 1.328,
				textDecoration: 'none',
				textTransform: 'uppercase',
			},
			xl: {
				fontFamily: 'PP Neue Machina',
				fontWeight: 700,
				lineHeight: '115%',
				fontSize: 60,
				letterSpacing: 1.328,
				textDecoration: 'none',
				textTransform: 'uppercase',
			},
		},
		underline: {
			xs: {
				fontFamily: 'Inter',
				fontWeight: 500,
				lineHeight: '130%',
				fontSize: 12,
				letterSpacing: -0.16,
				textDecoration: 'underline',
				textTransform: 'none',
			},
			sm: {
				fontFamily: 'Inter',
				fontWeight: 500,
				lineHeight: '155%',
				fontSize: 14,
				letterSpacing: -0.16,
				textDecoration: 'underline',
				textTransform: 'none',
			},
			md: {
				fontFamily: 'Inter',
				fontWeight: 500,
				lineHeight: '160%',
				fontSize: 16,
				letterSpacing: -0.16,
				textDecoration: 'underline',
				textTransform: 'none',
			},
			lg: {
				fontFamily: 'Inter',
				fontWeight: 500,
				lineHeight: '160%',
				fontSize: 20,
				letterSpacing: -0.16,
				textDecoration: 'underline',
				textTransform: 'none',
			},
		},
		nav: {
			title: {
				xs: {
					fontFamily: 'PP Neue Machina',
					fontWeight: 700,
					lineHeight: '100%',
					fontSize: 12,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'uppercase',
				},
				sm: {
					fontFamily: 'PP Neue Machina',
					fontWeight: 700,
					lineHeight: '100%',
					fontSize: 14,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'uppercase',
				},
				md: {
					fontFamily: 'PP Neue Machina',
					fontWeight: 700,
					lineHeight: '100%',
					fontSize: 16,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'uppercase',
				},
				lg: {
					fontFamily: 'PP Neue Machina',
					fontWeight: 700,
					lineHeight: '100%',
					fontSize: 20,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'uppercase',
				},
			},
			body: {
				xs: {
					fontFamily: 'Inter',
					fontWeight: 'Medium',
					lineHeight: '100%',
					fontSize: 12,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'none',
				},
				sm: {
					fontFamily: 'Inter',
					fontWeight: 'Medium',
					lineHeight: '100%',
					fontSize: 14,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'none',
				},
				md: {
					fontFamily: 'Inter',
					fontWeight: 'Medium',
					lineHeight: '100%',
					fontSize: 16,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'none',
				},
				lg: {
					fontFamily: 'Inter',
					fontWeight: 'Medium',
					lineHeight: '100%',
					fontSize: 20,
					letterSpacing: -0.16,
					textDecoration: 'none',
					textTransform: 'none',
				},
			},
		},
	},
	autoSpacingValues: {
		xs3: 2,
		xs2: 4,
		xs: 8,
		sm: 12,
		md: 16,
		lg: 20,
		xl: 24,
		xl2: 32,
		xl3: 40,
	},
	autoSizingValues: {
		xs: 8,
		sm: 12,
		md: 16,
		lg: 20,
		xl: 24,
		xl2: 32,
		xl3: 40,
		xl4: 48,
		xl5: 54,
		xl6: 60,
	},
})

/*
|--------------------------------------------------------------------------
| Utils
|--------------------------------------------------------------------------
*/
export const createAutoSpacing = (theme: Theme) => {
	return (...args: ReadonlyArray<string | number>) => {
		return args
			.map((key) => (key && typeof key === 'string' ? `${theme.autoSpacingValues[key]}px` : '0px'))
			.join(' ')
	}
}

export const createAutoSizing = (theme: Theme) => {
	return (...args: ReadonlyArray<string | number>) => {
		return args
			.map((key) => (key && typeof key === 'string' ? `${theme.autoSizingValues[key]}px` : '0px'))
			.join(' ')
	}
}

/*
|--------------------------------------------------------------------------
| Final theme with utils
|--------------------------------------------------------------------------
*/
theme = createTheme(theme, {
	autoSpacing: createAutoSpacing(theme),
	autoSizing: createAutoSizing(theme),
})

/*
|--------------------------------------------------------------------------
| Export
|--------------------------------------------------------------------------
*/
export default theme

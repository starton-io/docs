/*
|--------------------------------------------------------------------------
| DO NOT EDIT
| This file has been auto generated
| Please contact calixte@starton.com or join Starton discord
|--------------------------------------------------------------------------
*/

import React from 'react'
import { ColorPartial } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles' {
	interface PaletteColor {
		hover: string
	}

	interface SimplePaletteColorOptions {
		hover?: string
	}

	interface TypeBackground {
		paper2: string
	}

	interface Palette {
		primary: {
			main: string
			dark: string
			light: string
			hover: string
			contrastText: string
		}
		secondary: {
			main: string
			dark: string
			light: string
			hover: string
			contrastText: string
		}
		reverse: {
			main: string
			dark: string
			light: string
			hover: string
			contrastText: string
		}
		text: {
			primary: string
			secondary: string
			disabled: string
		}
		background: {
			default: string
			paper: string
			paper2: string
		}
		error: {
			main: string
			dark: string
			light: string
			hover: string
			contrastText: string
		}
		warning: {
			main: string
			dark: string
			light: string
			hover: string
			contrastText: string
		}
		info: {
			main: string
			dark: string
			light: string
			hover: string
			contrastText: string
		}
		success: {
			main: string
			dark: string
			light: string
			hover: string
			contrastText: string
		}
		component: {
			alpha5: string
			overlay: string
			disabled: string
			uiWhite: string
			uiLight: string
			uiDarker: string
		}
		divider: string
		dataviz: {
			set1: {
				value1: string
				value2: string
				value3: string
				value4: string
				value5: string
				value6: string
			}
			set2: {
				value1: string
				value2: string
				value3: string
				value4: string
				value5: string
				value6: string
				value7: string
			}
		}
	}

	interface PaletteOptions {
		primary?:
			| {
					main: string
					dark?: string
					light?: string
					hover?: string
					contrastText?: string
			  }
			| ColorPartial
		secondary?:
			| {
					main: string
					dark?: string
					light?: string
					hover?: string
					contrastText?: string
			  }
			| ColorPartial
		reverse?:
			| {
					main: string
					dark?: string
					light?: string
					hover?: string
					contrastText?: string
			  }
			| ColorPartial
		text?: {
			primary?: string
			secondary?: string
			disabled?: string
		}
		background?: {
			default?: string
			paper?: string
			paper2?: string
		}
		error?:
			| {
					main: string
					dark?: string
					light?: string
					hover?: string
					contrastText?: string
			  }
			| ColorPartial
		warning?:
			| {
					main: string
					dark?: string
					light?: string
					hover?: string
					contrastText?: string
			  }
			| ColorPartial
		info?:
			| {
					main: string
					dark?: string
					light?: string
					hover?: string
					contrastText?: string
			  }
			| ColorPartial
		success?:
			| {
					main: string
					dark?: string
					light?: string
					hover?: string
					contrastText?: string
			  }
			| ColorPartial
		component?:
			| {
					alpha5?: string
					overlay?: string
					disabled?: string
					uiWhite?: string
					uiLight?: string
					uiDarker?: string
			  }
			| ColorPartial
		divider?: string
		dataviz?:
			| {
					set1?: {
						value1?: string
						value2?: string
						value3?: string
						value4?: string
						value5?: string
						value6?: string
					}
					set2?: {
						value1?: string
						value2?: string
						value3?: string
						value4?: string
						value5?: string
						value6?: string
						value7?: string
					}
			  }
			| ColorPartial
	}

	interface TypographyVariants {
		h1: React.CSSProperties
		h2: React.CSSProperties
		h3: React.CSSProperties
		h4: React.CSSProperties
		h5: React.CSSProperties
		h6: React.CSSProperties
		subtitle1: React.CSSProperties
		subtitle2: React.CSSProperties
		body1: React.CSSProperties
		body2: React.CSSProperties
		button: React.CSSProperties
		button2: React.CSSProperties
		overline: React.CSSProperties
		caption: React.CSSProperties
		input: {
			label: React.CSSProperties
			placeholder: React.CSSProperties
			info: React.CSSProperties
		}
		table: {
			header: React.CSSProperties
			text: React.CSSProperties
		}
		display: {
			sm: React.CSSProperties
			md: React.CSSProperties
			lg: React.CSSProperties
			xl: React.CSSProperties
		}
		underline: {
			xs: React.CSSProperties
			sm: React.CSSProperties
			md: React.CSSProperties
			lg: React.CSSProperties
		}
		nav: {
			title: {
				xs: React.CSSProperties
				sm: React.CSSProperties
				md: React.CSSProperties
				lg: React.CSSProperties
			}
			body: {
				xs: React.CSSProperties
				sm: React.CSSProperties
				md: React.CSSProperties
				lg: React.CSSProperties
			}
		}
	}

	interface TypographyVariantsOptions {
		h1?: React.CSSProperties
		h2?: React.CSSProperties
		h3?: React.CSSProperties
		h4?: React.CSSProperties
		h5?: React.CSSProperties
		h6?: React.CSSProperties
		subtitle1?: React.CSSProperties
		subtitle2?: React.CSSProperties
		body1?: React.CSSProperties
		body2?: React.CSSProperties
		button?: React.CSSProperties
		button2?: React.CSSProperties
		overline?: React.CSSProperties
		caption?: React.CSSProperties
		input?: {
			label?: React.CSSProperties
			placeholder?: React.CSSProperties
			info?: React.CSSProperties
		}
		table?: {
			header?: React.CSSProperties
			text?: React.CSSProperties
		}
		display?: {
			sm?: React.CSSProperties
			md?: React.CSSProperties
			lg?: React.CSSProperties
			xl?: React.CSSProperties
		}
		underline?: {
			xs?: React.CSSProperties
			sm?: React.CSSProperties
			md?: React.CSSProperties
			lg?: React.CSSProperties
		}
		nav?: {
			title?: {
				xs?: React.CSSProperties
				sm?: React.CSSProperties
				md?: React.CSSProperties
				lg?: React.CSSProperties
			}
			body?: {
				xs?: React.CSSProperties
				sm?: React.CSSProperties
				md?: React.CSSProperties
				lg?: React.CSSProperties
			}
		}
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		h1: true
		h2: true
		h3: true
		h4: true
		h5: true
		h6: true
		subtitle1: true
		subtitle2: true
		body1: true
		body2: true
		button: true
		button2: true
		overline: true
		caption: true
		input: {
			label: true
			placeholder: true
			info: true
		}
		table: {
			header: true
			text: true
		}
		display: {
			sm: true
			md: true
			lg: true
			xl: true
		}
		underline: {
			xs: true
			sm: true
			md: true
			lg: true
		}
		nav: {
			title: {
				xs: true
				sm: true
				md: true
				lg: true
			}
			body: {
				xs: true
				sm: true
				md: true
				lg: true
			}
		}
	}
}

declare module '@mui/material/styles/createTheme' {
	interface Theme {
		autoSpacing: AutoSpacing
		autoSpacingValues: Record<string, number>

		autoSizing: AutoSizing
		autoSizingValues: Record<string, number>
	}

	interface ThemeOptions {
		autoSpacing?: AutoSpacing
		autoSpacingValues?: Record<string, number>

		autoSizing?: AutoSizing
		autoSizingValues?: Record<string, number>
	}
}

export type AutoSpacingKey = 'xs3' | 'xs2' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2' | 'xl3' | number

export type AutoSizingKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5' | 'xl6' | number

export interface AutoSpacing {
	(value: AutoSpacingKey): string
	(topBottom: AutoSpacingKey, rightLeft: AutoSpacingKey): string
	(top: AutoSpacingKey, rightLeft: AutoSpacingKey, bottom: AutoSpacingKey): string
	(top: AutoSpacingKey, right: AutoSpacingKey, bottom: AutoSpacingKey, left: AutoSpacingKey): string
}

export interface AutoSizing {
	(value: AutoSizingKey): string
	(topBottom: AutoSizingKey, rightLeft: AutoSizingKey): string
	(top: AutoSizingKey, rightLeft: AutoSizingKey, bottom: AutoSizingKey): string
	(top: AutoSizingKey, right: AutoSizingKey, bottom: AutoSizingKey, left: AutoSizingKey): string
}

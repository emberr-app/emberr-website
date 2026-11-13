export const themeStorageKey = 'emberr-theme';

export const browserBarColorByTheme = {
	light: '#ffffff',
	dark: '#080808'
};

export type Theme = keyof typeof browserBarColorByTheme;

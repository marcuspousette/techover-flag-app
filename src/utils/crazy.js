import { createTheme } from '@mui/material/styles';

const { palette } = createTheme();

export const getCraztTheme = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					upvote: palette.augmentColor({
						color: {
							main: '#2e7d32',
							contrastText: '#32009a'
						}
					}),
					downvote: palette.augmentColor({
						color: {
							main: '#d32f2f',
							contrastText: '#fff'
						}
					}),
					containerPrimary: palette.augmentColor({
						color: {
							main: '#fff',
							contrastText: '#black'
						}
					}),
					containerSecondary: palette.augmentColor({
						color: {
							main: '#fff',
							contrastText: '#black'
						}
					})
			  }
			: {
					mode: 'dark',
					upvote: palette.augmentColor({
						color: {
							main: '#66bb6a',
							contrastText: 'rgba(0,0,0,0.87)'
						}
					}),
					downvote: palette.augmentColor({
						color: {
							main: '#f44336',
							contrastText: '#fff'
						}
					}),
					containerPrimary: palette.augmentColor({
						color: {
							main: '#121212',
							contrastText: 'white'
						}
					}),
					containerSecondary: palette.augmentColor({
						color: {
							main: '#121212',
							contrastText: 'white'
						}
					})
			  })
	}
});

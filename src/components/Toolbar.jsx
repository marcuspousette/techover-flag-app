import * as React from 'react';
import { styled } from '@mui/material/styles';
//
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
//
import { Paper, Divider, ToggleButton } from '@mui/material';
import ToggleButtonGroup, { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';
import { ColorModeContext } from './App';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	[`& .${toggleButtonGroupClasses.grouped}`]: {
		margin: theme.spacing(0.5),
		border: 0,
		borderRadius: theme.shape.borderRadius,
		[`&.${toggleButtonGroupClasses.disabled}`]: {
			border: 0
		}
	},
	[`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]: {
		marginLeft: -1,
		borderLeft: '1px solid transparent'
	}
}));

export default function CustomizedDividers() {
	const colorMode = React.useContext(ColorModeContext);
	const [themeIndex, setThemeIndex] = React.useState(0);
	const [overrideLoading, setOverrideLoading] = React.useState(true);

	const handleFormat = (event, value) => {
		colorMode.toggleLoadingOverride(value === false ? true : false);
		setOverrideLoading((v) => (v === false ? true : false));
	};

	const handleTheme = (event, themeIndex) => {
		colorMode.toggleColorTheme(themeIndex);
		setThemeIndex(themeIndex);
	};

	return (
		<Paper
			elevation={4}
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				position: 'fixed',
				bottom: 50,
				left: '50%',
				transform: 'translateX(-50%)'
			}}
		>
			<StyledToggleButtonGroup
				size="small"
				value={themeIndex}
				exclusive
				onChange={handleTheme}
				aria-label="text alignment"
			>
				<ToggleButton value={0}>
					<Filter1Icon />
				</ToggleButton>
				<ToggleButton value={1}>
					<Filter2Icon />
				</ToggleButton>
				<ToggleButton value={2}>
					<Filter3Icon />
				</ToggleButton>
				<ToggleButton value={3}>
					<Filter4Icon />
				</ToggleButton>
			</StyledToggleButtonGroup>
			<Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
			<StyledToggleButtonGroup exclusive size="small" value={overrideLoading} onChange={handleFormat}>
				<ToggleButton value={false}>
					<HourglassTopIcon />
				</ToggleButton>
			</StyledToggleButtonGroup>
		</Paper>
	);
}

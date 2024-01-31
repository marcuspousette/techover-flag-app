import { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { ColorModeContext } from './App';
//
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
//
import { Paper, Divider, ToggleButton } from '@mui/material';
import ToggleButtonGroup, { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';

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

export default function Toolbar() {
	const colorMode = useContext(ColorModeContext);
	const [themeIndex, setThemeIndex] = useState(0);
	const [overrideLoading, setOverrideLoading] = useState(true);
	const [noContainer, setNoContainer] = useState(true);
	const [isAligned, setisAligned] = useState(true);

	const handleLoading = (event, value) => {
		colorMode.toggleLoadingOverride(value === false ? true : false);
		setOverrideLoading((v) => (v === false ? true : false));
	};

	const handleTheme = (event, themeIndex) => {
		if (themeIndex === null) return;
		colorMode.toggleColorTheme(themeIndex);
		setThemeIndex(themeIndex);
	};

	const handleNoContainer = (event, value) => {
		colorMode.toggleNoContainer(value === true ? false : true);
		setNoContainer((v) => (v === true ? false : true));
	};

	const handleisAligned = (event, value) => {
		colorMode.toggleisAligned(value === true ? false : true);
		setisAligned((v) => (v === true ? false : true));
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
				transform: 'translateX(-50%)',
				minWidth: 277
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
			</StyledToggleButtonGroup>
			<Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
			<StyledToggleButtonGroup exclusive size="small" value={overrideLoading} onChange={handleLoading}>
				<ToggleButton value={false}>
					<HourglassTopIcon />
				</ToggleButton>
			</StyledToggleButtonGroup>
			<StyledToggleButtonGroup exclusive size="small" value={noContainer} onChange={handleNoContainer}>
				<ToggleButton value={true}>
					<AlignHorizontalCenterIcon />
				</ToggleButton>
			</StyledToggleButtonGroup>
			<StyledToggleButtonGroup exclusive size="small" value={isAligned} onChange={handleisAligned}>
				<ToggleButton value={true}>
					<AlignVerticalCenterIcon />
				</ToggleButton>
			</StyledToggleButtonGroup>
		</Paper>
	);
}

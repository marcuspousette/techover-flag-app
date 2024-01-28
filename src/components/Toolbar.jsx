import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
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

export default function CustomizedDividers() {
	const [alignment, setAlignment] = React.useState('left');
	const [formats, setFormats] = React.useState(() => ['italic']);

	const handleFormat = (event, newFormats) => {
		setFormats(newFormats);
	};

	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment);
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
				value={alignment}
				exclusive
				onChange={handleAlignment}
				aria-label="text alignment"
			>
				<ToggleButton value="left" aria-label="left aligned">
					<FormatAlignLeftIcon />
				</ToggleButton>
				<ToggleButton value="center" aria-label="centered">
					<FormatAlignCenterIcon />
				</ToggleButton>
				<ToggleButton value="right" aria-label="right aligned">
					<FormatAlignRightIcon />
				</ToggleButton>
			</StyledToggleButtonGroup>
			<Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
			<StyledToggleButtonGroup size="small" value={formats} onChange={handleFormat} aria-label="text formatting">
				<ToggleButton value="bold" aria-label="bold">
					<FormatBoldIcon />
				</ToggleButton>
				<ToggleButton value="italic" aria-label="italic">
					<FormatItalicIcon />
				</ToggleButton>
			</StyledToggleButtonGroup>
		</Paper>
	);
}

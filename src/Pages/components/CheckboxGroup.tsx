import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
	const [state, setState] = React.useState({
		gilad: false,
		jason: false,
		antoine: false,
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		})
	}

	const { gilad, jason, antoine } = state

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormGroup>
					<FormControlLabel
						control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
						label="Traditional pen and paper screeners"
					/>
					<FormControlLabel
						control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
						label="Referral to specialists without preliminary assessment"
					/>
					<FormControlLabel
						control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
						label="Informal observations and patient/caregiver reports"
					/>
				</FormGroup>
			</FormControl>
		</Box>
	)
}
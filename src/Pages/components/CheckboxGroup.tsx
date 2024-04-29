/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '.';

export default function CheckboxesGroup(props: any) {
	const [checkboxState, setCheckboxState] = React.useState({
		paperScreeners: false,
		preliminaryAssess: false,
		patientReport: false,
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCheckboxState({
			...checkboxState,
			[event.target.name]: event.target.checked,
		})
	}

	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'center', }}>
				<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
					<FormGroup>
						<FormControlLabel
							control={<Checkbox checked={checkboxState['paperScreeners']} onChange={handleChange} name="paperScreeners" />}
							label="Traditional pen and paper screeners"
						/>
						<FormControlLabel
							control={<Checkbox checked={checkboxState['preliminaryAssess']} onChange={handleChange} name="preliminaryAssess" />}
							label="Referral to specialists without preliminary assessment"
						/>
						<FormControlLabel
							control={<Checkbox checked={checkboxState['patientReport']} onChange={handleChange} name="patientReport" />}
							label="Informal observations and patient/caregiver reports"
						/>
					</FormGroup>
				</FormControl>
			</Box>
			<div style={{ textAlign: 'center', marginTop: 50 }}>
				<Button size='large' sx={{ background: '#dedede' }} onClick={() => props?.onClick(checkboxState)}>Next</Button>
			</div>
		</>
	)
}
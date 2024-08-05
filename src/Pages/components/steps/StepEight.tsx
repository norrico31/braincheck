import { Box, Typography } from '@mui/material'
import { Button } from '..';
import { TextField } from '@mui/material'

type Props = {
    onClick: (v?: string) => void
    minsOfAssessingResult: number
    setMinsOfAssessingResult: React.Dispatch<React.SetStateAction<number>>
}

export default function StepEight({ minsOfAssessingResult, setMinsOfAssessingResult, onClick }: Props) {

    return (
        <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>How much time do you usually spend assessing cognitive conditions and interpreting the results for each patient?</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <TextField id="standard-basic" variant="standard" inputProps={{ style: { textAlign: 'center' } }}
                    value={minsOfAssessingResult}
                    onChange={e => setMinsOfAssessingResult(Number(e.target.value))}
                />
            </Box>
            <div style={{ marginTop: 50, display: 'grid', placeItems: 'center' }}>
                <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(minsOfAssessingResult + '')}>Next</Button>
            </div>
        </div>
    )
}

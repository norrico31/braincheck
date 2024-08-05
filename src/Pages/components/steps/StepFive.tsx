import { Box, Typography } from '@mui/material'
import { Button } from '..';

type Props = {
    onClick: (v?: string) => void
}

export default function StepFive({ onClick }: Props) {
    return (
        <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>With BrainCheck, it takes you just 15 minutes to do fast, reliable cognitive assessments for your patients.</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Fully reimbursable and life-changing.</Typography>
            </Box>
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(undefined)}>Next</Button>
            </div>
        </div>
    )
}

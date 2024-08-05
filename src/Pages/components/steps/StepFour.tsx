import { Box, Grid, Typography } from '@mui/material'
import { ButtonGrid } from '..';

type Props = {
    onClick: (v?: string) => void
}

export default function StepFour({ onClick }: Props) {
    return (
        <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Now let's talk about your patients</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >To accurately calculate your annual revenue with BrainCheck, <br /> how many of your patients are over 65?</Typography>
            </Box>
            <Grid container display='flex' justifyContent='center' gap={1}>
                {[
                    '0-20%',
                    '20-40%',
                    '40-60%',
                    'Over 60%',
                ].map((s, idx) => (
                    <Grid item xs={8} sm={5} md={3} lg={2} xl={2} key={idx}>
                        <ButtonGrid onClick={() => onClick(s)}>{s}</ButtonGrid>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

import { Box, Grid, Typography } from '@mui/material'
import { Button } from '..'

type Props = {
    onClick: (v?: string) => void
}

const btnsSteps = [
    'Not confident',
    'Somewhat confident',
    'Very Confident',
]

export default function StepTen({ onClick }: Props) {
    return (
        <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>How confident are you discussing cognitive health with your patients?</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Select your confidence level</Typography>
            </Box>
            <Grid container display='flex' justifyContent='center' gap={1}>
                {btnsSteps.map((s) => (
                    <Grid item xs={8} sm={5} md={3} lg={2} xl={2} key={s} textAlign='center'>
                        <Button onClick={() => onClick(s)} sx={{ background: '#eee' }}>{s}</Button>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

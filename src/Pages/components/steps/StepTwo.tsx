import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import ButtonGrid from '../ButtonGrid'

type Props = {
    onClick: (v: string) => void
}

const btnSteps = [
    'General internist',
    'Geritrician',
    'Neurologist',
    'Family doctor',
    'Neuropsychologist',
    'Psychiatrist',
    'Other',
]

export default function StepTwo({ onClick }: Props) {
    return (
        <Container maxWidth='lg'>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Tell us about your area of expertise</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Choose your specialization to see how BrainCheck can help you save time and equip you with your clear answers for your patients.</Typography>
            </Box>
            <Grid container display='flex' justifyContent='center' gap={1}>
                {btnSteps.map((s) => (
                    <Grid item xs={8} sm={5} md={3} lg={2} xl={2} key={s}>
                        <Paper>
                            <ButtonGrid onClick={() => onClick(s)}>{s}</ButtonGrid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

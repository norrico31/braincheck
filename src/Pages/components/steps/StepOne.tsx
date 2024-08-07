import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import ButtonGrid from '../ButtonGrid'

const btnSteps = [
    'Practitioner',
    'Nurse',
    'Technician',
    'Administrator',
    'Other',
]

type Props = {
    onClick: (v: string) => void
}

export default function StepOne({ onClick }: Props) {
    return (
        <Container maxWidth='lg'>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>A Personalized solution build around you</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Select your role to find how BrainCheck can <br /> empower your practice</Typography>
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


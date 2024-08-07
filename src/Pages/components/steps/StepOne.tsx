import { useState, useEffect } from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import ButtonGrid from '../ButtonGrid'
import axios from 'axios'

const btnSteps = [
    'Practitioner',
    'Nurse',
    'Technician',
    'Administrator',
    'Other',
]

type Props = {
    onClick: (v: string) => void
    state: any
}

export default function StepOne({ state, onClick }: Props) {
    // INTEGRATE API(GET) HERE USING USEEFFECT
    // const [state, setState] = useState()

    // useEffect(() => {
    //     const controller = new AbortController();
    //     let flag = false;
    //     !flag && (async () => {
    //         try {
    //             const res = await axios.get('/wordpress-api-get', { signal: controller.signal })
    //             console.log(`api result: ${res}`)
    //             // setState(res.data.data) set the here to display data from api
    //             flag = true
    //         } catch (error) {
    //             return error
    //         }
    //     })

    //     return () => {
    //         controller.abort()
    //         flag = true
    //     }
    // }, [])

    return (
        <Container maxWidth='lg'>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>A Personalized solution build around you</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Select your role to find how BrainCheck can <br /> empower your practice</Typography>
            </Box>
            <Grid container display='flex' justifyContent='center' gap={1}>
                {/* DISPLAY STATE HERE USING CURLY BRACKET {state.map()} */}
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


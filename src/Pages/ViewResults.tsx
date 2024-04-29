/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import Container from '@mui/material/Container'
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, Grid, IconButton, Paper, styled, TextField } from '@mui/material'
import { Button } from './components'
import { Link } from 'react-router-dom'

export default function ViewResult() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Box sx={{ background: '#bac5f5', height: '80svh' }}>
                <Container maxWidth='xl' sx={{ paddingTop: 5 }}>
                    <header >
                        <Typography variant='h5'>Logo</Typography>
                    </header>
                    <Box textAlign='center'>
                        <h1>Here is how much time and revenue <br />BrainCheck can generate for your practice</h1>
                    </Box>
                    <Grid container gap={2} display='flex' justifyContent='center'>
                        {/* {new Array(3).fill(null).map((_, idx) => (
                    <Grid item xs={8} sm={5} md={3} lg={3} xl={3} key={idx}>
                        <Paper elevation={3} sx={{ minHeight: 200, padding: '1rem' }}>
                            <Box>
                                <Typography component='p'>The estimated annual ROI for your practice <br /> <b>with 0 to 20% of patients over 65 is</b></Typography>
                            </Box>
                        </Paper>
                    </Grid>
                    ))} */}
                        <Grid item xs={8} sm={5} md={3} lg={3} xl={3} >
                            <Paper elevation={3} sx={{ minHeight: 250, padding: '2rem' }}>
                                <Box>
                                    <Typography component='p'>The estimated annual ROI for your practice <br /> <b>with 0 to 20% of patients over 65 is</b></Typography>
                                </Box>
                                <Box margin='30px 0'>
                                    <img src="" alt="" />
                                    <i>per year</i>
                                </Box>
                                <Box>
                                    <Typography component='p'>*Estimated incremental revenue <br /> per provider averaging one test per day</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={8} sm={5} md={3} lg={3} xl={3}>
                            <Paper elevation={3} sx={{ minHeight: 250, padding: '2rem' }}>
                                <Box>
                                    <Typography component='p'>Your estimated <b>time saved</b> is</Typography>
                                </Box>
                                <Box margin='30px 0'>
                                    <img src="" alt="" />
                                    <i>Hours / Year</i>
                                </Box>
                                <Box>
                                    <Typography component='p'>Based on 6 <b>providers</b> in your practice spending <b>30 minutes</b> with each patient</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={8} sm={5} md={3} lg={3} xl={3}>
                            <Paper elevation={3} sx={{ minHeight: 250, padding: '2rem' }}>
                                <Box>
                                    <Typography component='h4'>Grap your <br /> insights PDF</Typography>
                                </Box>
                                <Box marginTop='50px'>
                                    <Link to='/subscribe' style={{ textDecoration: 'none', padding: '10px 13px', background: '#d4d4d4', color: '#000' }}>Download</Link>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box display='flex' justifyContent='center' mt={3}>
                        <Button onClick={() => setOpenModal(true)}>
                            <CachedIcon />
                            Change your answers
                        </Button>
                    </Box>
                </Container>
            </Box>
            <ModalChangeAnswer
                open={openModal}
                handleClose={() => setOpenModal(false)}
            />
            <Box textAlign='center' padding={7}>
                <Typography variant='h4'>Essential reads for your specialization</Typography>
            </Box>
        </>
    )
}

function ButtonGrid({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return <Button sx={{ width: 110, background: '#3333' }} onClick={onClick}>{children}</Button>
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '1rem',
    color: theme.palette.text.secondary,
    height: 150
}));

function ModalChangeAnswer({ open, handleClose }: { open: boolean; handleClose: (v: boolean) => void }) {
    const [count, setCount] = useState(5)
    return <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries((formData as any).entries());
                const email = formJson.email;
                console.log(email);
                handleClose(false);
            },
        }}
        maxWidth='md'
        fullWidth={true}

    >
        <Box sx={{ background: '#bac5f5', padding: '1rem 1rem 2rem 1rem' }}>
            <Box textAlign='right'>
                <IconButton onClick={() => handleClose(false)} children={<CloseIcon />} />
            </Box>
            <Box sx={{ flexGrow: 1 }} display='flex' justifyContent='center' alignItems='center'>
                <Grid width={700} container spacing={2}>
                    <Grid item xs={6} md={14}>
                        <Item>
                            <Typography variant='h5'>How many patients are under <br /> your care are over 65?</Typography>
                            <Box mt='20px'>
                                <Grid container display='flex' justifyContent='center' gap={1}>
                                    {[
                                        '0-20%',
                                        '20-40%',
                                        '40-60%',
                                        'Over 60%',
                                    ].map((s, idx) => (
                                        <Grid item xs={8} sm={5} md={3} lg={2} xl={2} key={idx}>
                                            <ButtonGrid onClick={() => alert('aha')}>{s}</ButtonGrid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Item>
                            <Typography variant='h5' mb={2}>Time spent with <br /> each patient</Typography>
                            <TextField type='number' value={count} label="minutes" focused onChange={(e) => {
                                console.log(e.target.value)
                                setCount(Number(e.target.value))
                            }} />
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Item>
                            <Typography variant='h5' mb={2}>Number of <br /> providers</Typography>
                            <TextField type='number' value={count} label="number" focused onChange={(e) => {
                                console.log(e.target.value)
                                setCount(Number(e.target.value))
                            }} />
                        </Item>
                    </Grid>
                    <Box display='flex' justifyContent='center' alignItems='center' width='100%' mt={3}>
                        <Button sx={{ background: '#3333' }} onClick={() => handleClose(false)}>Show results</Button>
                    </Box>
                </Grid>
            </Box>
        </Box>
    </Dialog>
}
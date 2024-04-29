/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import Container from '@mui/material/Container'
import CachedIcon from '@mui/icons-material/Cached';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Modal, Paper, Slide, TextField } from '@mui/material'
import { Button } from './components'

const gridCard = []

export default function ViewResult() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Box sx={{ background: '#adbcff', height: '80svh' }}>
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
                                    <Button variant='outlined'>Download</Button>
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
        </>
    )
}


function ModalChangeAnswer({ open, handleClose }: { open: boolean; handleClose: (v: boolean) => void }) {

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
        <Box>
            <DialogActions>
                <Button onClick={() => handleClose(false)}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Box>
        {/* <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
            <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
            </DialogContentText>
            <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
        </DialogContent> */}
    </Dialog>
}
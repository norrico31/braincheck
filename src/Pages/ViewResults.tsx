/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CachedIcon from '@mui/icons-material/Cached';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Dialog, FormControlLabel, Grid, IconButton, Paper, styled, Switch, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import { Button, Carousel, CollapseAccordion, ImageCard } from './components'
import { Link } from 'react-router-dom'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import DiagramPng from '../shared/assets/diagram.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function ViewResult() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Box sx={{ background: '#bac5f5' }}>
                <AppBar position='sticky' sx={{ background: '#dff5d2ec' }}>
                    <Container maxWidth='lg' sx={{ padding: '15px' }}>
                        <Typography variant='h5' color='#000'>BrainCheck</Typography>
                    </Container>
                </AppBar>
                <Container maxWidth='xl' sx={{ padding: '5px' }}>
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
                    <Box display='flex' justifyContent='center' padding='10px 0'>
                        <Button onClick={() => setOpenModal(true)}>
                            <CachedIcon />
                            Change your answers
                        </Button>
                    </Box>
                </Container>
            </Box>
            <ModalChangeAnswer open={openModal} handleClose={() => setOpenModal(false)} />
            <Box textAlign='center' padding={2} paddingTop={10} >
                <Typography variant='h4'>Essential reads for your specialization</Typography>
                <Container maxWidth='lg' sx={{ margin: '2rem auto' }}>
                    <Grid container spacing={2} mt='10px' padding={5}>
                        <Grid item xs={15} sm={14} md={6} zeroMinWidth>
                            <Item sx={{ background: '#ecf0c7ed' }}>
                                <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} mb={2}>Publication</Typography>
                                <Typography noWrap variant='h6' component='p'>Measuring Executive Function <br />With The Stroop Test</Typography>
                                <Typography variant='caption' sx={{ fontSize: 11, textTransform: 'uppercase' }} mb={2}>Roland Hafner, Tim Hertweck, et. al arXiv 2020</Typography>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <Button sx={{ display: 'flex', alignItems: 'center', margin: '10px 0', background: '#eeee', border: '1px solid #000', borderRadius: 3, padding: '7px' }} size='small'>
                                        Download
                                        <ArrowDownwardIcon />
                                    </Button>
                                    <IconButton sx={{ background: 'yellow' }} children={<ArrowForwardIcon />} />
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={15} sm={14} md={6} zeroMinWidth>
                            <Item sx={{ background: '#ecf0c7ed' }}>
                                <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} mb={2}>Blog post</Typography>
                                <Typography noWrap variant='h6' component='p'>Are Prescriptions Helping or Harms Dementia Patients? Executive Function With The Stroop Test</Typography>
                                <Typography variant='caption' sx={{ fontSize: 11, textTransform: 'uppercase' }}>Roland Hafner, Tim Hertweck, et. al arXiv 2020</Typography>
                                <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} margin='10px 0'>18 May 2020</Typography>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <Button sx={{ display: 'flex', alignItems: 'center', margin: '10px 0', background: '#eeee', border: '1px solid #000', borderRadius: 3, padding: '7px' }} size='small'>
                                        Download
                                        <ArrowDownwardIcon />
                                    </Button>
                                    <IconButton sx={{ background: 'yellow' }} children={<ArrowForwardIcon />} />
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={15} sm={14} md={6} zeroMinWidth>
                            <Item sx={{ background: '#ecf0c7ed' }}>
                                <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} mb={2}>Publication</Typography>
                                <Typography noWrap variant='h6' component='p'>Are Prescriptions Helping or Harms Dementia Patients? Executive Function With The Stroop Test</Typography>
                                <Typography variant='caption' sx={{ fontSize: 11, textTransform: 'uppercase' }}>Roland Hafner, Tim Hertweck, et. al arXiv 2020</Typography>
                                <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} margin='10px 0'>18 May 2020</Typography>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <Button sx={{ display: 'flex', alignItems: 'center', margin: '10px 0', background: '#eeee', border: '1px solid #000', borderRadius: 3, padding: '7px' }} size='small'>
                                        Download
                                        <ArrowDownwardIcon />
                                    </Button>
                                    <IconButton sx={{ background: 'yellow' }} children={<ArrowForwardIcon />} />
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={15} sm={14} md={6} zeroMinWidth>
                            <Item sx={{ background: '#ecf0c7ed' }}>
                                <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} mb={2}>Blog post</Typography>
                                <Typography noWrap variant='h6' component='p'>Measuring Executive Function <br />With The Stroop Test</Typography>
                                <Typography variant='caption' sx={{ fontSize: 11, textTransform: 'uppercase' }} mb={2}>Roland Hafner, Tim Hertweck, et. al arXiv 2020</Typography>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <Button sx={{ display: 'flex', alignItems: 'center', margin: '10px 0', background: '#eeee', border: '1px solid #000', borderRadius: 3, padding: '7px' }} size='small'>
                                        Download
                                        <ArrowDownwardIcon />
                                    </Button>
                                    <IconButton sx={{ background: 'yellow' }} children={<ArrowForwardIcon />} />
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
                <Typography variant='h4'>Over 400 practices trust BrainCheck</Typography>
                <Container maxWidth='lg'>
                    <Box display='flex' gap={2} justifyContent='space-evenly'>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                        <div style={{ width: 100, height: 100, display: 'grid', placeItems: 'center' }}>
                            <InstagramIcon fontSize='large' />
                        </div>
                    </Box>
                </Container>
                <Container maxWidth='lg' sx={{ background: '#ecf0c7ed', textAlign: 'left' }}>
                    <Box padding={5}>
                        <Typography variant='h4'>What your <b>Annual Wellness <br /> Visit (AWV) workflow</b> looks like <br />  optimized with BrainCheck</Typography>
                    </Box>
                    <Box display='flex' justifyContent='flex-end'>
                        <img src={DiagramPng} alt="diagram" width={400} />
                    </Box>
                    <Box sx={{ padding: '20px' }}>
                        <ToggleSwitch />
                    </Box>
                </Container>
                <Container maxWidth='lg'>
                    <DataTable />
                </Container>
                <Container maxWidth='lg'>
                    <Grid container gap={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </Grid>
                </Container>
                <Container maxWidth='lg' sx={{ marginTop: 15 }}>
                    <Typography variant='h4'>Maximize your BrainCheck experience</Typography>
                    <Container maxWidth='lg' sx={{ margin: '2rem auto' }}>
                        <Grid container spacing={2} mt='10px' padding={5}>
                            <Grid item xs={15} sm={14} md={6} zeroMinWidth>
                                <Item sx={{ background: '#ecf0c7ed' }}>
                                    <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} mb={2}>Guide</Typography>
                                    <Typography noWrap variant='h6' component='p'>Measuring Executive Function <br />Explaining BrainCheck results to patients</Typography>
                                    <Typography variant='caption' sx={{ fontSize: 11, textTransform: 'uppercase' }} mb={2}>These educational resources can help provider <br /> learn more about remote cognitive testing and care</Typography>
                                    <Button sx={{ display: 'flex', alignItems: 'center', margin: '10px 0', background: '#eeee', border: '1px solid #000', borderRadius: 3, padding: '7px' }} size='small'>
                                        Download
                                        <ArrowDownwardIcon />
                                    </Button>
                                </Item>
                            </Grid>
                            <Grid item xs={15} sm={14} md={6} zeroMinWidth>
                                <Item sx={{ background: '#ecf0c7ed' }}>
                                    <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} mb={2}>Guide</Typography>
                                    <Typography noWrap variant='h6' component='p'>Clinical user guide</Typography>
                                    <Typography variant='caption' sx={{ fontSize: 11, textTransform: 'uppercase' }} mb={2}>These educational resources can help provider <br /> learn more about remote cognitive testing and care</Typography>
                                    <Typography noWrap variant='h5' sx={{ fontSize: 12, textTransform: 'uppercase' }} margin='10px 0'>18 May 2020</Typography>
                                    <Button sx={{ display: 'flex', alignItems: 'center', margin: '10px 0', background: '#eeee', border: '1px solid #000', borderRadius: 3, padding: '7px' }} size='small'>
                                        Download
                                        <ArrowDownwardIcon />
                                    </Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
                <Container maxWidth='lg'>
                    <Carousel />
                </Container>
                <Container maxWidth='lg'>
                    <Box mt={10}>
                        <Typography variant='h4'>Get the latest on Brain health</Typography>
                        <Typography variant='h6' component='p'>Join a network of specialists focused on advancing the field of cognitive <br />health, and get expert strategies to build cognitive resilience.</Typography>
                    </Box>
                    <Box margin='20px auto' width='30%' >
                        <EmailSubscribe />
                    </Box>
                    <Box>
                        <Typography variant='caption' sx={{ color: '#757575' }}>We're committed to your privacy and will not share your data with third parties. <br /> See our <b><Link to='/privacy-policy' style={{ color: 'inherit' }}>Privacy Policy</Link></b></Typography>
                    </Box>
                </Container>
                <Container maxWidth='lg'>
                    <Box mt={10} display='flex'>
                        <Box width='30%'>
                            <Typography variant='h4'><b>FAQs</b></Typography>
                        </Box>
                        <Box width='70%' >
                            <CollapseAccordion />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ background: '#dff5d2ec', padding: '4rem 5px', textAlign: 'center' }}>
                <Container maxWidth='lg' >
                    <Box>
                        <Typography variant='h4'>Need more support?</Typography>
                        <Typography variant='h6' component='p'>Get in touch with using our contact form or calling us directly</Typography>
                        <Button sx={{
                            marginTop: 3, background: 'transparent', border: '1px solid #000', borderRadius: 3, padding: '8px 24px', '&:hover': {
                                background: '#e4e4e4'
                            }
                        }}>Contact us</Button>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ background: '#000', color: '#fff', padding: '4rem 5px' }}>
                <Container maxWidth='md'>
                    <Box display='flex' gap={8}>
                        <Box display='grid' gap={2}>
                            <Typography variant='h6' component='p'>Menu</Typography>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 1</Link>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 2</Link>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 3</Link>
                        </Box>
                        <Box display='grid' gap={2}>
                            <Typography variant='h6' component='p'>Menu 2</Typography>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 1</Link>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 2</Link>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 3</Link>
                        </Box>
                        <Box display='grid' gap={2}>
                            <Typography variant='h6' component='p'>Menu 3</Typography>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 1</Link>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 2</Link>
                            <Link to='#' style={{ textDecoration: 'none', color: '#979797' }}>Menu item 3</Link>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

function EmailSubscribe() {
    return <>
        <TextField id="standard-basic" label="Full Name*" variant="standard" sx={{ marginTop: 5, width: '100%' }} />
        <Button sx={{
            marginTop: 3, background: '#000', color: '#fff', borderRadius: 3, padding: '8px 24px', '&:hover': {
                background: '#686868'
            }
        }}>Subscribe</Button>
    </>
}

function ToggleSwitch() {
    const [isToggle, setIsToggle] = useState(false)
    return <FormControlLabel
        control={<MaterialUISwitch
            sx={{ m: 1 }}
            defaultChecked
            value={isToggle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsToggle(e.target.checked)}
        />}
        label={!isToggle ? 'AWV' : 'Cognitive concern'}
    />
}

function DataTable() {
    return (
        <Box margin='100px 0'>
            {/* <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: undefined,
                }}
            // pageSizeOptions={[5, 10]}
            // checkboxSelection
            /> */}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <p></p>
                        </TableCell>
                        <TableCell>
                            <Typography variant='h6' component='p'>Resources we can offer you with a free account login</Typography>
                        </TableCell>
                        <TableCell sx={{ background: '#eeee' }}>
                            <Typography variant='h6' component='p'>Resources we can offer you with a paid comprehensive plan</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h6' component='p'>Learning platform</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                        <TableCell align='center' sx={{ background: '#eeee' }}>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h6' component='p'>Ongoing customer support</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                        <TableCell align='center' sx={{ background: '#eeee' }}>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h6' component='p'>Remote cognitive testing</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <CancelIcon fontSize='large' />
                        </TableCell>
                        <TableCell align='center' sx={{ background: '#eeee' }}>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h6' component='p'>Clinical decision</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <CancelIcon fontSize='large' />
                        </TableCell>
                        <TableCell align='center' sx={{ background: '#eeee' }}>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h6' component='p'>Reimbursement for your time and money</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <CancelIcon fontSize='large' />
                        </TableCell>
                        <TableCell align='center' sx={{ background: '#eeee' }}>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant='h6' component='p'>Cognitive care planning</Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <CancelIcon fontSize='large' />
                        </TableCell>
                        <TableCell align='center' sx={{ background: '#eeee' }}>
                            <CheckCircleIcon sx={{ fill: 'orange' }} fontSize='large' />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>

                        </TableCell>
                        <TableCell align='center'>
                            <Button sx={{ background: '#dddd' }}>Create Free Account</Button>
                        </TableCell>
                        <TableCell align='center' sx={{ background: '#eeee' }}>
                            <Button sx={{ background: '#000', color: '#fff' }}>Book a demo</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

function ButtonGrid({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return <Button sx={{ width: 110, background: '#3333' }} onClick={onClick}>{children}</Button>
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: '2rem',
    color: theme.palette.text.secondary,
    textAlign: 'left'
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
                    <Grid item xs={14} md={14}>
                        <Item>
                            <Typography variant='h5'>How many patients are under <br /> your care are over 65?</Typography>
                            <Box mt='20px'>
                                <Grid container display='flex' justifyContent='center' alignItems='center' gap={2}>
                                    {[
                                        '0-20%',
                                        '20-40%',
                                        '40-60%',
                                        'Over 60%',
                                    ].map((s, idx) => (
                                        <Grid item xs={8} sm={5} md={3} lg={2} xl={2} key={idx} display='flex' justifyContent='center' alignItems='center'>
                                            <ButtonGrid onClick={() => alert('aha')}>{s}</ButtonGrid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={14} md={6}>
                        <Item sx={{ textAlign: 'center' }}>
                            <Typography variant='h5' mb={2}>Time spent with <br /> each patient</Typography>
                            <TextField type='number' value={count} label="minutes" focused onChange={(e) => {
                                console.log(e.target.value)
                                setCount(Number(e.target.value))
                            }} />
                        </Item>
                    </Grid>
                    <Grid item xs={14} md={6}>
                        <Item sx={{ textAlign: 'center' }}>
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
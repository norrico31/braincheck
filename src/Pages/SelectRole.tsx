/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MobileStepper from '@mui/material/MobileStepper'
import { useTheme } from '@emotion/react'
import { Button } from './components'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Modal from '@mui/material/Modal'
import Slide from '@mui/material/Slide'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import Paper from '@mui/material/Paper'
import CheckboxesGroup from './components/CheckboxGroup'

function LinearWithValueLabel({ progress, handleProgress }: { progress: number; handleProgress: () => void }) {
    React.useEffect(() => {
        const timer = setInterval(handleProgress, 800)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} sx={{ width: '100%' }} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
                progress,
            )}%`}</Typography>
        </Box>
    </Box>
}

const btnsFirstStep = [
    'Practitioner',
    'Nurse',
    'Technician',
    'Administrator',
    'Other',
]
const btnsSecondStep = [
    'General internist',
    'Geritrician',
    'Neurologist',
    'Family doctor',
    'Neuropsychologist',
    'Psychiatrist',
    'Other',
]

const steps = ({ handleSelectedChoice }: any) => {
    const onClick = (b?: string) => handleSelectedChoice(b?.toLowerCase())
    return [
        () => {
            return <div>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h4'>A Personalized solution build around you</Typography>
                </Box>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h6' >Select your role to find how BrainCheck can <br /> empower your practice</Typography>
                </Box>
                <Grid container display='flex' justifyContent='center' gap={1}>
                    {btnsFirstStep.map((s) => (
                        <Grid xs={8} sm={5} md={3} lg={2} xl={2} key={s}>
                            <Paper>
                                <ButtonGrid onClick={() => onClick(s)}>{s}</ButtonGrid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        },
        () => {
            return <div>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h4'>Tell us about your area of expertise</Typography>
                </Box>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h6' >Choose your specialization to see how BrainCheck can help you save time and equip you with your clear answers for your patients.</Typography>
                </Box>
                <Grid container display='flex' justifyContent='center' gap={1}>
                    {btnsSecondStep.map((s) => (
                        <Grid xs={8} sm={5} md={3} lg={2} xl={2} key={s}>
                            <Paper>
                                <ButtonGrid onClick={() => onClick(s)}>{s}</ButtonGrid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        },
        () => {
            return <div>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h4'>Here are just a few ways BrainCheck can benefit your work as General Internist</Typography>
                </Box>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h6' >Choose your specialization to see how BrainCheck can help you save time and equip you with your clear answers for your patients.</Typography>
                </Box>
                <Grid container display='flex' justifyContent='center' gap={1}>
                    {new Array(4).fill(null).map((_, idx) => (
                        <Grid xs={8} sm={5} md={3} lg={2} xl={2} key={idx}>
                            <Paper elevation={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', minHeight: 200, gap: 3 }}>
                                <CheckIcon />
                                Col {idx + 1}
                            </Paper>
                        </Grid>
                    ))}

                </Grid>
                <div style={{ textAlign: 'center', marginTop: 50 }}>
                    <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(undefined)}>Next</Button>
                </div>
            </div>
        },
        () => {
            return <div>
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
                        <Grid xs={8} sm={5} md={3} lg={2} xl={2} key={idx}>
                            <ButtonGrid onClick={() => onClick(s)}>{s}</ButtonGrid>
                        </Grid>
                    ))}

                </Grid>
                <div style={{ textAlign: 'center', marginTop: 50 }}>
                    <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(undefined)}>Next</Button>
                </div>
            </div>
        },
        () => {
            return <div>
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
        },
        () => <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Enhance your cognitive toolset</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Please select all the ways you currently assess <br />cognitive health in your practice:</Typography>
            </Box>
            <CheckboxesGroup />
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(undefined)}>Next</Button>
            </div>
        </div>
    ]
}

function TextMobileStepper() {
    const theme = useTheme() as any
    const maxSteps = steps({ handleSelectedChoice: () => null }).length
    const [progress, setProgress] = React.useState(Math.floor(maxSteps))
    const [activeStep, setActiveStep] = React.useState(0)
    const [selectedRole, setSelectedRole] = React.useState<undefined | string>()
    const [isOpenModalStart, setIsOpenModalStart] = React.useState(false)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        if (activeStep >= (maxSteps - 2)) {
            setProgress(99.9)
        } else {
            setProgress(prevVal => prevVal + progress)
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        setProgress(prevVal => {
            if (activeStep !== maxSteps) return prevVal - progress
            return 100
        })
    }
    return (
        <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={() => setIsOpenModalStart(true)}
                        disabled={activeStep === 0}
                    >
                        <HomeIcon />
                        Home
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme?.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Go back
                    </Button>
                }
            />
            {steps({
                handleSelectedChoice: (b: string) => {
                    if (b) {
                        setSelectedRole(b)
                    }
                    handleNext()
                },
            })[activeStep]()}

            <ModalStartOver open={isOpenModalStart} handleClose={(isBack: boolean) => {
                if (isBack) {
                    setSelectedRole(undefined)
                    setActiveStep(0)
                    setProgress(33.33)
                }
                setIsOpenModalStart(false)
            }} />
        </Box>
    )
}

function ButtonGrid({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return <Button sx={{ width: '100%', height: '150px', background: 'lime' }} onClick={onClick}>{children}</Button>
}

function ModalStartOver({ open, handleClose }: { open: boolean; handleClose: (isBack: boolean) => void }) {
    return <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit onClick={(e) => {
            e.stopPropagation()
            handleClose(false)
        }}>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={style}>
                    <Box textAlign='center'>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Want to start over?
                        </Typography>
                    </Box>
                    <Paragraph id="modal-modal-description">
                        Please note that going back to the home page will erase your current progress.
                    </Paragraph>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap={1} mt={2}>
                        <Button sx={{ background: '#dededede' }} onClick={() => handleClose(false)}>Keep Going</Button>
                        <Button sx={{ background: '#dededede' }} onClick={() => handleClose(true)}>Start Over</Button>
                    </Box>
                </Box>
            </Box>
        </Slide>
    </Modal>
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    minWidth: 250,
    bgcolor: 'background.paper',
    boxShadow: 5,
    borderRadius: '10px',
    p: 4,
}

const Paragraph = ({ children, id }: { id: string; children: React.ReactNode }) => {
    return <Typography id={id} sx={{ mt: 2, letterSpacing: 0, fontSize: 14, width: 300, textAlign: 'center' }}>
        {children}
    </Typography>
}

export default function SelectRole() {
    const [progress, setProgress] = React.useState(0)

    return progress >= 100 ? (
        <Box pt={3}>
            <TextMobileStepper />
        </Box>
    ) : (
        <Container maxWidth='lg' sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <LinearWithValueLabel progress={progress} handleProgress={() => setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 33))} />
        </Container>
    )
}
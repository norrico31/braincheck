/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MobileStepper from '@mui/material/MobileStepper'
import { useTheme } from '@emotion/react'
import { Button, StepFive, StepFour, StepOne, StepThree, StepTwo } from './components'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Modal from '@mui/material/Modal'
import Slide from '@mui/material/Slide'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton'
import CheckboxesGroup from './components/CheckboxGroup'
import { TextField } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function LinearWithValueLabel({ progress, handleProgress }: { progress: number; handleProgress: () => void }) {
    useEffect(() => {
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

const btnsConfidentLvl = [
    'Not confident',
    'Somewhat confident',
    'Very Confident',
]

const steps = ({ handleSelectedChoice }: any) => {
    const onClick = (b?: string) => {
        let v = undefined
        if (typeof b === 'string') {
            if (b.includes(' ')) {
                const str = b.toLowerCase()?.split(' ')
                const strToUpperCase = str[1]?.slice(0, 1).toUpperCase()
                v = str[0] + strToUpperCase + str[1]?.slice(1)
            } else {
                v = b?.toLowerCase()
            }
        } else {
            v = b
        }
        handleSelectedChoice(v)
    }
    const [minsOfAssessingResult, setMinsOfAssessingResult] = useState(90)
    const [countPracticeConducting, setCountPracticeConducting] = useState(0)

    return [
        () => <StepOne onClick={onClick} />,
        () => <StepTwo onClick={onClick} />,
        () => <StepThree onClick={onClick} />,
        () => <StepFour onClick={onClick} />,
        () => <StepFive onClick={onClick} />,
        () => <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Enhance your cognitive toolset</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Please select all the ways you currently assess <br />cognitive health in your practice:</Typography>
            </Box>
            <CheckboxesGroup onClick={onClick} />

        </div>,
        () => <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Faster and easier than paper tests</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Unlike pen-and-paper tests, BrainCheck lets you assess patients from anywhere with detailed cognitive reports in just 15 minutes.</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >It's easy and accessible for your patients and integrates seamlessly into your workflows.</Typography>
            </Box>
            <div style={{ marginTop: 50 }}>
                <Box display='flex' justifyContent='center'>
                    <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(undefined)}>Next</Button>
                </Box>
                <Box display='flex' justifyContent='end'>
                    <Typography variant='caption' >Source: Product Update 2019</Typography>
                </Box>
            </div>
        </div>,
        () => {
            return <div>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h4'>How much time do you usually spend assessing cognitive conditions and interpreting the results for each patient?</Typography>
                </Box>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <TextField id="standard-basic" variant="standard" inputProps={{ style: { textAlign: 'center' } }}
                        value={minsOfAssessingResult}
                        onChange={e => setMinsOfAssessingResult(Number(e.target.value))}
                    />
                </Box>
                <div style={{ marginTop: 50, display: 'grid', placeItems: 'center' }}>
                    <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(minsOfAssessingResult + '')}>Next</Button>
                </div>
            </div>
        },
        () => {
            return <div>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h4'>How many people in your practice are conducting cognitive assessments?</Typography>
                </Box>
                <Box textAlign='center' sx={{ margin: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconButton children={<RemoveCircleIcon sx={{ height: 50, width: 50 }} />} size='large' onClick={() => {
                        if (countPracticeConducting <= 0) return
                        setCountPracticeConducting(prevValue => prevValue - 1)
                    }} />
                    <TextField id="outlined-size-normal" value={countPracticeConducting} inputProps={{ style: { textAlign: 'center' } }} />
                    <IconButton children={<AddCircleIcon sx={{ height: 50, width: 50 }} />} size='large' onClick={() => {
                        setCountPracticeConducting(prevValue => prevValue + 1)
                    }} />
                </Box>
                <div style={{ marginTop: 50, display: 'grid', placeItems: 'center' }}>
                    <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(countPracticeConducting + '')}>Next</Button>
                </div>
            </div>
        },
        () => {
            return <div>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h4'>How confident are you discussing cognitive health with your patients?</Typography>
                </Box>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h6' >Select your confidence level</Typography>
                </Box>
                <Grid container display='flex' justifyContent='center' gap={1}>
                    {btnsConfidentLvl.map((s) => (
                        <Grid item xs={8} sm={5} md={3} lg={2} xl={2} key={s} textAlign='center'>
                            <Button onClick={() => onClick(s)} sx={{ background: '#eee' }}>{s}</Button>
                        </Grid>
                    ))}
                </Grid>
            </div>
        },
        () => {
            return <div>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h4'>Thank you for your answers!</Typography>
                </Box>
                <Box textAlign='center' sx={{ margin: '20px 0' }}>
                    <Typography variant='h6' >Now lets take a look ate your personalized insights</Typography>
                </Box>
                <div style={{ marginTop: 50, display: 'grid', placeItems: 'center' }}>
                    <Link to='/view-results' style={{ textDecoration: 'none', color: '#000', display: 'inline-block', padding: '10px 12px', background: '#ffea2f', border: '1px solid #000', borderRadius: 10, fontSize: 32 }}>
                        View Results
                    </Link>
                </div>
            </div>
        },
    ]
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

const Paragraph = ({ children, id }: { id: string; children: ReactNode }) => {
    return <Typography id={id} sx={{ mt: 2, letterSpacing: 0, fontSize: 14, width: 300, textAlign: 'center' }}>
        {children}
    </Typography>
}

function TextMobileStepper() {
    const theme = useTheme() as any
    const maxSteps = steps({ handleSelectedChoice: () => null }).length
    const [progress, setProgress] = useState(maxSteps)
    const [activeStep, setActiveStep] = useState(0)
    const [info, setInfo] = useState<undefined | Record<string, string | number>>()
    const [isOpenModalStart, setIsOpenModalStart] = useState(false)

    const handleNext = () => {
        if ((activeStep + 1) === maxSteps) return
        const lastStep = maxSteps - 2;
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        const newProgress = Math.min(progress + (100 / maxSteps), 100)
        setProgress(lastStep === activeStep ? 100 : newProgress)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        const newProgress = Math.max(progress - (100 / maxSteps), 0)
        setProgress(newProgress)
    }

    return (
        <Container maxWidth='lg' >
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
                    setInfo({
                        ...info,
                        [activeStep]: b
                    })
                    handleNext()
                },
            })[activeStep]()}

            <ModalStartOver open={isOpenModalStart} handleClose={(isBack: boolean) => {
                if (isBack) {
                    setInfo(undefined)
                    setActiveStep(0)
                    setProgress(maxSteps)
                }
                setIsOpenModalStart(false)
            }} />
        </Container>
    )
}

export default function Steps() {
    const [progress, setProgress] = useState(0)

    return progress >= 100 ? (
        <Box pt={3}>
            <TextMobileStepper />
        </Box>
    ) : (
        <Container sx={{ height: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <LinearWithValueLabel progress={progress} handleProgress={() => setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 33))} />
        </Container>
    )
}
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
import { Button, StepEight, StepEleven, StepFive, StepFour, StepNine, StepOne, StepSeven, StepSix, StepTen, StepThree, StepTwo } from './components'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Modal from '@mui/material/Modal'
import Slide from '@mui/material/Slide'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton'
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
        () => <StepSix onClick={onClick} />,
        () => <StepSeven onClick={onClick} />,
        () => <StepEight minsOfAssessingResult={minsOfAssessingResult} setMinsOfAssessingResult={setMinsOfAssessingResult} onClick={onClick} />,
        () => <StepNine
            countPracticeConducting={countPracticeConducting}
            handleAdd={() => {
                setCountPracticeConducting(prevValue => prevValue + 1)
            }}
            handleRemove={() => {
                if (countPracticeConducting <= 0) return
                setCountPracticeConducting(prevValue => prevValue - 1)
            }}
            onClick={() => onClick(countPracticeConducting + '')} />,
        () => <StepTen onClick={onClick} />,
        () => <StepEleven onClick={onClick} />,
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
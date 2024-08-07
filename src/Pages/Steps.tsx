/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, ReactNode } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import { useTheme } from '@emotion/react'
import { Button, StepEight, StepEleven, StepFive, StepFour, StepNine, StepOne, StepSeven, StepSix, StepTen, StepThree, StepTwo } from './components'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Modal from '@mui/material/Modal'
import Slide from '@mui/material/Slide'
import HomeIcon from '@mui/icons-material/Home';
import ViewResult from './ViewResults'
import { AnimateSteps } from '../shared/routes/Routes'
import axios from 'axios'

function LinearWithValueLabel({ progress, handleProgress }: { progress: number; handleProgress: () => void }) {
    useEffect(() => {
        const timer = setInterval(handleProgress, 800)
        return () => clearInterval(timer)
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

const steps = ({ state, handleSelectedChoice }: any) => {
    const [minsOfAssessingResult, setMinsOfAssessingResult] = useState(90)
    const [countPracticeConducting, setCountPracticeConducting] = useState(0)

    function onClick(b?: string) {
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
    // PASS THE STATE INTO STEPS COMPONENT HERE
    return [
        () => <StepOne onClick={onClick} state={state} />,
        () => <StepTwo onClick={onClick} state={state} />,
        () => <StepThree onClick={onClick} state={state} />,
        () => <StepFour onClick={onClick} state={state} />,
        () => <StepFive onClick={onClick} state={state} />,
        () => <StepSix onClick={onClick} state={state} />,
        () => <StepSeven onClick={onClick} state={state} />,
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
    const [isViewResult, setIsViewResult] = useState(false)

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


    //* INTEG TO PASS THE STATE TO ALL STEPS FROM API 
    const [state, setState] = useState({}) // object || array

    useEffect(() => {
        const controller = new AbortController();
        let flag = false;
        !flag && (async () => {
            try {
                const res = await axios.get('/wordpress-api', { signal: controller.signal })
                console.log(`api result: ${res}`)
                // setState(res.data) // set the data from api here
            } catch (error) {
                throw new Error('wordpress api broken')
            }
        })()
        return function () {
            controller.abort()
            flag = true
        }
    }, [])

    // * PASS THE STATE HERE 
    const stepComponent = steps({
        state,
        handleSelectedChoice: (b: string) => {
            if (activeStep === 10) {
                setIsViewResult(true)
                return
            }
            setInfo({
                ...info,
                [activeStep]: b
            })
            handleNext()
        },
    })[activeStep]
    console.log(info)
    if (activeStep === 10) alert(JSON.stringify(info, null, 2))
    // SET ONSUBMIT OR FUNCTION HERE WHEN THE ACTIVE STEP == 10 then pass the payload(info) to axios api POST
    return (
        <div style={{ paddingTop: !isViewResult ? '2rem' : 0 }} >
            {!isViewResult && <Container maxWidth='lg'>
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
            </Container>}
            {!isViewResult && stepComponent()}
            {isViewResult && (
                <AnimateSteps>
                    <ViewResult />
                </AnimateSteps>
            )}

            <ModalStartOver open={isOpenModalStart} handleClose={(isBack: boolean) => {
                if (isBack) {
                    setInfo(undefined)
                    setActiveStep(0)
                    setProgress(maxSteps)
                }
                setIsOpenModalStart(false)
            }} />
        </div>
    )
}

export default function Steps() {
    const [progress, setProgress] = useState(0)

    return progress >= 100 ? (
        <Box>
            <TextMobileStepper />
        </Box>
    ) : (
        <Container sx={{ height: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <LinearWithValueLabel progress={progress} handleProgress={() => setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 33))} />
        </Container>
    )
}
import * as React from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@emotion/react';
import { Button } from '../shared/components';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function LinearWithValueLabel({ progress, handleProgress }: { progress: number; handleProgress: () => void }) {
    React.useEffect(() => {
        const timer = setInterval(handleProgress, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

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

const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

function TextMobileStepper() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theme = useTheme() as any;
    const [activeStep, setActiveStep] = React.useState(0);
    const [progress, setProgress] = React.useState(33.33)
    const maxSteps = steps.length;
    const [selectedLabel, setSelectedLabel] = React.useState<undefined | string>()
    const [isOpenModalStart, setIsOpenModalStart] = React.useState(false);

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setProgress(progress + 33.33)
    // };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setProgress(prevVal => prevVal - 33.33)
    };
    console.log(selectedLabel)
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
                        disabled={activeStep === maxSteps - 1}
                    >
                        Home
                        {theme?.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme?.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Previous question
                    </Button>
                }
            />
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>A Personalized solution build around you</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Select your role to find how BrainCheck can <br /> empower your practice</Typography>
            </Box>
            <Grid container spacing={0} display='flex' justifyContent='center' gap={1}>
                {gridButtons.map((b) => (
                    <Grid xs={5} sm={2} md={2} lg={2} key={b.id} display='flex' justifyContent='center'>
                        <ButtonGrid onClick={() => setSelectedLabel(b.label.toLowerCase())}>{b.label}</ButtonGrid>
                    </Grid>
                ))}
            </Grid>
            <ModalStart open={isOpenModalStart} handleClose={(isBack: boolean) => {
                if (isBack) setSelectedLabel(undefined)
                setIsOpenModalStart(false)
            }} />
        </Box>
    )
}

const gridButtons = [
    {
        id: '1',
        label: 'Practitioner',
    },
    {
        id: '2',
        label: 'Nurse',
    },
    {
        id: '3',
        label: 'Technician',
    },
    {
        id: '4',
        label: 'Administrator',
    },
    {
        id: '5',
        label: 'Other',
    },
]


function ButtonGrid({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return <Button sx={{ width: '100%', height: '150px', background: 'lime' }} onClick={onClick}>{children}</Button>
}


function ModalStart({ open, handleClose }: { open: boolean; handleClose: (isBack: boolean) => void }) {
    const navigate = useNavigate()
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
                        <Button sx={{ background: '#dededede' }} onClick={() => {
                            alert('go back to start functionality')
                            // navigate('/select-role')
                            handleClose(true)
                        }}>Start Over</Button>
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
};

const Paragraph = ({ children, id }: { id: string; children: React.ReactNode }) => {
    return <Typography id={id} sx={{ mt: 2, letterSpacing: 0, fontSize: 14, width: 300, textAlign: 'center' }}>
        {children}
    </Typography>
}

export default function SelectRole() {
    const [progress, setProgress] = React.useState(0);

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
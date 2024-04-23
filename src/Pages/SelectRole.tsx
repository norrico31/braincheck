import * as React from 'react';
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
    console.log(selectedLabel)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setProgress(progress + 33.33)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setProgress(prevVal => prevVal - 33.33)
    };

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
                        onClick={handleNext}
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
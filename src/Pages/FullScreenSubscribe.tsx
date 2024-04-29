import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
})

export default function FullScreenDialog({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    return <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
    >
        <Box style={{ padding: '1rem' }}>

            <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
            >
                <ArrowBackIcon />
                Back
            </IconButton>
        </Box>
        <Box sx={{ height: '100%', display: 'grid', placeItems: 'center', textAlign: ' center' }} >
            <Box >
                <Typography variant='h1'>Thank you for subscribing!</Typography>
                <Typography component='p'>Please check your email to confirm your subscription.</Typography>
            </Box>
        </Box>
    </Dialog>
}
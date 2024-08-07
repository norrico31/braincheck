import { useState } from 'react'
import { IconButton, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { Button } from './components'
import CloseIcon from '@mui/icons-material/Close';
import FullScreenDialog from './FullScreenSubscribe'

export default function Subscribe({ onClick }: { onClick: () => void }) {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    return (
        <Box sx={{ height: '100svh', display: 'flex', position: 'relative' }}>
            <IconButton children={<CloseIcon />} sx={{ position: 'absolute', top: 10, right: 10 }} onClick={onClick} />
            <Box width='50%' sx={{ background: '#fdfdda', padding: '0 10px' }} textAlign='center'>
                <Typography variant='h5' paddingTop='100px'>
                    Your download has started! <br />
                    Consider subscribing to the <br />
                    BrainCheck newsletter
                </Typography>
                <Box width='65%' sx={{ margin: '0 auto' }}>
                    <TextField id="standard-basic" label="Full Name*" variant="standard" sx={{ marginTop: 5, width: '100%' }} />
                    <TextField id="standard-basic" label="Organization name*" variant="standard" sx={{ marginTop: 5, width: '100%' }} />
                    <TextField id="standard-basic" label="Job Title*" variant="standard" sx={{ marginTop: 5, width: '100%' }} />
                    <TextField id="standard-basic" label="E - mail*" variant="standard" sx={{ marginTop: 5, width: '100%' }} />
                </Box>
                <Box mt={4}>
                    <Button sx={{ background: 'yellow', border: '1px solid #000', borderRadius: 3 }} onClick={() => setIsOpenDialog(true)}>Subscribe</Button>
                </Box>
                <Box mt={4} textAlign='center'>
                    <Typography variant='caption' sx={{ color: '#757575ec' }}>We're committed to your privacy and will not share your data with third parties. <br /> See our <b><a href='/privacy-policy' style={{ color: 'inherit' }}>Privacy Policy</a></b></Typography>
                </Box>
                <Box mt={4} textAlign='center'>
                    <Typography component='p' sx={{ color: '#757575ec' }}><b><a href='/privacy-policy' style={{ color: 'inherit' }}>Click here</a></b> if your download did not start automatically</Typography>
                </Box>
            </Box>
            <Box width='50%' sx={{ background: '#a2e3f7', padding: '0 10px' }} display='flex' justifyContent='center' alignItems='center'>
                <Box sx={{ background: '#fff', width: 400, borderRadius: 2, padding: 5 }}>
                    <Typography variant='h5' >
                        Don't miss out on:
                    </Typography>
                    <ul style={{ display: 'grid', gap: 30 }}>
                        <li>The latest development in brain health research</li>
                        <li>Educational content for improving cognitive health</li>
                        <li>Expert advice from top neuroscientists and psychologists</li>
                        <li>Connecting with a community focused on brain health</li>
                    </ul>
                </Box>
            </Box>
            <FullScreenDialog
                open={isOpenDialog}
                handleClose={() => setIsOpenDialog(false)}
            />
        </Box >
    )
}

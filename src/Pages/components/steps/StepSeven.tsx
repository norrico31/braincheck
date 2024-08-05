import { Box, Typography } from '@mui/material'
import { Button } from '..';

type Props = {
    onClick: (v?: string) => void
}

export default function StepSeven({ onClick }: Props) {
    return (
        <div>
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
        </div>
    )
}

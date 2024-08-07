import { Box, Container, Typography } from '@mui/material'

type Props = {
    onClick: (v?: string) => void
}

export default function StepEleven({ onClick }: Props) {
    return (
        <Container maxWidth='lg'>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Thank you for your answers!</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Now lets take a look ate your personalized insights</Typography>
            </Box>
            <div style={{ marginTop: 50, display: 'grid', placeItems: 'center' }}>
                <button className='btn-cta' onClick={() => {
                    onClick(undefined)
                }}>
                    View Results
                </button>
            </div>
        </Container>
    )
}

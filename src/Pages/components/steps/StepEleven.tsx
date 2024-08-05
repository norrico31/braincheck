import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    onClick: (v: string) => void
}

export default function StepEleven({ onClick }: Props) {
    return (
        <div>
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
    )
}

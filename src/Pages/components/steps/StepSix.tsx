import { Box, Container, Typography } from '@mui/material'
import CheckboxesGroup from '../../components/CheckboxGroup'

type Props = {
    onClick: (v?: string) => void
}

export default function StepSix({ onClick }: Props) {
    return (
        <Container maxWidth='lg'>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Enhance your cognitive toolset</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Please select all the ways you currently assess <br />cognitive health in your practice:</Typography>
            </Box>
            <CheckboxesGroup onClick={onClick} />
        </Container>
    )
}

import { Box, Container, IconButton, TextField, Typography } from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '..';

type Props = {
    onClick: (v?: string) => void
    handleAdd: () => void
    handleRemove: () => void
    countPracticeConducting: number
}

export default function StepNine({ handleAdd, handleRemove, countPracticeConducting, onClick }: Props) {
    return (
        <Container maxWidth='lg'>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>How many people in your practice are conducting cognitive assessments?</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                <IconButton children={<RemoveCircleIcon sx={{ height: 50, width: 50 }} />} size='large' onClick={handleRemove} />
                <TextField id="outlined-size-normal" value={countPracticeConducting} inputProps={{ style: { textAlign: 'center' } }} />
                <IconButton children={<AddCircleIcon sx={{ height: 50, width: 50 }} />} size='large' onClick={handleAdd} />
            </Box>
            <div style={{ marginTop: 50, display: 'grid', placeItems: 'center' }}>
                <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(countPracticeConducting + '')}>Next</Button>
            </div>
        </Container>
    )
}

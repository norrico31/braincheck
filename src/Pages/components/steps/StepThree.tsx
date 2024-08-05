import { Box, Grid, Paper, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '..';

type Props = {
    onClick: (v?: string) => void
}

export default function StepThree({ onClick }: Props) {
    return (
        <div>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h4'>Here are just a few ways BrainCheck can benefit your work as General Internist</Typography>
            </Box>
            <Box textAlign='center' sx={{ margin: '20px 0' }}>
                <Typography variant='h6' >Choose your specialization to see how BrainCheck can help you save time and equip you with your clear answers for your patients.</Typography>
            </Box>
            <Grid container display='flex' justifyContent='center' gap={1}>
                {new Array(4).fill(null).map((_, idx) => (
                    <Grid item xs={8} sm={5} md={3} lg={2} xl={2} key={idx}>
                        <Paper elevation={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', minHeight: 200, gap: 3, background: '#eee' }}>
                            <CheckIcon />
                            Col {idx + 1}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Button size='large' sx={{ background: '#dedede' }} onClick={() => onClick(undefined)}>Next</Button>
            </div>
        </div>
    )
}

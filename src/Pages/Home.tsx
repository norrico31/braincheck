
import { ReactNode, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'
import Slide from '@mui/material/Slide'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Button } from '../shared/components'
import { Link } from 'react-router-dom';

function ModalAbout({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    return <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

    >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit onClick={(e) => {
            e.stopPropagation()
            handleClose()
        }}>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Box sx={style}>
                    <Box>
                        <Grid container>
                            <Grid item xs={11}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Set a new standard for cognitive care with BrainCheck
                                </Typography>
                            </Grid>
                            <Grid item xs={1} md={1} display='flex' justifyContent='flex-end' alignItems='flex-start'>
                                <IconButton onClick={handleClose} children={<CloseIcon />} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Paragraph id="modal-modal-description">
                        We're here to overcome cognitive health challenges by integrating into you workflows. facilitating reimbursement, and providing answers to difficult questions with digital speed and case.
                    </Paragraph>
                    <Paragraph id="modal-modal-description">
                        Just answer a few quick questions to find out how BrainCheck's clinically validated. comprehensive toolset can elevate your standard of cognitive care.
                    </Paragraph>
                </Box>
            </Box>
        </Slide>
    </Modal>
}

const Paragraph = ({ children, id }: { id: string; children: ReactNode }) => {
    return <Typography id={id} sx={{ mt: 2, letterSpacing: 0, fontSize: 14 }}>
        {children}
    </Typography>
}

export default function Home() {
    const [isOpenModal, setisOpenModal] = useState(false);
    return (
        <Box sx={{ height: '100svh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
                <Box display='flex' justifyContent='space-between' alignItems='center' gap={4} flexDirection='column'>
                    <Typography
                        component="h2"
                        variant='h4'
                    >
                        BrainCheck
                    </Typography>
                    <Link to='/select-role'>Get Started</Link>
                    <Button size='small' onClick={() => setisOpenModal(true)}>More about ROI calculator</Button>
                </Box>
                <ModalAbout
                    open={isOpenModal}
                    handleClose={() => setisOpenModal(false)}
                />
            </Box>
        </Box>
    )
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    minWidth: 250,
    bgcolor: 'background.paper',
    boxShadow: 5,
    borderRadius: '10px',
    p: 4,
};
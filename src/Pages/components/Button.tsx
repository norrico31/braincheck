import { PropsWithChildren } from "react"
import Button from '@mui/material/Button'
import { SxProps } from '@mui/material'

type ButtonProps = {
    variant: 'contained' | 'outlined' | 'text';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    size: 'small' | 'medium' | 'large'
    type: 'button' | 'submit' | 'reset'
    sx: SxProps
    onClick: () => void
    disabled: boolean
}

export default function MuiButton({ children, variant = 'text', color = 'primary', type = 'button', size = 'small', sx, onClick, disabled }: PropsWithChildren<Partial<ButtonProps>>) {
    return (
        <Button
            variant={variant}
            color={color}
            type={type}
            sx={{ textTransform: 'none', ...sx }}
            size={size}
            onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                onClick?.()
            }}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}
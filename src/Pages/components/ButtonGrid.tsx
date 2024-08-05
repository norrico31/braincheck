import { Button } from ".";

export default function ButtonGrid({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    return <Button sx={{ width: '100%', height: '150px', background: '#dff5d2ec' }} onClick={onClick}>{children}</Button>
}

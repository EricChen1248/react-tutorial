interface buttonProps {
    color: string,
    text: string,
    onClick?(): void,
}

export const Button = ({ color, text, onClick }: buttonProps) => {
    return (
        <button className="btn" onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}
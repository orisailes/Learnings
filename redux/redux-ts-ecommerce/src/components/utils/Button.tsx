import React from 'react'
import '../scss/button.css'
interface Props {
    text?: string
    className?: string
    onClick?: () => void
}

const Button = ({ text, className="btn", onClick }: Props):JSX.Element => {
    return (
        <button
            className={className}
            onClick={onClick}
            data-testid="button"
        >
            {text}
        </button>
    )
}

export default Button
import React from "react"
import { Typography } from "@material-ui/core"

interface TitleProps {
    children: string
    color?: string
}

const Title: React.FC<TitleProps> = (props) => {
    const { children, color = "black" } = props
    return (
        <Typography variant="h4" style={{ color }}>
            {children}
        </Typography>
    )
}

export default Title
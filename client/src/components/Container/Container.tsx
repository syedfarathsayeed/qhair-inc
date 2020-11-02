import React from "react"
import useStyles from "./Container_Styles"
import clsx from "clsx"

interface ContainerProps {
    children: React.ReactNode,
    variant?: "page" | "content",
    className?: string
}

const Container: React.FC<ContainerProps> = (props) => {
    const { children, variant = "page", className } = props
    const classes = useStyles()
    return (
        <div className={clsx(classes[variant], className)}>
            {children}
        </div>
    )
}

export default Container
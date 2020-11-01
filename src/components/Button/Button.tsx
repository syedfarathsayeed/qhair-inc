import { Button as MUIButton, CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import useStyles from "./Button_Styles";

type ButtonVariant = "primary" | "secondary" | "text"

export interface ButtonProps {
    label: string,
    variant?: ButtonVariant,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    className?: string,
    loading?: boolean,
    disabled?: boolean
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const { label, onClick, className, loading, disabled, variant="primary" } = props
    const classes = useStyles(props);
    return (
        variant === "text"
            ? (
                <MUIButton
                    variant={"contained"}
                    className={clsx(classes.button, className)}
                    onClick={onClick}
                >
                    {label}
                </MUIButton>)
            : <div className={classes.wrapper}>
                <MUIButton
                    variant={"contained"}
                    className={clsx(classes.button, className)}
                    onClick={onClick}
                    disabled={loading || disabled}
                >
                    {label}
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </MUIButton>
            </div>
    );
}

export default Button
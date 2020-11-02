import { createStyles, darken, makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonProps } from "./Button";

const getButtonStylesByVariant = (theme: Theme, props: ButtonProps) => {
    switch (props.variant) {
        case "primary":
            return {
                background: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                "&:hover": {
                    background: darken(theme.palette.primary.main, 0.2)
                }
            }
        case "secondary": {
            return {
                background: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                "&:hover": {
                    background: darken(theme.palette.secondary.main, 0.2)
                }
            }
        }
        case "text": {
            return {
                background: "none",
                color: theme.palette.primary.main,
                "&:hover": {
                    background: darken(theme.palette.primary.main, 0.2),
                    color: theme.palette.secondary.main
                }
            }
        }
        default:
            throw new Error("Button variant is unknown");
    }
}

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            button: (props: ButtonProps) => {
                return {
                    margin: theme.spacing(2),
                    borderRadius: 12,
                    height: 46,
                    ...getButtonStylesByVariant(theme, props)
                }
            },
            wrapper: {
                position: 'relative',
                width: "fit-content",
                whiteSpace: "nowrap"
            },
            buttonProgress: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: -12,
                marginLeft: -12,
            }
        })
    )
});
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ItemCardProps } from "./ItemCard"

export default makeStyles((theme: Theme) => {
    const transition = theme.transitions.create("transform", {
        duration: theme.transitions.duration.standard
    })
    return (
        createStyles({
            card: (props: ItemCardProps) => ({
                background: `url(${props.imageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: 250,
                height: 300,
                borderRadius: "none",
                display: "flex",
                justifyContent: "center",
                "&:hover button": {
                    opacity: 0.9,
                    display: "flex",
                    background: theme.palette.secondary.main,
                    color: theme.palette.primary.main
                },
                "&:hover": {
                    opacity: 0.8,
                    cursor: "pointer",
                    transform: "scale(1.02)",
                    transition
                }
            }),
            button: {
                display: "flex",
                marginTop: "80%",
                borderRadius: 0,
                background: "black",
                color: theme.palette.secondary.main
            }
        }))
});
import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            itemRoot: {
                overflowX: "hidden"
            },
            slide: {
                opacity: 0.75
            },
            indicators: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            indicator: {
                borderRadius: "50%",
                border: `solid 1px ${theme.palette.primary.main}`,
                width: 10,
                height: 10,
                margin: 5
            },
            indicatorActive: {
                background: theme.palette.primary.main,
            },
            indicatorsInactive: {
                background: "none"
            }
        }))
})
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const appbarHeight = 50

export default makeStyles((theme: Theme) => {
    const fieldHeight = 35
    return (
        createStyles({
            root: {
                background: "none",
                height: appbarHeight,
                position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: theme.zIndex.appBar
            },
            toolBar: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            },
            actions: {
                display: "flex",
                alignItems: "center",
                "& > *:not(last-child)": {
                    marginRight: theme.spacing(4),
                }
            },
            button: {
                height: fieldHeight,
                margin: 0
            },
            textField: {
                background: theme.palette.secondary.main,
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                    height: fieldHeight,
                }
            },
            logo: {
                paddingTop: theme.spacing(3)
            },
            iconButton: {
                color: theme.palette.secondary.main,
                zIndex: theme.zIndex.appBar,
                "&:hover": {
                    background: theme.palette.primary.light,
                    color: theme.palette.primary.main
                }
            }
        })
    )
})
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            iconButton: {
                zIndex: theme.zIndex.appBar,
                "&:hover": {
                    background: theme.palette.primary.light,
                }
            },
            paper: {
                height: 400,
                width: 300,
                margin: 10,
                overflow: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            },
            cartItems: {
                height: 330,
                overflow: "auto"
            },
            noDataText: {
                textAlign: "center",
                marginTop: 150
            }
        })
    )
})
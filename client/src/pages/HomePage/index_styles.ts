import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            root: {
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                "&>*": {
                    margin: theme.spacing(4)
                }
            }
        })
    )
})
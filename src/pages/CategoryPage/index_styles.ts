import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            root: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 40
            },
            category: {
                "&>*": {
                    padding: 15
                }
            }
        })
    )
})
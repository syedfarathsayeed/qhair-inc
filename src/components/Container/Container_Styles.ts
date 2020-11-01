import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            page: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 40
            },
            content: {
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: 20,
                "&>*": {
                    padding: 10
                }
            }

        })
    )
})
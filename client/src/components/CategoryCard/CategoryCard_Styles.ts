import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            header: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            },
            container: {
                display: "flex",
                flexWrap: "wrap",
                "&>*:not(last-child)": {
                    paddingRight: 20
                }
            },
            content: {
                display: "block"
            }
        })
    )
})
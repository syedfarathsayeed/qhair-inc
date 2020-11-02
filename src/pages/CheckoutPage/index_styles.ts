import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            productCell: {
                display: "flex",
                marginTop: 0,
                alignItems: "center",
                "&>*:not(:first-child)": {
                    marginLeft: 40
                }
            },
            size: {
                display: "flex",
                alignItems: "center"
            },
            total: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 10,
            },
            fakeCardInfo: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "red",
                flexDirection: "column",
                margin: 20
            },
            table: {
                marginTop: 40
            }
        })
    )
})
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
                },
                width: "100%",
            },
            size: {
                display: "flex",
                alignItems: "center",
                "&>*:not(:last-child)": {
                    marginRight: 10
                }
            },
            total: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 10,
                width: "100%",
                flexWrap: "wrap"
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
                marginTop: 40,
                width: "100%"
            },
            items: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&>*:not(last-child)": {
                    marginRight: 10
                }
            },
            container: {
                width: "calc(100% - 90px)",
                margin: "0 40px 40px"
            },
            divider: {
                width: "100%",
            },
            quantity: {
                display: "flex",
                alignItems: "center",
                "&>*:not(last-child)": {
                    marginRight: 10
                }
            },
            button: {
                height: "30px",
                marginLeft: 0,
                marginTop: 20
            }
        })
    )
})
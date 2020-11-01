import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LoginBg from "../../resources/images/loginBg.jpg";

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage: `linear-gradient(to bottom, rgba(205, 169, 157, 0.7), rgba(205, 169, 157, 0.7)), url(${LoginBg})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
        card: {
            width: 400,
        },
        smallCard: {
            width: 300,
        },
        form: {
            display: "flex",
            flexDirection: "column"
        },
        textField: {
            marginBottom: theme.spacing(3)
        },
        title: {
            marginBottom: theme.spacing(3),
            color: theme.palette.secondary.main,
            fontFamily: "Arial",
            fontSize: 25
        },
        footer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        signin: {
            display: "flex",
            alignItems: "center"
        },
        connect: {
            width: "80%",
            textAlign: "center",
            borderBottom: "1px solid #dfd9d9",
            lineHeight: "0.1em",
            margin: "30px 40px 20px",
            color: "#a69d9d"
        },
        span: {
            background: "#fff",
            padding: "0 10px"
        },
        icon: {
            marginLeft: "43%"
        },
        cardContent: {
            display: "flex",
            flexDirection: "column"
        }
    })
)
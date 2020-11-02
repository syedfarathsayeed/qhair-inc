import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => {
    return (
        createStyles({
            root: {
                display: "flex",
                alignItems: "center",
                padding: 20,
                "&>*":{
                    marginRight: 10
                }
            }
        })
    )
})
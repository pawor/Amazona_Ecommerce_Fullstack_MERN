import { Dialog, withStyles } from "@material-ui/core";

const style = {
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:0
    }
}

const Login = ({ classes }) => {
    return (
        <Dialog
            open={true}
            classes={{paper:classes.dialogPaper}}
            BackdropProps={{style:{backgroundColor:'unset'}}}
        >
            Hello
        </Dialog>
    )
}
export default withStyles(style)(Login);
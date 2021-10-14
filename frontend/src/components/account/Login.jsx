import { Dialog, withStyles, Box, Typography, makeStyles, ListItem, List } from "@material-ui/core";
import { GoogleLogin } from 'react-google-login'

const useStyles = makeStyles({
    component:{
        display:'flex',
    },
    leftComponent:{
        padding:'56px 0 56px 56px',
    },
    qrCode:{
        height:264,
        width:264,
        padding:'50px 0 50px 50px'
    },
    title:{
        fontSize:26,
        marginBottom:25,
        color:'#525252',
        fontFamily:'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '& > *':{
            fontSize:18,
            padding:0,
            marginTop:15,
            lineHeight:'28px',
            color:'#4a4a4a'
        }
    }
})

const style = {
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth:'100%'
    }
}
const onLoginSuccess = () => {
    console.log('Login Successfull');
}
const onLoginFailure = () => {
    console.log('Login Failed');
}

const Login = ({ classes }) => {
    const classname = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = '908802838781-ia44cgak9l1eg7c5k7tu46u4nglentu9.apps.googleusercontent.com';
    return (
        <Dialog
            open={true}
            classes={{paper:classes.dialogPaper}}
            BackdropProps={{style:{backgroundColor:'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tab Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box>
                    <img src={qrurl} alt='qr' className={classes.qrCode} />
                    <GoogleLogin 
                        clientId={clientId}
                        buttonText = ""
                        isSignedIn = {true}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </Box>
            </Box>
        </Dialog>
    )
}
export default withStyles(style)(Login);
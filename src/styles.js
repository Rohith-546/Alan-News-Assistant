import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        color: 'black',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(21, 101, 192)',
        fontSize: '1.2rem',
    },
    image: {
        marginLeft: 20,
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: '3%',
        paddingTop: '5%',
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'rgba(21, 101, 192)',
        margin: '20px 12px',
        textAlign: 'center',
        height: '25vmin',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
            width: '100%',
            height: 'initial',
            '&:nth-of-type(1)': {
                marginBottom: '12px',
            },
        },
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    logoContainer: {
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
        },
    },
    alanLogo: {
        height: '20vmin',
        borderRadius: '15%',
        padding: '0 45%',
        margin: '3% 0',
        [theme.breakpoints.down('sm')]: {
            height: '15vmin',
        },
    },
    nal: {
        marginLeft: '40%',
        color: '#4527A0',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '28%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '38%',
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '40%',
        },
    }
}));
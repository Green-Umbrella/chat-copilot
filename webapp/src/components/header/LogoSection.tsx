import { Image, makeStyles, Text } from '@fluentui/react-components';

import claraTLogo from '../../assets/clara-t-logo.png';

const useClasses = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    bgHeaderLogo: {
        backgroundImage: `url("../../assets/clara-t-logo.png")`,
        backgroundSize: 'fit',
        backgroundRepeat: 'no-repeat',
    },
    headerLogo: {
        height: '300px',
        marginTop: '100px',
        marginLeft: '20px',
        zIndex: '-0.5',
    },
    headerTitle: {
        fontSize: '5em',
        color: 'white',
        flexGrow: 1,
        maxHeight: '96px',
    },
    headerBoldTitle: {
        fontSize: '5em',
        fontWeight: 'bold',
        color: 'white',
        flexGrow: 1,
        maxHeight: '96px',
    },
});

export const LogoSection = () => {
    const classes = useClasses();

    return (
        <div className={classes.root}>
            <Image className={classes.headerLogo} src={claraTLogo} style={{ alignSelf: 'flex-start' }} />
            <Text className={classes.headerTitle}>clara-</Text>
            <Text className={classes.headerBoldTitle}>T</Text>
        </div>
    );
};

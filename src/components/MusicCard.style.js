import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',

    },
    main_container: {
        flex: 1,
        marginLeft: 10,
    },
    inner_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    year: {
        fontSize: 12,
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    artist: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    soldout: {
        padding: 4,
        borderRadius: 4,
        borderColor: 'red',
        borderWidth: 1,
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
});

import Snackbar from 'react-native-snackbar'

export function ShowSnackbar(message) {
    return Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
    });
}

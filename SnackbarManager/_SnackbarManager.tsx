import { View } from "react-native"
import { SnackbarContext } from "./SnackbarManagerContext"
import { useContext, useState } from "react"
import { Text, Snackbar } from "react-native-paper"

export const SnackbarManager = ({children}) => {
    const [snackbars, setSnackbars] = useState<String[]>([])

    const addSnackbar = (message : string) => {
        setSnackbars([...snackbars, message])
    }

    return (
        <>
            <SnackbarContext.Provider value={{addSnackbar}}>
                <View style={{ flex: 1}}>
                    {children}
                </View>
            </SnackbarContext.Provider>
            {snackbars.map((snackbar, index) => {
                return (
                    <Snackbar
                        key={index}
                        visible={true}
                        style={{marginBottom: index * 50}}
                        onDismiss={() => setSnackbars(snackbars.filter((_, i) => i !== index))}
                        action={{
                            label: 'X',
                            onPress: () => setSnackbars(snackbars.filter((_, i) => i !== index)),
                        }}>
                        {snackbar}
                    </Snackbar>
                )
            })}
        </>
    )
}

export const useSnackbarManager = () => useContext(SnackbarContext)
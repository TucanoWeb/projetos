import { extendTheme } from '@chakra-ui/react';
export const theme = {
    styles: {
        global: {
            body: {
                fontFamily: 'Ubuntu'
            }
        }
    }
}

export const customTheme = extendTheme(theme)
const objectExample: object = {
    login: true,
    change: 1
}

const objectExampleChange: object = {
    ...objectExample,
    change: 2

}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('teste')
}

export const setItem = (): void => {
    localStorage.setItem('teste', JSON.stringify(objectExample))
}

export const changeItem = (): void => {
    localStorage.setItem('teste', JSON.stringify(objectExampleChange))
}

export const testSetItem = (value1: string, value2: string) => {
    localStorage.setItem(value1, value2)
}
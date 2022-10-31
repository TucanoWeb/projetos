export interface IButton {
    title: string,
    type?: string,
    valueError?:object,
    onClick?: () => void
    
}

export interface IButtonStyled {
    valueError?:object
}
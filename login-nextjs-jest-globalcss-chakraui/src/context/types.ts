import { Dispatch, SetStateAction } from "react";

export interface IContext {
    example: string,
    message: string | undefined,
    setMessage: Dispatch<SetStateAction<undefined>>

}
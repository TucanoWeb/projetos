import React from 'react';

export interface IGetusers {
    importSetUser: React.Dispatch<React.SetStateAction<string>>
}

export interface IUpdateUser {
    values: {
        firstName: string,
        lastName: string,
        email: string,
        profissao: string,
        telephone: string
    }
}
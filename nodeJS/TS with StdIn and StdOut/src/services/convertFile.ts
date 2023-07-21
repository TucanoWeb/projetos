import * as fs from 'fs'

export const createOrderOneFile = () => {

    try {
        const data = fs.readFileSync('file.json', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Erro de leitura:',  err);
    }

}
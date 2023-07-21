import { readFile } from 'fs/promises';

export async function readJsonFile() {
    const file = await readFile('./src/archives/file.json', "utf8")
    return JSON.parse(file)
}



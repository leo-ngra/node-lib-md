import fs from 'fs';	
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório.'));
}

// async/await
async function pegaArquivo(caminhoDoArquivo) {
    try{
        const encolding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encolding)
        console.log(chalk.green(texto))
    } catch(erro) {
        trataErro(erro)
    }
}

// Promises com then()
/* function pegaArquivo(caminhoDoArquivo) {
    const encolding = 'utf-8'
    fs.promises
        .readFile(caminhoDoArquivo, encolding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro))
} */

pegaArquivo('./arquivos/texto.md')
pegaArquivo('./arquivos/')

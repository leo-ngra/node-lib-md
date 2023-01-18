import fs from 'fs';	
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório.'));
}

function pegaArquivo(caminhoDoArquivo) {
    const encolding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encolding, (erro, texto) => {
        if(erro) {
            trataErro(erro)
        }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/')
const readline = require('readline-sync');

const controlador = require('./controlador');

function menu() {
    console.log('1. listar');
    console.log('2. criar');
    console.log('3. buscar');
    console.log('4. atualizar');
    console.log('5. remover');
    console.log('6. sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case "1":
            controlador.listar();
        listar();     
        break; 
        case "2":
            controlador.criar();
        criar(); 
        break; 
        case "3":
            controlador.buscar();
        buscar(); 
        break; 
        case "4":
            controlador.atualizar();
        atualizar();
        break; 
        case "5":
            controlador.remover();
        remover();
        break; 
        case "6": process.exit(0);
        default: console.log('Opcao invalida');


    }
    readline.question("Pressione ENTER para continuar...");

}

function main() {
    while (true) {
        menu();
        const opcao = readline.question("Entre com uma opcao");
        escolherOpcao(opcao);
    }
}

main();
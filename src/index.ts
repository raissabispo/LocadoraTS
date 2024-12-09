// import { Genero } from "./model/Genero";
// import { AppDataSource } from "./db/data-source";

// const generoTeste = new Genero("Terror");
// const genero2 = new Genero("Comedia");

// // console.log("Olá Mundo, sou a LocaDora!");
// //console.table(generoTeste);
// //console.table(genero2);

// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//         console.log(`Database is running.`);
//     })
//     .catch((error) => console.log(error))   


import { Genero } from "./model/Genero";
import { AppDataSource } from "./db/data-source";

const generoTeste = new Genero("Terror");
const genero2 = new Genero("Comédia");
const genero3 = new Genero("Romance");
const genero4 = new Genero("suspense");

AppDataSource.initialize()
    .then(() => {
        console.log("Database is running.");

        // Agora, você pode executar as operações no banco de dados.
        try {
            // Tente salvar os objetos de Genero no banco de dados
           AppDataSource.manager.save(generoTeste);
            AppDataSource.manager.save(genero2);
            AppDataSource.manager.save(genero3);
            AppDataSource.manager.save(genero4);
            console.log("Generos salvos no banco de dados!");
        } catch (error) {
            console.error("Erro ao salvar os dados:", error);
        }
    })
    .catch((error) => {
        console.error("Erro ao inicializar o banco de dados:", error);
    });

import { AppDataSource } from "../db/data-source";
import { Genero } from "../model/Genero";

class GeneroRepository {
    generoRepository = AppDataSource.getRepository(Genero);

    async save(genero: Genero): Promise<Genero> {
        try {
            await this.generoRepository.save(genero); // Aguardando a operação assíncrona
            return genero;
        } catch (err) {
            throw new Error("Falha ao criar o gênero!");
        }
    }

    async retrieveAll(): Promise<Array<Genero>> {
        try {
            return await this.generoRepository.find(); // Aguardando a operação assíncrona
        } catch (error) {
            throw new Error("Falha ao retornar os gêneros!");
        }
    }

    async retrieveById(generoId: number): Promise<Genero | null> {
        try {
            return await this.generoRepository.findOneBy({
                idGenero: generoId,
            }); // Aguardando a operação assíncrona
        } catch (error) {
            throw new Error("Falha ao buscar o gênero!");
        }
    }

    async retrieveByNome(n: string): Promise<Genero | null> {
        try {
            return await this.generoRepository.findOneBy({
                genero: n, // Atualizando para "genero" ao invés de "nome"
            }); // Aguardando a operação assíncrona
        } catch (error) {
            throw new Error("Falha ao buscar o gênero!");
        }
    }

    async update(genero: Genero) {
        const { idGenero, genero: nomeGenero } = genero; // Alterando para "genero"
        try {
            await this.generoRepository.save(genero); // Aguardando a operação assíncrona
        } catch (error) {
            throw new Error("Falha ao atualizar o gênero!");
        }
    }

    async delete(generoId: number): Promise<number> {
        try {
            const generoEncontrado = await this.generoRepository.findOneBy({
                idGenero: generoId,
            }); // Aguardando a operação assíncrona
            if (generoEncontrado) {
                await this.generoRepository.remove(generoEncontrado); // Aguardando a operação assíncrona
                return 1;
            }
            return 0;
        } catch (error) {
            throw new Error("Falha ao deletar o gênero!");
        }
    }

    async deleteAll(): Promise<number> {
        try {
            const result = await this.generoRepository.query("SELECT COUNT(idGenero) FROM genero;");
            await this.generoRepository.query("DELETE FROM genero;");
            return result[0]['COUNT(idGenero)']; // Aguardando a operação assíncrona
        } catch (error) {
            throw new Error("Falha ao deletar todos os gêneros!");
        }
    }
}

export default new GeneroRepository();

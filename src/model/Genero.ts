import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Genero")
export class Genero {
  @PrimaryGeneratedColumn({ name: "idGenero" })
  idGenero!: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  genero!: string; // Renomeando a coluna para "genero" em vez de "nome"

  constructor(genero: string, idGenero?: number) {
    if (idGenero) {
      this.idGenero = idGenero;
    }
    this.genero = genero; // Atualizando para "genero"
  }
}

import { IStudent } from "./IStudent";

export interface IStudentsRepository {

    getStudent(cpf: string): Promise<IStudent | null> 
}
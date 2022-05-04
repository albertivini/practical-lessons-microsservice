import { IStudent } from "../interfaces/IStudent";
import { IStudentsRepository } from "../interfaces/IStudentsRepository";
import { prisma } from "../configs/prisma";



export class StudentsRepository implements IStudentsRepository {

    private prisma
    
    constructor() {
        this.prisma = prisma
    }

    async getStudent(cpf: string): Promise<IStudent | null> {
        const response = await this.prisma.students.findFirst({
            where: {
                cpf
            }
        })

        return response as IStudent | null
    }


}
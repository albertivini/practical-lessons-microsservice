import CODE_MESSAGES from "../../constants/codeMessages";
import { IPostStudent } from "../../interfaces/IPostStudent";
import { FormatCpf } from "../../utils/formatCpf";
import { InvalidCpfError } from "../../exceptions/invalidCpfException"
import { StudentsRepository } from "../../repositories/studentsRepository";
import { StudentAlreadyExistsError } from "../../exceptions/StudentAlreadyExists";
import { IStudentsRepository } from "../../interfaces/IStudentsRepository";


export class postStudentUseCase {

    repository: IStudentsRepository

    constructor () {
        this.repository = new StudentsRepository()
    }

    async postStudent({ birthday, category, cnpj_id, cpf, nome }: IPostStudent): Promise<void> {

        const formatted_cpf = await this.cpfVerifications(cpf)

        await this.verifyIfStudentExists(formatted_cpf)



    }

    async cpfVerifications(cpf: string) {

        const clean_cpf = cpf.replace(/\.|\-/g, '');

        if (clean_cpf.length !== 11) throw new InvalidCpfError(CODE_MESSAGES.ERROR_REQUEST)

        const format_cpf = new FormatCpf()

        const checked_cpf = format_cpf.checksCpf(clean_cpf)

        if (!checked_cpf) throw new InvalidCpfError(CODE_MESSAGES.ERROR_REQUEST)

        const formatted_cpf = format_cpf.formatCpf(clean_cpf)

        return formatted_cpf
    }

    async verifyIfStudentExists(cpf: string) {
        const verify_student = await this.repository.getStudent(cpf)

        if (!verify_student) throw new StudentAlreadyExistsError(CODE_MESSAGES.ERROR_REQUEST)
    }

    async verifyIfDrivingSchoolExists (cnpj_id: string) {

    }
}
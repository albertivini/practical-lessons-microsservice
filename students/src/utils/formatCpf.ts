export class FormatCpf {

    checksCpf(cpf: string) {
        let Sum = 0
        let Remainder = 0
    
        if (cpf == "00000000000") return false
    
        for (let start_numbers=1; start_numbers<=9; start_numbers++) Sum = Sum + parseInt(cpf.substring(start_numbers-1, start_numbers)) * (11 - start_numbers)
        Remainder = (Sum * 10) % 11
    
        if ((Remainder == 10) || (Remainder == 11))  Remainder = 0
        if (Remainder != parseInt(cpf.substring(9, 10)) ) return false
    
        Sum = 0
        for (let start_numbers_with_10 = 1; start_numbers_with_10 <= 10; start_numbers_with_10++) Sum = Sum + parseInt(cpf.substring(start_numbers_with_10-1, start_numbers_with_10)) * (12 - start_numbers_with_10)
        Remainder = (Sum * 10) % 11
    
        if ((Remainder == 10) || (Remainder == 11))  Remainder = 0
        if (Remainder != parseInt(cpf.substring(10, 11) ) ) return false
        return true
    }

    formatCpf (cpf: string) {

        const clean_cpf = cpf.replace(/[^\d]/g, "");
    
        const formatted_cpf = clean_cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    
        return formatted_cpf
    
    }
}


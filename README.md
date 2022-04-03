# Microsserviços de Marcação de Aulas Práticas

Este projeto será feito em Node.Js, Typescript, Postgres, SOLID, Testes, Arquitetura de Microsserviços, Orientação a Eventos, com a finalidade atualizar um projeto teste feito anteriormente em javascript.

O projeto visa criar uma API completa de marcação, validação e envio de aulas para o sistema de aulas práticas do DETRAN.

# Microsserviços

- Alunos
- Instrutores
- Veículos
- Auto-Escolas
- Aulas

## Alunos

- Cadastrar aluno
- Atualizar aluno
- Deletar aluno
- Visualizar aluno
- Visualizar alunos
- Visualizar aluno por CPF

### Tabela Students:

- id (uuid)
- cpf (string)
- nome (string)
- data de nascimento (Date)
- Categoria (string[])
- cnpj_id (uuid)
- cnpj (string)

### Cadastrar aluno

- Verificar se o CPF é valido;
- Verificar se o aluno já não está cadastrado;
- Verificar se auto-escola está cadastrada;
- Verificar com sistema do DETRAN se o aluno está cadastrado com biometria;
- Enviar para o DETRAN associação do aluno com a auto escola

```
Body: 
{
    cpf: string
    nome: string
    birthday: Date
    category: string[]
    cnpj: string
}
```

### Atualizar aluno

- Verificar se o CPF está cadastrado;
- Verificar se a auto-escola está cadastrada;

```
Path Parameter: 
{
    student_id: string
}

Body: 
{
    nome?: string
    birthday?: Date
    category?: string[]
}
```
### Deletar aluno

- Verificar se o id está cadastrado;
- Verificar se o aluno não tem nenhuma aula vinculada a ele;
- Enviar para o DETRAN desassociação do aluno com a auto-escola.

```
Path Parameter: 
{
    student_id: string
}
```

### Visualizar aluno

- Verificar se o id do estudante existe;

```
Path Parameter: 
{
    student_id: string
}
```

### Visualizar alunos

- 

### Visualizar aluno por CPF

- Verifica se o aluno está cadastrado.

```
Path Parameter: {
    cpf_student: string
}
```

## Instrutores

- Cadastrar instrutor
- Atualizar instrutor
- Deletar instrutor
- Visualizar instrutor
- Visualizar instrutores
- Visualizar instrutor por CPF

### Tabela Instructors

- id (uuid)
- cpf (string)
- nome (string)
- data de nascimento (Date)
- Categoria (string[])
- cnpj_id (uuid)
- cnpj (string)

### Cadastrar instrutor

- Verificar se o CPF é valido;
- Verificar se o instrutor já não está cadastrado;
- Verificar se a auto-escola está cadastrada;
- Verificar no sistema do DETRAN se o instrutor está com cadastro ATIVO;
- Enviar para o DETRAN associação do instrutor com a auto-escola.

```
Body: {
    cpf: string
    name: string
    birthday: Date
    category: string[]
    cnpj: string
}
```

### Atualizar instrutor

- Verificar se o CPF do instrutor está cadastrado;
- Verificar se auto-escola está cadastrada;

```
Path Parameter: {
    instructor_id: string
},
Body: {
    name?: string
    birthday?: string
    category?: string[]
}
```

### Deletar instrutor

- Verificar o id está cadastrado;
- Verificar se o instrutor não está vinculado a nenhuma aula.
- Enviar para o DETRAN desassociação do instrutor com a auto-escola.

```
Path Parameter: {
    instructor_id: string
}
```

### Visualizar instrutor

- Verificar se o CPF está cadastrado;

```
Path Parameter: {
    instructor_id: string
}
```
### Visualizar instrutores

-  

## Veículos

- Cadastrar veículo
- Atualizar veículo
- Deletar veículo
- Visualizar veículos

### Tabela Vehicles

- id (uuid)
- placa (string)
- nome (string)
- descrição (string)
- categoria (string[])
- cnpj_id (uuid)
- cnpj (string)

### Cadastrar veículo

- Verificar se a placa é válida;
- Verificar se a auto-escola está cadastrada;
- Verificar se o veículo está cadastrado e ativo no DETRAN;
- Enviar para o DETRAN vinculo do veículo com a auto-escola.


```
Body: {
    plate: string
    name: string
    description: string
    cnpj: string
    category: string[]
}
```
### Atualizar veículo

- Verificar se o veículo está cadastrado;
- Verificar se a auto-escola está cadastrada.

{
    Path Parameter: {
        vehicle_id: string
    },
    Body: {
        name?: string
        description?: string
        category?: string[]
    }
}

### Deletar veículo

- Verificar se o veículo está cadastrado;
- Verificar se o veículo tem alguma aula vinculada a ele;
- Enviar para DETRAN desvinculo do veículo com a auto-escola.

```
Path Parameter: {
    vehicle_id: string
}
```
### Visualizar veículo

- Verificar se o veículo está cadastrado.

```
Path Parameter: {
    vehicle_id: string
}
```

### Visualizar veículos

- 

## Auto-Escola

- Cadastrar auto-escola
- Atualizar auto-escola
- Inativar auto-escola
- Visualizar auto-escolas

### Tabela Driving-Schools

- id (uuid)
- cnpj (string)
- nome fantasia (string)
- razao social (string)
- endereço (string)
- bairro (string)
- Município (string)
- Estado (string)

### Cadastrar auto-escola

- Verificar se o CNPJ já não está cadastrado e o seu status;
- Verificar se o CNPJ está cadastrado e ATIVO no DETRAN.
- Ativa a auto-escola caso o CNPJ já esteja cadastrado e com status inativo;

```
Body: {
    cnpj: string
    fantasy_name: string
    social_reason: string
    street: string
    district: string
    city: string
    state: string
}
```

### Atualizar auto-escola

- Verificar se o CNPJ está cadastrado;

```
Path Parameter: {
    cnpj_id: string
},
Body: {
    fantasy_name?: string
    social_reason?: string
    street?: string
    district?: string
    city?: string
    state?: string
}
```

### Inativar auto-escola

- Verificar se CNPJ está cadastrado;
- Verificar se o status está ativo;

```
Path Parameter: {
    cnpj_id: string
}
```

### Visualizar auto-escola

- Verifica se CNPJ está cadastrado;

```
Path Parameter: {
    cnpj_id: string
}
```

### Visualizar auto-escolas

- 

## Aulas

- Marcar aula
- Iniciar aula
- Finalizar aula
- Enviar aula

### Tabela Practical-Classes

- id (uuid)
- aluno_id (uuid)
- instrutor_id (uuid)
- veiculo_id (uuid)
- cnpj_id (uuid)
- inicio_marcado (Date)
- final_marcado (Date)
- inicio_real (Date)
- final_real (Date)
- tempo_total_minutos (number)
- is_finished (boolean)
- is_sended (boolean)

### Marcar aulas

- Verifica se o aluno está cadastrado;
- Verifica se o veículo está cadastrado;
- Verifica se o instrutor está cadastrado;
- Verifica se o CNPJ está cadastrado e com status ATIVO;
- Verifica se o aluno não tem aula marcada naquele horário;
- Verifica se o instrutor não tem aula marcada naquele horário;
- Verifica se o veículo não tem aula marcada naquele horário;
- Verificar se aluno, instrutor e veículo pertencem a mesma categoria;
- Aula deve durar 50 minutos.

```
Body: {
    student_id: string
    instructor_id: string
    vehicle_id: string
    cnpj_id: string
    start_appointment: Date
    finish_appointment: Date
}
```

### Iniciar aula

- Verifica se o horário de inicio está dentro do intervalo de tolerância de 10 minutos;
- Grava horário de início da aula;

```
Path Parameter: {
    class_id: string
}
```

### Finalizar aula

- Verifica se o horário de término está dentro do intervalo de tolerância de 10 minutos;
- Grava horário de término da aula;
- Grava tempo total da aula.

```
Path Parameter: {
    class_id: string
}
```

### Enviar aula

- Envia dados da aula para o DETRAN;

```
Path Parameter: {
    class_id: string
}
```
import * as Yup from 'yup';

export const validationSchemas = [
  Yup.object({
    nome: Yup.string().required('O nome é obrigatório.'),
    cpf: Yup.string().required('O CPF é obrigatório.'),
    nascimento: Yup.string().required('A data de nascimento é obrigatória.'),
    estadoCivil: Yup.string().required('O estado civil é obrigatório.'),
  }),
  Yup.object({
    email: Yup.string()
      .email('Informe um email válido.')
      .required('O email é obrigatório.'),
    telefone: Yup.string().required('O telefone é obrigatório.'),
    endereco: Yup.string().required('O endereço é obrigatório.'),
    estado: Yup.string().required('O estado é obrigatório.'),
  }),
  Yup.object({
    profissao: Yup.string().required('A profissão é obrigatória.'),
    renda: Yup.number().required('A renda é obrigatória.'),
    tempoEmprego: Yup.string().required('O tempo de emprego é obrigatório.'),
    tipoEmprego: Yup.string().required('O tipo de emprego é obrigatório.'),
  }),
  Yup.object({
    valorSolicitado: Yup.number().required('O valor solicitado é obrigatório.'),
    prazo: Yup.string().required('O prazo é obrigatório.'),
    finalidade: Yup.string().required('A finalidade é obrigatória.'),
    score: Yup.string().required('O score é obrigatório.'),
  }),
];

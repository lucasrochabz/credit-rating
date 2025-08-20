import * as Yup from 'yup';

export const validationSchemas = [
  Yup.object({
    idade: Yup.number()
      .required('A idade é obrigatória.')
      .integer('A idade dever ser um número inteiro')
      .positive('A idade deve ser um número positivo')
      .min(18, 'A idade mínima é 18 anos'),
    genero_estado_civil: Yup.string().required(
      'O genero e o estado civil são obrigatórios.',
    ),
    pessoas_responsaveis: Yup.number().required(
      'O campo de pessoas responsaveis é obrigatório.',
    ),
    telefone: Yup.number().required('O telefone é obrigatório.'),
    trabalhador_estrangeiro: Yup.string().required(
      'O campo de trabalhador estrangeiro é obrigatório.',
    ),
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
  Yup.object({
    parceiros_fiadores: Yup.number().required(
      'O valor solicitado é obrigatório.',
    ),
  }),
];

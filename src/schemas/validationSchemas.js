import * as Yup from 'yup';

export const validationSchemas = [
  Yup.object({
    idade: Yup.number()
      .required('A idade é obrigatória.')
      .integer('A idade dever ser um número inteiro')
      .positive('A idade deve ser um número positivo')
      .min(18, 'A idade mínima é 18 anos'),
    genero_estado_civil: Yup.string()
      .required('O genero e o estado civil são obrigatórios.')
      .oneOf(['A91', 'A92', 'A93', 'A94', 'A95'], 'Selecione uma opção válida'),
    pessoas_responsaveis: Yup.number()
      .required('O campo de pessoas responsaveis é obrigatório.')
      .integer('Dever ser um número inteiro')
      .positive('Deve ser um número positivo'),
    trabalhador_estrangeiro: Yup.string()
      .required('O campo de trabalhador estrangeiro é obrigatório.')
      .oneOf(['A201', 'A202'], 'Selecione uma opção válida'),
  }),

  Yup.object({
    emprego: Yup.string()
      .required('O emprego é obrigatório.')
      .oneOf(
        ['A171', 'A172', 'A173', 'A174', 'A175'],
        'Selecione uma opção válida',
      ),
    tempo_trabalho_atual: Yup.string()
      .required('O tempo trabalho atual é obrigatório.')
      .oneOf(['A71', 'A72', 'A73', 'A74', 'A75'], 'Selecione uma opção válida'),
    patrimonio: Yup.string()
      .required('O patrimonio é obrigatório.')
      .oneOf(['A121', 'A122', 'A123', 'A124'], 'Selecione uma opção válida'),
    tempo_residencia_atual: Yup.number()
      .required('O tempo residencia atual é obrigatório.')
      .integer('O tempo residencia atual dever ser um número inteiro')
      .positive('O tempo residencia atual deve ser um número positivo'),
    posse_moradia: Yup.string()
      .required('A moradia é obrigatória.')
      .oneOf(['A151', 'A152', 'A153'], 'Selecione uma opção válida'),
  }),

  Yup.object({
    situacao_conta_corrente: Yup.string()
      .required('A situacao da conta corrente é obrigatória.')
      .oneOf(['A11', 'A12', 'A13', 'A14'], 'Selecione uma opção válida'),
    poupanca_titulos: Yup.string()
      .required('O valor de poupanca é obrigatório.')
      .oneOf(['A61', 'A62', 'A63', 'A64', 'A65'], 'Selecione uma opção válida'),
    valor_credito: Yup.number()
      .required('O valor do credito é obrigatório.')
      .integer('O valor do credito dever ser um número inteiro')
      .positive('O valor do credito deve ser um número positivo'),
    parcelamento_sobre_renda: Yup.number()
      .required('O valor percentual sobre a renda é obrigatório.')
      .integer('O valor percentual sobre a renda dever ser um número inteiro')
      .positive('O valor percentual sobre a renda deve ser um número positivo'),
  }),

  Yup.object({
    duracao_emprestimo: Yup.number()
      .required('A duracao do emprestimo é obrigatória.')
      .integer('A duracao do emprestimo dever ser um número inteiro')
      .positive('A duracao do emprestimo deve ser um número positivo'),
    proposito_credito: Yup.string()
      .required('O proposito de credito é obrigatório.')
      .oneOf(
        [
          'A40',
          'A41',
          'A42',
          'A43',
          'A44',
          'A45',
          'A46',
          'A47',
          'A48',
          'A49',
          'A50',
        ],
        'Selecione uma opção válida',
      ),
    historico_de_credito: Yup.string()
      .required('O historico de credito é obrigatório.')
      .oneOf(['A30', 'A31', 'A32', 'A33', 'A34'], 'Selecione uma opção válida'),
    outros_parcelamentos: Yup.string()
      .required('Outros parcelamentos é obrigatório.')
      .oneOf(['A141', 'A142', 'A143'], 'Selecione uma opção válida'),
    creditos_existentes: Yup.number()
      .required('Creditos existentes é obrigatório.')
      .integer('Creditos existentes dever ser um número inteiro')
      .positive('Creditos existentes deve ser um número positivo'),
  }),

  Yup.object({
    parceiros_fiadores: Yup.string()
      .required('O valor solicitado é obrigatório.')
      .oneOf(['A101', 'A102', 'A103'], 'Selecione uma opção válida'),
  }),
];

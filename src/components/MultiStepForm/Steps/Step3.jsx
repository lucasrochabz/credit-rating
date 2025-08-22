import { Field, ErrorMessage } from 'formik';

export const Step3 = () => {
  const situacaoContaCorrenteOptions = [
    { value: '', label: 'Selecione' },
    { value: '0', label: '<0DM' },
    { value: '1', label: '0DM - 200DM' },
    { value: '2', label: '0DM - 200DM' },
    { value: '3', label: '>=1000DM' },
  ];

  const poupancaTitulosOptions = [
    { value: '', label: 'Selecione' },
    { value: '1', label: '<100DM' },
    { value: '2', label: '100DM - 500DM' },
    { value: '3', label: '500DM - 1000DM' },
    { value: '4', label: '>1000DM' },
    { value: '0', label: 'Desconhecido/Nenhum' },
  ];

  return (
    <>
      <label htmlFor="situacao_conta_corrente">
        Como está sua conta corrente atualmente?
      </label>
      <Field name="situacao_conta_corrente" as="select">
        {situacaoContaCorrenteOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name="situacao_conta_corrente"
        component="div"
        className="error"
      />

      <label htmlFor="poupanca_titulos">
        Quanto você possui em poupança ou títulos?
      </label>
      <Field name="poupanca_titulos" as="select">
        {poupancaTitulosOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name="poupanca_titulos" component="div" className="error" />

      <label htmlFor="valor_credito">
        Qual o valor de crédito que você está solicitando (em DM)?
      </label>
      <Field
        type="number"
        name="valor_credito"
        id="valor_credito"
        placeholder="Ex: 3000"
      />
      <ErrorMessage name="valor_credito" component="div" className="error" />

      <label htmlFor="parcelamento_sobre_renda(%)">
        Qual percentual da sua renda será usado para pagar a parcela?
      </label>
      <Field
        type="number"
        name="parcelamento_sobre_renda(%)"
        id="parcelamento_sobre_renda(%)"
        placeholder="Ex: 25"
      />
      <ErrorMessage
        name="parcelamento_sobre_renda(%)"
        component="div"
        className="error"
      />
    </>
  );
};

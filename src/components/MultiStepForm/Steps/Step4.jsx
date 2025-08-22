import { Field, ErrorMessage } from 'formik';

export const Step4 = () => {
  const propositoCreditoOptions = [
    { value: '', label: 'Selecione' },
    { value: 'A40', label: 'Carro (novo)' },
    { value: 'A41', label: 'Carro (usado)' },
    { value: 'A42', label: 'Mobilia/equipamentos' },
    { value: 'A43', label: 'Radio/Televisão' },
    { value: 'A44', label: 'Materiais Domésticos' },
    { value: 'A45', label: 'Reparos/Reformas' },
    { value: 'A46', label: 'Educação' },
    { value: 'A47', label: 'Férias' },
    { value: 'A48', label: 'Requalificação' },
    { value: 'A49', label: 'Negócios' },
    { value: 'A50', label: 'Outros' },
  ];

  const historicoDeCreditoOptions = [
    { value: '', label: 'Selecione' },
    { value: 'A30', label: 'Sem crédito/Créditos pagos totalmente' },
    { value: 'A31', label: 'Créditos pagos totalmente nesse banco' },
    { value: 'A32', label: 'Crédito existente pago em dia' },
    { value: 'A33', label: 'Atrasos em pagamentos passados' },
    { value: 'A34', label: 'Conta crítica/Créditos em outros bancos' },
  ];

  const outrosParcelamentosOptions = [
    { value: 'A141', label: 'Bancário' },
    { value: 'A142', label: 'Comércio' },
    { value: 'A143', label: 'Nenhum' },
  ];

  return (
    <>
      <label htmlFor="duracao_emprestimo">
        Por quantos meses você deseja pagar o empréstimo?
      </label>
      <Field
        type="number"
        name="duracao_emprestimo"
        id="duracao_emprestimo"
        placeholder="Ex: 24"
      />
      <ErrorMessage
        name="duracao_emprestimo"
        component="div"
        className="error"
      />

      <label htmlFor="proposito_credito">
        Para qual finalidade você quer o crédito?
      </label>
      <Field name="proposito_credito" as="select">
        {propositoCreditoOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name="proposito_credito"
        component="div"
        className="error"
      />

      <label htmlFor="historico_de_credito">
        Qual é o seu histórico de crédito?
      </label>
      <Field name="historico_de_credito" as="select">
        {historicoDeCreditoOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name="historico_de_credito"
        component="div"
        className="error"
      />

      <div>
        <fieldset className="radio-group">
          <legend>Você tem outros parcelamentos ativos?</legend>

          {outrosParcelamentosOptions.map((opt, index) => (
            <label key={index}>
              <Field
                type="radio"
                name="outros_parcelamentos"
                value={opt.value}
              />
              {opt.label}
            </label>
          ))}
        </fieldset>
        <ErrorMessage
          name="outros_parcelamentos"
          component="div"
          className="error"
        />
      </div>

      <label htmlFor="creditos_existentes">
        Quantos créditos você tem atualmente?
      </label>
      <Field
        type="number"
        name="creditos_existentes"
        id="creditos_existentes"
        placeholder="Ex: 1"
      />
      <ErrorMessage
        name="creditos_existentes"
        component="div"
        className="error"
      />
    </>
  );
};

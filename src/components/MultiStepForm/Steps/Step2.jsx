import { Field, ErrorMessage } from 'formik';

export const Step2 = () => {
  const empregoOptions = [
    { value: '', label: 'Selecione' },
    { value: '0', label: 'Desempregado sem instrução' },
    { value: '1', label: 'Empregado sem instrução' },
    { value: '2', label: 'Empregado com instrução' },
    { value: '3', label: 'Alto cargo/Autônomo' },
  ];

  const tempoTrabalhoAtualOptions = [
    { value: '', label: 'Selecione' },
    { value: '0', label: 'Desempregado' },
    { value: '1', label: '<1 ano' },
    { value: '2', label: '1 ano - 4 anos' },
    { value: '3', label: '4 anos - 7 anos' },
    { value: '4', label: '>7 anos' },
  ];

  const patrimonioOptions = [
    { value: '', label: 'Selecione' },
    { value: 'A121', label: 'Imóveis' },
    { value: 'A122', label: 'Seguro de vida' },
    { value: 'A123', label: 'Carro ou outros' },
    { value: 'A124', label: 'Desconhecido/Nenhum' },
  ];

  const posseMoradiaOptions = [
    { value: '', label: 'Selecione' },
    { value: 'A151', label: 'Aluguel' },
    { value: 'A152', label: 'Casa própria' },
    { value: 'A153', label: 'Mora de graça' },
  ];

  return (
    <>
      <label htmlFor="emprego">Qual é sua situação profissional atual?</label>
      <Field name="emprego" as="select">
        {empregoOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name="emprego" component="div" className="error" />

      <label htmlFor="tempo_trabalho_atual">
        Há quanto tempo você está no emprego atual?
      </label>
      <Field name="tempo_trabalho_atual" as="select">
        {tempoTrabalhoAtualOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name="tempo_trabalho_atual"
        component="div"
        className="error"
      />

      <label htmlFor="patrimonio">
        Você possui algum dos seguintes patrimônios? *
      </label>
      <Field name="patrimonio" as="select">
        {patrimonioOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name="patrimonio" component="div" className="error" />

      <label htmlFor="tempo_residencia_atual">
        Há quantos anos você mora no seu endereço atual?
      </label>
      <Field
        type="number"
        name="tempo_residencia_atual"
        id="tempo_residencia_atual"
        placeholder="Ex: 5"
      />
      <ErrorMessage
        name="tempo_residencia_atual"
        component="div"
        className="error"
      />

      <label htmlFor="posse_moradia">Qual é a sua situação de moradia?</label>
      <Field name="posse_moradia" as="select">
        {posseMoradiaOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name="posse_moradia" component="div" className="error" />
    </>
  );
};

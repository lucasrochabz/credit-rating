import { Field, ErrorMessage } from 'formik';

export const Step1 = () => {
  const generoEstadoCivilOptions = [
    { value: '', label: 'Selecione' },
    { value: 'A91', label: 'Homem - Divorciado' },
    { value: 'A92', label: 'Mulher - Casada/Divorciada' },
    { value: 'A93', label: 'Homem - Solteiro' },
    { value: 'A94', label: 'Homem - Casado' },
    { value: 'A95', label: 'Mulher - Solteira' },
  ];

  const trabalhadorEstrangeiroOptions = [
    { value: 'A201', label: 'Sim' },
    { value: 'A202', label: 'Não' },
  ];

  return (
    <>
      <label htmlFor="idade">Qual a sua idade?</label>
      <Field type="number" name="idade" id="idade" placeholder="Ex: 31" />
      <ErrorMessage name="idade" component="div" className="error" />

      <label htmlFor="genero_estado_civil">
        Qual o seu gênero e estado civil?
      </label>
      <Field name="genero_estado_civil" id="genero_estado_civil" as="select">
        {generoEstadoCivilOptions.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name="genero_estado_civil"
        component="div"
        className="error"
      />

      <label htmlFor="pessoas_responsaveis">
        Quantas pessoas estão sob sua responsabilidade? *
      </label>
      <Field
        type="number"
        name="pessoas_responsaveis"
        id="pessoas_responsaveis"
        placeholder="Ex: 2 (filhos, dependentes, etc.)"
      />
      <ErrorMessage
        name="pessoas_responsaveis"
        component="div"
        className="error"
      />

      <div>
        <fieldset className="radio-group">
          <legend>Você é trabalhador estrangeiro?</legend>

          {trabalhadorEstrangeiroOptions.map((opt, index) => (
            <label key={index}>
              <Field
                type="radio"
                name="trabalhador_estrangeiro"
                value={opt.value}
              />
              {opt.label}
            </label>
          ))}
        </fieldset>
        <ErrorMessage
          name="trabalhador_estrangeiro"
          component="div"
          className="error"
        />
      </div>
    </>
  );
};

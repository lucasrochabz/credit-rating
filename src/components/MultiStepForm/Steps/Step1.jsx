import { Field, ErrorMessage } from 'formik';

export const Step1 = () => {
  return (
    <>
      <label htmlFor="idade">Qual a sua idade?</label>
      <Field type="number" name="idade" id="idade" placeholder="Ex: 31" />
      <ErrorMessage name="idade" component="div" className="error" />

      <label htmlFor="genero_estado_civil">
        Qual o seu gênero e estado civil?
      </label>
      <Field name="genero_estado_civil" as="select">
        <option value="">Gênero - Estado civil</option>
        <option value="A91">Homem - Divorciado</option>
        <option value="A92">Mulher - Casada/Divorciada</option>
        <option value="A93">Homem - Solteiro</option>
        <option value="A94">Homem - Casado</option>
        <option value="A95">Mulher - Solteira</option>
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

      <label htmlFor="telefone">Qual o seu número de telefone?</label>
      <Field name="telefone" id="telefone" placeholder="(85) 99999-9999" />
      <ErrorMessage name="telefone" component="div" className="error" />

      <div>
        <fieldset className="radio-group">
          <legend>Você é trabalhador estrangeiro?</legend>

          <label>
            <Field
              type="radio"
              name="trabalhador_estrangeiro"
              id="trabalhador_estrangeiro"
              value="sim"
            />
            Sim
          </label>

          <label>
            <Field
              type="radio"
              name="trabalhador_estrangeiro"
              id="trabalhador_estrangeiro"
              value="nao"
            />
            Não
          </label>
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

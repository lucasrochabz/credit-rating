import { Field, ErrorMessage } from 'formik';

export const Step4 = () => {
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
        <option value="">Selecione uma opção</option>
        <option value="A40">Carro (novo)</option>
        <option value="A41">Carro (usado)</option>
        <option value="A42">Mobilia/equipamentos</option>
        <option value="A43">Radio/Televisão</option>
        <option value="A44">Materiais Domésticos</option>
        <option value="A45">Reparos/Reformas</option>
        <option value="A46">Educação</option>
        <option value="A47">Férias</option>
        <option value="A48">Requalificação</option>
        <option value="A49">Negócios</option>
        <option value="A50">Outros</option>
      </Field>
      <ErrorMessage
        name="proposito_credito"
        component="div"
        className="error"
      />

      <label htmlFor="historico_de_credito">
        Para qual finalidade você quer o crédito?
      </label>
      <Field name="historico_de_credito" as="select">
        <option value="">Selecione uma opção</option>
        <option value="A30">Sem crédito/Créditos pagos totalmente</option>
        <option value="A31">Créditos pagos totalmente nesse banco</option>
        <option value="A32">Crédito existente pago em dia</option>
        <option value="A33">Atrasos em pagamentos passados</option>
        <option value="A34">Conta crítica/Créditos em outros bancos</option>
      </Field>
      <ErrorMessage
        name="historico_de_credito"
        component="div"
        className="error"
      />

      <div>
        <fieldset className="radio-group">
          <legend>Você tem outros parcelamentos ativos?</legend>

          <label>
            <Field
              type="radio"
              name="outros_parcelamentos"
              id="outros_parcelamentos"
              value="A141"
            />
            Bancário
          </label>

          <label>
            <Field
              type="radio"
              name="outros_parcelamentos"
              id="outros_parcelamentos"
              value="A142"
            />
            Comércio
          </label>

          <label>
            <Field
              type="radio"
              name="outros_parcelamentos"
              id="outros_parcelamentos"
              value="A143"
            />
            Nenhum
          </label>
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

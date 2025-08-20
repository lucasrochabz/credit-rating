import { Field, ErrorMessage } from 'formik';

export const Step3 = () => {
  return (
    <>
      <label htmlFor="situacao_conta_corrente">
        Como está sua conta corrente atualmente?
      </label>
      <Field name="situacao_conta_corrente" as="select">
        <option value="">Selecione uma opção</option>
        <option value="A11">{'<0DM'}</option>
        <option value="A12">0DM - 200DM</option>
        <option value="A13">{'>200DM'}</option>
        <option value="A14">Sem checagem</option>
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
        <option value="">Selecione uma opção</option>
        <option value="A61">{'<100DM'}</option>
        <option value="A62">100DM - 500DM</option>
        <option value="A63">500DM - 1000DM</option>
        <option value="A64">{'>1000DM'}</option>
        <option value="A65">Desconhecido/Nenhum</option>
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

      <label htmlFor="parcelamento_sobre_renda">
        Qual percentual da sua renda será usado para pagar a parcela?
      </label>
      <Field
        type="number"
        name="parcelamento_sobre_renda"
        id="parcelamento_sobre_renda"
        placeholder="Ex: 25"
      />
      <ErrorMessage
        name="parcelamento_sobre_renda"
        component="div"
        className="error"
      />
    </>
  );
};

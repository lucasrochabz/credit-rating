import { Field, ErrorMessage } from 'formik';

export const Step4 = () => {
  return (
    <>
      <Field
        name="valorSolicitado"
        type="number"
        placeholder="Valor solicitado (R$)"
      />
      <ErrorMessage name="valorSolicitado" component="div" className="error" />

      <Field name="prazo" as="select">
        <option value="">Prazo de pagamento</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
        <option value="36">36 meses</option>
      </Field>
      <ErrorMessage name="prazo" component="div" className="error" />

      <Field name="finalidade" placeholder="Finalidade do crédito" />
      <ErrorMessage name="finalidade" component="div" className="error" />

      <div>
        <label>
          <Field type="radio" name="score" value="baixo" />
          Score baixo
        </label>
        <label>
          <Field type="radio" name="score" value="medio" />
          Score médio
        </label>
        <label>
          <Field type="radio" name="score" value="alto" />
          Score alto
        </label>
        <ErrorMessage name="score" component="div" className="error" />
      </div>
    </>
  );
};

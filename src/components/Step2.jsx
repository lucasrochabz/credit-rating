import { Field, ErrorMessage } from 'formik';

export const Step2 = () => {
  return (
    <>
      <Field name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" className="error" />

      <Field name="telefone" placeholder="Telefone" />
      <ErrorMessage name="telefone" component="div" className="error" />

      <Field name="endereco" placeholder="Endereço" />
      <ErrorMessage name="endereco" component="div" className="error" />

      <Field name="estado" as="select">
        <option value="">Estado</option>
        <option value="sp">SP</option>
        <option value="rj">RJ</option>
        <option value="mg">MG</option>
      </Field>
      <ErrorMessage name="estado" component="div" className="error" />
    </>
  );
};

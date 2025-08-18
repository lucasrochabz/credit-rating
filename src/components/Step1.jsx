import { Field, ErrorMessage } from 'formik';

export const Step1 = () => {
  return (
    <>
      <Field name="nome" placeholder="Nome completo" />
      <ErrorMessage name="nome" component="div" className="error" />

      <Field name="cpf" placeholder="CPF" />
      <ErrorMessage name="cpf" component="div" className="error" />

      <Field name="nascimento" type="date" />
      <ErrorMessage name="nascimento" component="div" className="error" />

      <Field name="estadoCivil" as="select">
        <option value="">Estado civil</option>
        <option value="solteiro">Solteiro</option>
        <option value="casado">Casado</option>
        <option value="divorciado">Divorciado</option>
      </Field>
      <ErrorMessage name="estadoCivil" component="div" className="error" />
    </>
  );
};

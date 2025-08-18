import { Field, ErrorMessage } from 'formik';

export const Step3 = () => {
  return (
    <>
      <Field name="profissao" placeholder="Profissão" />
      <ErrorMessage name="profissao" component="div" className="error" />

      <Field name="renda" type="number" placeholder="Renda mensal (R$)" />
      <ErrorMessage name="renda" component="div" className="error" />

      <Field name="tempoEmprego" as="select">
        <option value="">Tempo de emprego</option>
        <option value="menos1">Menos de 1 ano</option>
        <option value="1-3">1 a 3 anos</option>
        <option value="mais3">Mais de 3 anos</option>
      </Field>
      <ErrorMessage name="tempoEmprego" component="div" className="error" />

      <div>
        <label>
          <Field type="radio" name="tipoEmprego" value="CLT" />
          CLT
        </label>
        <label>
          <Field type="radio" name="tipoEmprego" value="Autônomo" />
          Autônomo
        </label>
        <ErrorMessage name="tipoEmprego" component="div" className="error" />
      </div>
    </>
  );
};

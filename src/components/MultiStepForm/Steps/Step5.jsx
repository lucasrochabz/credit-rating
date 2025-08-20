import { Field, ErrorMessage } from 'formik';

export const Step5 = () => {
  return (
    <>
      <div>
        <fieldset className="radio-group">
          <legend>Você tem alguém que possa ser parceiro ou fiador?</legend>

          <label>
            <Field
              type="radio"
              name="parceiros_fiadores"
              id="parceiros_fiadores"
              value="A101"
            />
            Nenhum
          </label>

          <label>
            <Field
              type="radio"
              name="parceiros_fiadores"
              id="parceiros_fiadores"
              value="A102"
            />
            Parceiros/sócios
          </label>

          <label>
            <Field
              type="radio"
              name="parceiros_fiadores"
              id="parceiros_fiadores"
              value="A103"
            />
            Fiadores
          </label>
        </fieldset>

        <ErrorMessage
          name="parceiros_fiadores"
          component="div"
          className="error"
        />
      </div>
    </>
  );
};

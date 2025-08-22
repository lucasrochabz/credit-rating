import { Field, ErrorMessage } from 'formik';

export const Step5 = () => {
  const parceirosFiadoresOptions = [
    { value: 'A101', label: 'Nenhum' },
    { value: 'A102', label: 'Parceiros/sócios' },
    { value: 'A103', label: 'Fiadores' },
  ];

  return (
    <>
      <div>
        <fieldset className="radio-group">
          <legend>Você tem alguém que possa ser parceiro ou fiador?</legend>

          {parceirosFiadoresOptions.map((opt, index) => (
            <label key={index}>
              <Field type="radio" name="parceiros_fiadores" value={opt.value} />
              {opt.label}
            </label>
          ))}
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

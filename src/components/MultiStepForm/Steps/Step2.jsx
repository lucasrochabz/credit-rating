import { Field, ErrorMessage } from 'formik';

export const Step2 = () => {
  return (
    <>
      <label htmlFor="emprego">Qual é sua situação profissional atual?</label>
      <Field name="emprego" as="select">
        <option value="">Selecione uma opção</option>
        <option value="A171">Desempregado sem instrução</option>
        <option value="A172">Empregado sem instrução</option>
        <option value="A173">Empregado com instrução</option>
        <option value="A174">Alto cargo/Autônomo</option>
      </Field>
      <ErrorMessage name="emprego" component="div" className="error" />

      <label htmlFor="tempo_trabalho_atual">
        Há quanto tempo você está no emprego atual?
      </label>
      <Field name="tempo_trabalho_atual" as="select">
        <option value="">Selecione uma opção</option>
        <option value="A71">Desempregado</option>
        <option value="A72">{'<1 ano'}</option>
        <option value="A73">1 ano - 4 anos</option>
        <option value="A74">4 anos - 7 anos</option>
        <option value="A75">{'>7 anos'}</option>
      </Field>
      <ErrorMessage
        name="tempo_trabalho_atual"
        component="div"
        className="error"
      />

      <label htmlFor="patrimonio">
        Você possui algum dos seguintes patrimônios? *
      </label>
      <Field name="patrimonio" as="select">
        <option value="">Selecione uma opção</option>
        <option value="A121">Imóveis</option>
        <option value="A122">Seguro de vida</option>
        <option value="A123">Carro ou outros</option>
        <option value="A124">Desconhecido/Nenhum</option>
      </Field>
      <ErrorMessage name="patrimonio" component="div" className="error" />

      <label htmlFor="tempo_residencia_atual">
        Há quantos anos você mora no seu endereço atual?
      </label>
      <Field
        type="number"
        name="tempo_residencia_atual"
        id="tempo_residencia_atual"
        placeholder="Ex: 5"
      />
      <ErrorMessage
        name="tempo_residencia_atual"
        component="div"
        className="error"
      />

      <label htmlFor="posse_moradia">Qual é a sua situação de moradia?</label>
      <Field name="posse_moradia" as="select">
        <option value="">Selecione uma opção</option>
        <option value="A151">Aluguel</option>
        <option value="A152">Casa própria</option>
        <option value="A153">Mora de graça</option>
      </Field>
      <ErrorMessage name="posse_moradia" component="div" className="error" />
    </>
  );
};

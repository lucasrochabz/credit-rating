import { useState } from 'react';
import { Formik, Form } from 'formik';
import { validationSchemas } from '../../schemas/validationSchemas.js';
import { ProgressBar } from '../ProgressBar';
import { Step1, Step2, Step3, Step4, Step5 } from './Steps';

const initialValues = {
  idade: '',
  genero_estado_civil: '',
  pessoas_responsaveis: '',
  trabalhador_estrangeiro: '',

  emprego: '',
  tempo_trabalho_atual: '',
  tempo_residencia_atual: '',
  posse_moradia: '',

  situacao_conta_corrente: '',
  poupanca_titulos: '',
  valor_credito: '',
  parcelamento_sobre_renda: '',

  duracao_emprestimo: '',
  proposito_credito: '',
  historico_de_credito: '',
  outros_parcelamentos: '',
  creditos_existentes: '',

  parceiros_fiadores: '',
};

const steps = [
  { component: Step1, label: 'Dados Pessoais' },
  { component: Step2, label: 'Situação Profissional e Patrimonial' },
  { component: Step3, label: 'Finanças Atuais' },
  { component: Step4, label: 'Detalhes do Empréstimo' },
  { component: Step5, label: 'Garantias e Fiadores' },
];

export const MultiStepForm = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  const CurrentStep = steps[step].component;
  const isLastStep = step === steps.length - 1;

  const handleSubmit = async (values, actions) => {
    if (isLastStep) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onFinish(values);
    } else {
      setStep(step + 1);
    }
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  return (
    <>
      <ProgressBar currentStep={step} totalSteps={steps.length} />
      <h2 className="title">{steps[step].label}</h2>

      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchemas[step]}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CurrentStep />

            <div className="buttons">
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)}>
                  Voltar
                </button>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isLastStep ? 'Prever' : 'Próximo'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

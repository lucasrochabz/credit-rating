import { useState } from 'react';
import { Formik, Form } from 'formik';
import { validationSchemas } from '../../schemas/validationSchemas.js';
import { ProgressBar } from '../ProgressBar/ProgressBar.jsx';
import { Step1 } from './Steps/Step1.jsx';
import { Step2 } from './Steps/Step2.jsx';
import { Step3 } from './Steps/Step3.jsx';
import { Step4 } from './Steps/Step4.jsx';

const initialValues = {
  nome: '',
  cpf: '',
  nascimento: '',
  estadoCivil: '',

  email: '',
  telefone: '',
  endereco: '',
  estado: '',

  profissao: '',
  renda: '',
  tempoEmprego: '',
  tipoEmprego: '',

  valorSolicitado: '',
  prazo: '',
  finalidade: '',
  score: '',
};

const steps = [
  { component: Step1, label: 'Informações Pessoais' },
  { component: Step2, label: 'Contato' },
  { component: Step3, label: 'Renda' },
  { component: Step4, label: 'Solicitação' },
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
                {isLastStep ? 'Finalizar' : 'Próximo'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

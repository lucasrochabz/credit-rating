import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { ProgressBar } from './components/ProgressBar.jsx';
import { Step1 } from './components/Step1.jsx';
import { Step2 } from './components/Step2.jsx';
import { Step3 } from './components/Step3.jsx';
import { Step4 } from './components/Step4.jsx';
import { Aprovado } from './components/Aprovado.jsx';
import { Reprovado } from './components/Reprovado.jsx';
import { validationSchemas } from './schemas/validationSchemas.js';

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

export const App = () => {
  const [step, setStep] = useState(0);
  const [formSent, setFormSent] = useState(false);

  const isLastStep = step === steps.length - 1;
  const CurrentStep = steps[step].component;

  const handleSubmit = async (values, actions) => {
    if (isLastStep) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert('Formulário enviado com sucesso!');
      console.log(values);
      setFormSent(true);
    } else {
      setStep(step + 1);
    }
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  return (
    <div className="container">
      {formSent ? (
        // <Aprovado />
        <Reprovado />
      ) : (
        <>
          <h2>Análise de Crédito</h2>

          <ProgressBar currentStep={step} totalSteps={steps.length} />

          <h2 className="title">{steps[step].label}</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[step]}
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
      )}
    </div>
  );
};

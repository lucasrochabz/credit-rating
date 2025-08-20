import { useState } from 'react';
import { MultiStepForm } from './components/MultiStepForm';
import { Result } from './components/Result';

export const App = () => {
  const [formSent, setFormSent] = useState(false);
  const [isApproved, setIsAprovado] = useState(null);

  const handleFinish = (values) => {
    console.log(values);
    setFormSent(true);

    const result = Math.round(Math.random());
    setIsAprovado(result === 1);
  };

  return (
    <div className="container">
      {formSent ? (
        <Result isApproved={isApproved} />
      ) : (
        <>
          <h2>Classificação de Risco de Crédito</h2>
          <MultiStepForm onFinish={handleFinish} />
        </>
      )}
    </div>
  );
};

import { useState } from 'react';
import { MultiStepForm } from './components/MultiStepForm';
import { Result } from './components/Result';

export const App = () => {
  const [formSent, setFormSent] = useState(false);
  const [isApproved, setIsAprovado] = useState(null);

  const handleFinish = (values) => {
    setFormSent(true);

    setIsAprovado(values === '0');
  };

  return (
    <div className="container">
      {formSent ? (
        <Result isApproved={isApproved} />
      ) : (
        <>
          <h2 className="subtitle">Classificação de Risco de Crédito</h2>
          <MultiStepForm onFinish={handleFinish} />
        </>
      )}
    </div>
  );
};

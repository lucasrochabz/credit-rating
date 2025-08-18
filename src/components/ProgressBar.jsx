export const ProgressBar = ({ currentStep, totalSteps }) => {
  const width = ((currentStep + 1) / totalSteps) * 100;
  return (
    <div className="progress-container">
      <div className="progress" style={{ width: `${width}%` }} />
    </div>
  );
};

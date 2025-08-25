import './Result.css';

const images = import.meta.glob('/src/assets/*', {
  eager: true,
});

export const Result = ({ isApproved }) => {
  const status = isApproved ? 'approved' : 'failed';
  const imagePath = images[`/src/assets/${status}.svg`]?.default;

  const contentMap = {
    approved: {
      alt: 'Approved',
      title: 'Adimplente',
      message:
        'Parabéns, seu crédito foi aprovado com sucesso. Aproveite essa nova oportunidade!',
    },
    failed: {
      alt: 'Failed',
      title: 'Inadimplente',
      message:
        'Lamentamos, mas seu crédito não foi aprovado. Você poderá tentar novamente em outra ocasião.',
    },
  };

  const content = contentMap[status];

  return (
    <div className={`result ${status}`}>
      <img src={imagePath} alt={content.alt} />
      <h2>{content.title}</h2>
      <p>{content.message}</p>
      <a href="/">Voltar para a Home</a>
    </div>
  );
};

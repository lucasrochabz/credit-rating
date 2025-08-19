import approved from '../../public/aprovado.svg';
import failed from '../../public/reprovado.svg';

export const Result = ({ isApproved }) => {
  const content = isApproved
    ? {
        img: approved,
        alt: 'Approved',
        title: 'Crédito Aprovado!',
        message:
          'Parabéns, seu crédito foi aprovado com sucesso. Aproveite essa nova oportunidade!',
      }
    : {
        img: failed,
        alt: 'Failed',
        title: 'Crédito Reprovado!',
        message:
          'Lamentamos, mas seu crédito não foi aprovado. Você poderá tentar novamente em outra ocasião.',
      };

  return (
    <div>
      <img src={content.img} alt={content.alt} />
      <h2>{content.title}</h2>
      <p>{content.message}</p>
      <a href="/">Voltar para a Home</a>
    </div>
  );
};

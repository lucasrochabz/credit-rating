import approved from '../../../public/approved.svg';
import failed from '../../../public/failed.svg';
import './Result.css';

export const Result = ({ isApproved }) => {
  const content = isApproved
    ? {
        img: approved,
        alt: 'Approved',
        title: 'Adimplente',
        message:
          'Parabéns, seu crédito foi aprovado com sucesso. Aproveite essa nova oportunidade!',
      }
    : {
        img: failed,
        alt: 'Failed',
        title: 'Inadimplente',
        message:
          'Lamentamos, mas seu crédito não foi aprovado. Você poderá tentar novamente em outra ocasião.',
      };

  return (
    <div className={`result ${isApproved ? 'approved' : 'failed'}`}>
      <img src={content.img} alt={content.alt} />
      <h2>{content.title}</h2>
      <p>{content.message}</p>
      <a href="/">Voltar para a Home</a>
    </div>
  );
};

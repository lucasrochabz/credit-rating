import imagem from '../../public/aprovado.svg';

export const Aprovado = () => {
  return (
    <div>
      <h2>Seu crédito foi aprovado!</h2>
      <img src={imagem} alt="Aprovado" />
    </div>
  );
};

import imagem from '../../public/reprovado.svg';

export const Reprovado = () => {
  return (
    <div>
      <h2>Crédito reprovado!</h2>
      <p>
        Parabéns, seu crédito foi aprovado com sucesso. Aproveite essa nova
        oportunidade!
      </p>
      <img src={imagem} alt="Reprovado" />
    </div>
  );
};

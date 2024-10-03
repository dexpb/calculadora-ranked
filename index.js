const jogador = {
    vitorias: 25,
    derrotas: 5
};

function calculadoraSaldoELevel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;


  let nivel =
    vitorias < 10
      ? "Ferro"
      : vitorias <= 20
      ? "Bronze"
      : vitorias <= 50
      ? "Prata"
      : vitorias <= 80
      ? "Ouro"
      : vitorias <= 90
      ? "Diamante"
      : vitorias <= 100
      ? "Lendário"
      : "Imortal";

  // Exibe o saldo e o nível
  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  );
}


calculadoraSaldoELevel(jogador.vitorias, jogador.derrotas);

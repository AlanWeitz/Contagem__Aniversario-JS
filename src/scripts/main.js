AOS.init();

window.addEventListener('DOMContentLoaded', () => {
  const agora = new Date();
  const anoAtual = agora.getFullYear();

  // Data do evento: 2 de abril do ano atual (ou próximo ano se já passou)
  let dataDoEvento = new Date(`Apr 02, ${anoAtual} 00:00:00`);
  if (agora > dataDoEvento) {
    dataDoEvento = new Date(`Apr 02, ${anoAtual + 1} 00:00:00`);
  }

  const contaAsHoras = setInterval(function() {
    const agora = new Date();

    const distanciaAteOEvento = dataDoEvento.getTime() - agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
      clearInterval(contaAsHoras);
      document.getElementById('contador').innerHTML = 'Feliz Aniversário!';
    }
  }, 1000);
});

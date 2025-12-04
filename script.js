// 1. Selecionar o elemento do relógio

const clockElement = document.getElementById('clock');

 

// 2. Chamar a função updateClock a cada 1000ms (1 segundo)

setInterval(updateClock, 1000);

 

// 3. Função que atualiza o relógio

function updateClock() {

    // 3.1. Pegar a data e hora atual

    const now = new Date();

 

    // 3.2. Extrair horas, minutos e segundos

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();

 

    // 3.3. Formatar para ter sempre dois dígitos (ex: 7 -> 07)

    // .padStart(tamanhoTotal, caractereDePreenchimento)

    hours = String(hours).padStart(2, '0');

    minutes = String(minutes).padStart(2, '0');

    seconds = String(seconds).padStart(2, '0');

    // 3.4. Atualizar o HTML

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

}

 

// 4. Chamar a função uma vez no início para não esperar 1s

updateClock();
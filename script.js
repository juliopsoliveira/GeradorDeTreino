const exerciciosDisponiveis = {
    perna: [
        {exercicio: "agachamento livre", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "leg press 45", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "cadeira flexora", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "panturrilha", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "afundo", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "stiff", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "extensão de pernas", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "flexão de pernas", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "elevação de panturrilha em pé", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "agachamento búlgaro", series: 4, repeticoes: 12, descanso: 90}
    ],
    peito: [
        {exercicio: "supino reto", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "crossover", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "supino inclinado", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "voador", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "supino declinado", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "crucifixo inclinado", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "flexão de braços", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "peck deck", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "crucifixo reto", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "mergulho em paralelas", series: 4, repeticoes: 12, descanso: 90}
    ],
    costas: [
        {exercicio: "remada curvada", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "remada unilateral", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "remada cavalinho", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "puxada frontal", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "barra fixa", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "remada baixa", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "puxada alta supinada", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "levantamento terra", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "pullover", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "hiperextensão lombar", series: 4, repeticoes: 12, descanso: 90}
    ],
    biceps: [
        {exercicio: "rosca direta", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca alternada", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca concentrada", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca no banco scott", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca martelo", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca inversa", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca na polia baixa", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca com barra W", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca inclinada", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "rosca spider", series: 4, repeticoes: 12, descanso: 90}
    ],
    triceps: [
        {exercicio: "tríceps pulley", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "tríceps francês", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "tríceps testa", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "mergulho no banco", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "tríceps coice", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "tríceps na barra paralela", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "tríceps com corda", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "tríceps inverso", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "extensão de tríceps unilateral", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "kickback no cabo", series: 4, repeticoes: 12, descanso: 90}
    ],
    ombro: [
        {exercicio: "desenvolvimento com barra", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "desenvolvimento com halteres", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "elevação lateral", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "elevação frontal", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "elevação lateral na polia", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "crucifixo invertido na polia", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "arnold press", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "remada alta", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "elevação frontal com barra", series: 4, repeticoes: 12, descanso: 90},
        {exercicio: "crucifixo invertido com halteres", series: 4, repeticoes: 12, descanso: 90}
    ]
};

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Escolhe um índice aleatório
        [array[i], array[j]] = [array[j], array[i]];  // Troca os elementos
    }
    return array;
};
// Função para gerar o treino baseado nas escolhas do usuário
function gerarTreino() {
    const treinoDiv = document.getElementById('treino');
    treinoDiv.innerHTML = ''; // Limpa o treino anterior

    const grupo1 = document.getElementById('grupo1').value;
    const grupo2 = document.getElementById('grupo2').value;
    const grupo3 = document.getElementById('grupo3').value;
    const incluirCardio = document.getElementById('cardio').value === 'true';

    const gruposSelecionados = [grupo1, grupo2, grupo3].filter(grupo => grupo !== "");

    // Define quantos exercícios aleatórios você quer de cada grupo (ex: 3 exercícios)
    const quantidadeDeExercicios = 3;

    gruposSelecionados.forEach(grupo => {
        let exercicios = exerciciosDisponiveis[grupo];
        exercicios = embaralharArray(exercicios);  // Embaralha a lista de exercícios
        const exerciciosSelecionados = exercicios.slice(0, quantidadeDeExercicios);  // Seleciona a quantidade desejada

        treinoDiv.innerHTML += `<h3>${grupo.charAt(0).toUpperCase() + grupo.slice(1)}</h3>`;
        exerciciosSelecionados.forEach(exercicio => {
            treinoDiv.innerHTML += `<p>${exercicio.exercicio}: ${exercicio.series} séries de ${exercicio.repeticoes} repetições, descanso ${exercicio.descanso} segundos</p>`;
        });
    });

    if (incluirCardio) {
        treinoDiv.innerHTML += `<h3>Cardio</h3><p>30 minutos de exercício aeróbico moderado (corrida, bicicleta, etc.)</p>`;
    }
};
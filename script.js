const historia = [
    {
        texto: "Olá astronauta! Que planeta pretende representar? :",
        escolhas: [
            { opcao: "Cromulent", nextPage: 1 },
            { opcao: "Sonder", nextPage: 1 },
            { opcao: "Mellifluous", nextPage: 1 }
        ]
    },
    {
        texto: "Em breve irá embarcar numa viagem pela galáxia, em que nave pertende embarcar? :",
        escolhas: [
            { opcao: "Nave Espacial Estrelar", nextPage: 2 },
            { opcao: "Nave Espacial Luar", nextPage: 3 },
            { opcao: "Nave Espacial Solar", nextPage: 4 }
        ]
    },
    {
        texto: "Na sua Nave Espacial Estrelar, chega a um planeta desconhecido chamado Épocaflorar. Escolha a sua ação:",
        escolhas: [
            { opcao: "Explorar a superfície", nextPage: 5 },
            { opcao: "Continuar a viagem", nextPage: 6 }
        ]
    },
    {
        texto: "Com a sua Nave Espacial Luar, descobre uma anomalia quando chega a um planeta longinquo chamado   . Escolha a sua ação:",
        escolhas: [
            { opcao: "Analisar a anomalia", nextPage: 7 },
            { opcao: "Continuar a viagem", nextPage: 7 }
        ]
    },
    {
        texto: "Com a sua Nave Espacial Solar, encontra vida num planeta chamado Inefável. Escolha a sua ação:",
        escolhas: [
            { opcao: "Estabelecer contacto", nextPage: 8 },
            { opcao: "Observar à distância", nextPage: 5 }
        ]
    },
    {
        texto: "Descobre uma anomalia no espaço. A A.I. de bordo sugere investigar a anomalia. Escolha a sua ação:",
        escolhas: [
            { opcao: "Analisar anomalia", nextPage: 8 },
            { opcao: "Continuar a viagem", nextPage: 6 }
        ]
    },
    {
        texto: "Chega ao planeta    e descobre vida extraterrestre. A A.I. de bordo sugere troca de informação. Escolha a sua ação:",
        escolhas: [
            { opcao: "Trocar informação com a vida extraterrestre", nextPage: 8 },
            { opcao: "Continuar a viagem", nextPage: 6 }
        ]
    },
    {
        texto: "Descobre uma anomalia no espaço. A A.I. de bordo sugere investigar a anomalia. Escolha a sua ação:",
        escolhas: [
            { opcao: "Analisar anomalia", nextPage: 8 },
            { opcao: "Continuar a viagem", nextPage: 6 }
        ]
    },
]
let paginaAtual = 0; 

function avancarParaProximaPagina(nextPage) {
    
    if (historia[nextPage]) {
        
        paginaAtual = nextPage;

        
        atualizarPagina();
    }
}
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('choice')) {
        const nextPage = event.target.getAttribute('data-next-page');
        avancarParaProximaPagina(parseInt(nextPage));
    }
});

function atualizarPagina() {
    const storyTextElement = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices-container');

    
    storyTextElement.textContent = historia[paginaAtual].texto;

   
    choicesContainer.innerHTML = '';

   
    historia[paginaAtual].escolhas.forEach((escolha, index) => {
        const choiceElement = document.createElement('button');
        choiceElement.classList.add('choice');
        choiceElement.textContent = escolha.opcao;
        choiceElement.setAttribute('data-next-page', escolha.nextPage);

        
        choicesContainer.appendChild(choiceElement);
    });
}

atualizarPagina();

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const barraPreenchida = document.querySelector(".barra-preenchida");
const numeroProgresso = document.querySelector(".numero-progresso");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const perguntas = [

    {
        enunciado: "Estamos em 2050! A tecnologia está presente em praticamente todos os lugares. Como você acredita que ela deve fazer parte da vida das pessoas?",

        alternativas: [
            {
                texto: "A tecnologia deve estar presente em praticamente tudo, facilitando as atividades do dia a dia.",
                afirmacao: "Você escolheu um futuro de grande inovação, no qual a tecnologia facilita as tarefas e transforma a rotina das pessoas.",
                tipo: "automatizado"
            },
            {
                texto: "A tecnologia deve ser utilizada com equilíbrio, preservando os momentos longe das telas.",
                afirmacao: "Você defendeu um futuro equilibrado, no qual a tecnologia ajuda as pessoas sem ocupar todos os espaços da vida.",
                tipo: "harmonia"
            }
        ]
    },

    {
        enunciado: "Os robôs estão cada vez mais avançados e já conseguem realizar diversas atividades. Como deveria funcionar o trabalho no futuro?",

        alternativas: [
            {
                texto: "Robôs devem assumir trabalhos repetitivos, permitindo que os humanos tenham mais tempo livre.",
                afirmacao: "Você apoiou a automação do trabalho, permitindo que máquinas realizem tarefas repetitivas e ampliem as possibilidades humanas.",
                tipo: "automatizado"
            },
            {
                texto: "Os humanos devem continuar sendo os principais responsáveis, utilizando máquinas apenas como auxiliares.",
                afirmacao: "Você valorizou a participação humana no trabalho, defendendo que a tecnologia deve complementar, e não substituir, as pessoas.",
                tipo: "essencial"
            }
        ]
    },

    {
        enunciado: "Em 2050, as pessoas podem conversar por hologramas e participar de encontros em ambientes virtuais. Como você prefere que seja a comunicação?",

        alternativas: [
            {
                texto: "Utilizar hologramas e realidade virtual para tornar a comunicação mais rápida e tecnológica.",
                afirmacao: "Você escolheu uma comunicação cada vez mais digital, aproximando pessoas por meio de experiências tecnológicas.",
                tipo: "automatizado"
            },
            {
                texto: "Preservar os encontros presenciais e as relações humanas, mesmo com os avanços digitais.",
                afirmacao: "Você valorizou as relações pessoais e mostrou que a conexão humana continua sendo importante, mesmo em um mundo tecnológico.",
                tipo: "essencial"
            }
        ]
    },

    {
        enunciado: "As empresas e os governos conseguem acessar grandes quantidades de dados pessoais. O que deveria ser feito para proteger a população?",

        alternativas: [
            {
                texto: "Permitir o uso de dados para desenvolver serviços mais eficientes e modernos.",
                afirmacao: "Você priorizou o desenvolvimento de novos serviços digitais, apostando no uso da tecnologia para facilitar a sociedade.",
                tipo: "automatizado"
            },
            {
                texto: "Criar leis rígidas para proteger a privacidade e os dados pessoais dos cidadãos.",
                afirmacao: "Você defendeu a privacidade digital, reconhecendo que a segurança e a liberdade individual devem ser respeitadas.",
                tipo: "privacidade"
            }
        ]
    },

    {
        enunciado: "Chegou a hora de tomar a última decisão! Qual deve ser a maior prioridade para construir um futuro melhor?",

        alternativas: [
            {
                texto: "Investir no desenvolvimento tecnológico, criando cidades cada vez mais modernas e automatizadas.",
                afirmacao: "Você apostou no avanço tecnológico como principal caminho para transformar o futuro da humanidade.",
                tipo: "automatizado"
            },
            {
                texto: "Equilibrar tecnologia, meio ambiente e qualidade de vida, garantindo que o progresso beneficie a todos.",
                afirmacao: "Você escolheu um desenvolvimento consciente, no qual a inovação deve caminhar junto com o bem-estar e a sustentabilidade.",
                tipo: "harmonia"
            }
        ]
    }

];

const finais = {

    harmonia: {
        titulo: "A Era da Harmonia",
        texto: "O ano é 2050. Suas decisões ajudaram a construir uma sociedade moderna e sustentável. As cidades possuem tecnologias inteligentes, mas também oferecem espaços verdes e ambientes de convivência. Os robôs auxiliam nas atividades diárias, enquanto as pessoas preservam suas relações e sua liberdade. O progresso deixou de ser apenas uma questão de inovação e passou a representar qualidade de vida. Você ajudou a construir um futuro em que tecnologia e humanidade caminham juntas."
    },

    automatizado: {
        titulo: "O Mundo Automatizado",
        texto: "O ano é 2050. A tecnologia se tornou o centro da sociedade. Robôs realizam grande parte das atividades, transportes funcionam sem motoristas e hologramas substituíram muitas formas tradicionais de comunicação. A vida ficou mais rápida e prática. Entretanto, a dependência tecnológica trouxe novos desafios: muitas pessoas passaram a ter dificuldade em viver sem dispositivos digitais. O mundo avançou, mas agora precisa descobrir como equilibrar tanta inovação."
    },

    privacidade: {
        titulo: "A Sociedade Vigiada",
        texto: "O ano é 2050. A sociedade está mais conectada do que nunca. Empresas e governos utilizam dados digitais para organizar cidades e oferecer serviços personalizados. Apesar da praticidade, a privacidade se tornou um dos maiores desafios da humanidade. Informações pessoais estão constantemente sendo compartilhadas, e os cidadãos precisam lutar pelo direito de controlar seus próprios dados. O mundo ficou mais eficiente, mas descobriu que a tecnologia também precisa de limites."
    },

    essencial: {
        titulo: "O Retorno ao Essencial",
        texto: "O ano é 2050. Depois de tantas transformações, a sociedade decidiu valorizar aquilo que a tecnologia não consegue substituir: as relações humanas. As pessoas continuam utilizando robôs, dispositivos inteligentes e recursos digitais, mas os encontros presenciais e a convivência ganharam ainda mais importância. O trabalho passou a valorizar a criatividade humana, e as comunidades investiram em qualidade de vida. O futuro mostrou que nem todo avanço precisa significar mais tecnologia."
    }

};

let atual = 0;
let historiaFinal = "";

let pontuacao = {
    harmonia: 0,
    automatizado: 0,
    privacidade: 0,
    essencial: 0
};

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    numeroProgresso.textContent = `${atual + 1} de 5`;

    barraPreenchida.style.width = `${(atual / perguntas.length) * 100}%`;

    mostraAlternativas(perguntaAtual);

}

function mostraAlternativas(perguntaAtual) {

    perguntaAtual.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("botao-alternativa");

        botao.innerHTML = `
            <span class="letra-alternativa">${indice === 0 ? "A" : "B"}</span>
            <span>${alternativa.texto}</span>
        `;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);

    });

}

function respostaSelecionada(opcaoSelecionada) {

    historiaFinal += opcaoSelecionada.afirmacao + "\n\n";

    pontuacao[opcaoSelecionada.tipo]++;

    atual++;

    mostraPergunta();

}

function mostraResultado() {

    caixaPerguntas.textContent = "O futuro foi definido!";

    caixaAlternativas.innerHTML = "";

    barraPreenchida.style.width = "100%";

    numeroProgresso.textContent = "Concluído!";

    // Descobre qual tipo de futuro recebeu mais pontos.

    let tipoFinal = "harmonia";

    let maiorPontuacao = -1;

    for (const tipo in pontuacao) {

        if (pontuacao[tipo] > maiorPontuacao) {

            maiorPontuacao = pontuacao[tipo];

            tipoFinal = tipo;

        }

    }

    const resultado = finais[tipoFinal];

    tituloResultado.textContent = resultado.titulo;

    textoResultado.innerHTML = `
        <strong>Suas escolhas ao longo da jornada:</strong>
        <br><br>
        ${historiaFinal.replace(/\n\n/g, "<br>")}
        <br>
        <strong>O futuro que você construiu:</strong>
        <br><br>
        ${resultado.texto}
    `;

    caixaResultado.style.display = "flex";

    caixaPrincipal.classList.add("finalizado");

}

function reiniciarJogo() {

    atual = 0;

    historiaFinal = "";

    pontuacao = {
        harmonia: 0,
        automatizado: 0,
        privacidade: 0,
        essencial: 0
    };

    caixaResultado.style.display = "none";

    caixaPrincipal.classList.remove("finalizado");

    mostraPergunta();

}

botaoReiniciar.addEventListener("click", reiniciarJogo);

mostraPergunta();

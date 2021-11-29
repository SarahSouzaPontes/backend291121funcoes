const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

const prova2 = {
    aluno: "Maria",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let acertos = 0
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${(prova.valor / prova.questoes.length) * acertos}`);

}
corrigirProva(prova)
corrigirProva(prova2)



const perguntas = [
    {
pergunta: "Quem é o protagonista de Jujutsu Kaisen?",
    respostas: [
      "Yuji Itadori",
      "Nobara Kugisaki",
      "Megumi Fushiguro"
    ],
    correta: 0 // A resposta correta é "Yuji Itadori"
    },
    {
pergunta: "Qual é o nome do professor que ensina Jujutsu a Yuji?",
    respostas: [
      "Gojo Satoru",
      "Kento Nanami",
      "Masamichi Yaga"
    ],
    correta: 0 // A resposta correta é "Gojo Satoru"
    },
    {
    pergunta: "Qual é o objetivo da organização Jujutsu Tech?",
    respostas: [
      "Exterminar todas as maldições",
      "Domar todas as maldições",
      "Equilibrar o mundo das maldições"
    ],
    correta: 2 // A resposta correta é "Equilibrar o mundo das maldições"
    },
    {
      pergunta: "Qual é o nome do avô de Megumi?",
    respostas: [
      "Toji Fushiguro",
      "Satoru Gojo",
      "Nobara Kugisaki"
    ],
    correta: 0 // A resposta correta é "Toji Fushiguro"
    },
    {
    pergunta: "O que é um Sukuna?",
    respostas: [
      "Uma espécie de amuleto",
      "Uma maldição poderosa",
      "Um tipo de técnica de Jujutsu"
    ],
    correta: 1 // A resposta correta é "Uma maldição poderosa"
    },
    {
  pergunta: "Qual é a especialidade de Nobara Kugisaki?",
    respostas: [
      "Manipulação de energia",
      "Uso de armas amaldiçoadas",
      "Invisibilidade"
    ],
    correta: 1 // A resposta correta é "Uso de armas amaldiçoadas"
    },
    {
    pergunta: "O que é uma maldição em Jujutsu Kaisen?",
    respostas: [
      "Um feitiço benigno",
      "Uma manifestação da negatividade humana",
      "Um tipo de criatura sobrenatural"
    ],
    correta: 1 // A resposta correta é "Uma manifestação da negatividade humana"
    },
    {
    pergunta: "Quem é o líder da escola Kyoto Jujutsu?",
    respostas: [
      "Masamichi Yaga",
      "Panda",
      "Aoi Todo"
    ],
    correta: 2 // A resposta correta é "Aoi Todo"
    },
    {
     pergunta: "Qual é a habilidade especial de Maki Zenin?",
    respostas: [
      "Manipulação do tempo",
      "Anulação de maldições",
      "Super força"
    ],
    correta: 2 // A resposta correta é "Super força"
    },
    {
  pergunta: "Qual é o nome do clube de pesquisa fundado por Megumi?",
    respostas: [
      "Clube de Estudos Amaldiçoados",
      "Clube de Pesquisa de Jujutsu",
      "Clube de Exploração Maldita"
    ],
    correta: 0 // A resposta correta é "Clube de Estudos Amaldiçoados"
    }
  ];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  } 
  
  quizItem.querySelector('dl').appendChild(dt)
}

//fazer aparecer a resposta
quizItem.querySelector('dl dt').remove()


//coloca a pergunta na tela
quiz.appendChild(quizItem)
}
import React from 'react'
import Radio from './Radio'

const perguntas = [
  {
    titulo: "Qual destes times possui menos títulos do torneio Rio-São Paulo?",
    opcoes: ['Santos', 'Flamengo', 'Portuguesa', 'Fluminense'],
    correta: 'Flamengo',
    id: 'p1'
  },
  {
    titulo: "Quais destes jogadores venceu a Copa do Mundo?",
    opcoes: ['Zico', 'Puskas', 'Nesta', 'Cristiano Ronaldo'],
    correta: 'Nesta',
    id: 'p2'
  },
  {
    titulo: "Quantos mundiais da FIFA o Santos possuí?",
    opcoes: ['1', '3', '2', '0'],
    correta: '0',
    id: 'p3'
  },
  {
    titulo: "Quem é o maior artilheiro da história das Copas?",
    opcoes: ['Klose', 'Maradona', 'Ronaldo', 'Messi'],
    correta: 'Klose',
    id: 'p4'
  },
  {
    titulo: "Que jogador marcou o gol que deu o título da Copa do Mundo para a Espanha?",
    opcoes: ['Piqué', 'Xavi', 'Sérgio Ramos', 'Iniesta'],
    correta: 'Iniesta',
    id: 'p5'
  },
]

function App() {
  const [slide, setSlide] = React.useState(0)
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: ''
  })
  const [resultado, setResultado] = React.useState('')

  const handleChange = ({target}) => {
    setRespostas({...respostas, [target.id]:target.value})
  }

  const handleClick = () => {
    if(slide < perguntas.length-1){
      setSlide(slide + 1)
    }else{
      setSlide(slide + 1)
      resultadoFinal()
    }
  }

  const resultadoFinal = () => {
    const corretas = perguntas.filter(({id, correta}) => respostas[id] === correta)
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`)
  }

  return <>
    {
      perguntas.map((pergunta, index) => {
        return <Radio 
          active={slide === index}
          id={pergunta.id}
          opcoes={pergunta.opcoes}
          titulo={pergunta.titulo}
          value={respostas[pergunta.id]}
          onChange={handleChange}
        />
      })
    }
    {resultado ? (<p>{resultado}</p>) : (<button style={{marginTop: '15px'}} onClick={handleClick}>Próximo</button>)}
  </>
}

export default App

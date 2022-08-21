import { useState } from "react";
import "./index.scss";

const questions = [
  {
    title: "Как зовут твоего парня?",
    variants: ["Вадим", "Никита", "Толик", "Василий"],
    correct: 1,
  },
  {
    title: "Сколько ему лет?",
    variants: ["21", "76", "24", "22"],
    correct: 2,
  },
  {
    title: "Откуда он родом?",
    variants: ["Варкута", "Брест", "Рогинь", "Зябровка"],
    correct: 2,
  },
  {
    title: "Какой у него рост?",
    variants: ["168см", "171см", "179см", "175см"],
    correct: 3,
  },
  {
    title: "Когда День Рождения?",
    variants: ["23 июня", "10 января", "3 марта", "25 июля"],
    correct: 3,
  },
];

function Result({ corect, setStep, setCorect }) {
  return (
    <div className="result">
      <h1>Я люблю тебя , Пипочка</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Анастасия отгадала {corect} ответа из {questions.length}
      </h2>

      <button
        onClick={() => {
          setStep(0);
          setCorect(0);
        }}
      >
        Попробовать снова
      </button>
    </div>
  );
}

function Game({ step, question, clickVariant }) {
  const percentag = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentag}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => clickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [corect, setCorect] = useState(0);
  const question = questions[step];

  const clickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index == question.correct) {
      setCorect(corect + 1);
    }
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game step={step} question={question} clickVariant={clickVariant} />
      ) : (
        <Result corect={corect} setStep={setStep} setCorect={setCorect} />
      )}
    </div>
  );
}

export default App;

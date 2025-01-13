import React, {useState, useRef } from "react";

const RefsPage = () => {
  const [text, setText] = useState("");
  const textInput = useRef(null);

  const valid = () => {
    textInput.current.focus();
  };

  const inputChange = (event) => setText((text) => event.target.value);

  return (
    <div className="outlet text">
      <h2>Refs</h2>
      <p>
        {`Refs (далее просто “ссылки”) предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().`}
      </p>

      <p>{`Есть несколько хороших примеров использования ссылок:`}</p>

      <ol className="list">
        <li>{`Управление фокусом, выделение текста.`}</li>
        <li>{"Выполнение анимаций."}</li>
        <li>
          {"Интеграция со сторонними библиотеками, взаимодействующие с DOM."}
        </li>
      </ol>
      <p>{`Управление фокусом - лучший из них:`}</p>

      <div>
        <input ref={textInput} value={text} onChange={inputChange} />
        <button onClick={() => valid()}>Click to focus</button>
      </div>

      <pre className="code">
        <code>
          {`import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test`}
        </code>
      </pre>
    </div>
  );
};

export default RefsPage;

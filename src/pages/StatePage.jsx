import { useState } from "react";

const StatePage = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const random = () => {
    setCounter(Math.floor(Math.random() * 11));
  };

  const decrement = () => {
    setCounter((counter) => (counter <= 0 ? 0 : counter - 1));
  };

  return (
    <div className="outlet text">
      <h2>State (useState)</h2>
      <p>
        {`При разработке приложений состояние (state) играет важную роль.
          Оно представляет собой данные, которые используются внутри компонента для отслеживания
          и обновления информации. Состояние позволяет компонентам быть динамичными и реагировать на
          изменения данных или взаимодействие пользователя. Простыми словами, это то, что ИЗМЕНЯЕТСЯ в
          компоненте, нежели props-ы которые неизменны.`}
      </p>

      <p>{`В React есть возможность использовать state в функциональных компонентах, путем использования хука useState.`}</p>

      <pre className="code">
        <code>
          {`import React, { useState } from 'react';

const [state, setState] = useState(initialState);`}
        </code>
      </pre>

      <p>
        {`
            Хук useState позволяет функциональным компонентам в React добавлять локальное состояние.
            Он возвращает массив с парой значений: 1) текущее значение состояния, 2) функцию для его обновления.
            `}
      </p>
      <p>{`При вызове функции обновления, React перерисует компонент с новым значением состояния.`}</p>
      <ul className="list">
        <li>{"state: текущее значение состояния."}</li>
        <li>{"setState: функция для обновления значения состояния."}</li>
      </ul>
      <p>
        {`Например, с помощью useState можно создать состояние для отслеживания текущего счетчика:`}
      </p>
      <div>
        <h3>{"Счетчик: " + counter}</h3>
        <div className="counter">
          <button className="button_counter" onClick={increment}>{"Увеличить"}</button>
          <button className="button_counter" onClick={reset}>{"Сбросить"}</button>
          <button className="button_counter" onClick={random}>{"Случайное значение"}</button>
          <button className="button_counter" onClick={decrement}>{"Уменьшить"}</button>
        </div>
      </div>

      <pre className="code">
        <code>
          {`const ParentComponent = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const random = () => {
    setCounter(Math.floor(Math.random() * 11));
  };

  const decrement = () => {
    setCounter((counter) => (counter <= 0 ? 0 : counter - 1));
  };

  return (
    <div>
      <h3>{"Счетчик: " + counter}</h3>
      <button onClick={increment}>{"Увеличить"}</button>
      <button onClick={reset}>{"Сбросить"}</button>
      <button onClick={random}>{"Случайное значение"}</button>
      <button onClick={decrement}>{"Уменьшить"}</button>
    </div>
  );
};`}
        </code>
      </pre>
      
    </div>
  );
};

export default StatePage;

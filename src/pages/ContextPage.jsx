const ContextPage = () => {
  return (
    <div className="outlet text">
      <h2>Context (useContext)</h2>
      <p>
        {`Context предоставляет способ передачи данных через дерево компонентов без явной передачи пропсов от
          родительских компонентов к дочерним. Это особенно полезно, когда необходимо передать данные глубоко в иерархии
          компонентов, избегая "просачивания" пропсов через несколько промежуточных компонентов.`}
      </p>
      <p>{`Для работы с Context в React необходимо выполнить следующие шаги:`}</p>

      <ol className="list">
        <li>
          {`Создание контекста: создать контекст с помощью функции createContext() из модуля react`}
          <pre className="code">
            <code>
              {`// MyContext.js
import React from 'react';

const MyContext = React.createContext();

export default MyContext;`}
            </code>
          </pre>
        </li>
        <li>
          {`Предоставить значение контекста внутри компонента-провайдера.
            Компонент-провайдер обертывает дерево компонентов, которым нужен доступ к контексту.`}
          <pre className="code">
            <code>
              {`// App.js
import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;`}
            </code>
          </pre>
        </li>
        <li>
          {
            "Использовать хук useContext внутри функционального компонента, чтобы получить доступ к значению контекста"
          }
          <pre className="code">
            <code>
              {`// ComponentA.js
import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`}
            </code>
          </pre>
        </li>
      </ol>

      <p>{`Context  предоставляет способ передачи данных через компоненты без использования пропсов.
      Он позволяет легко передавать данные во всем дереве компонентов и упрощает управление состоянием и данными приложения.`}</p>

      <p>{`Context является инструментом, но его следует использовать с умом.
      Перегрузка контекстом всего приложения может привести к усложнению и запутыванию кода.`}</p>

      <b>{`Рекомендуется использовать контекст там, где он действительно необходим, например,
      для глобального состояния приложения или темизации (dark||light мод).`}</b>
    </div>
  );
};

export default ContextPage;

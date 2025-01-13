const FragmentPage = () => {
  return (
    <div className="outlet text">
      <h2>Fragment</h2>
      <p>
        {`С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.

        Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:`}
      </p>

      <pre className="code">
        <code>
          {`import React, { Fragment } from 'react';

//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>`}
        </code>
      </pre>

      <p>{`Существует сокращенная запись (импортировать не нужно) - недостаток сокращенной записи: нельзя использовать атрибуты, например className или  key.`}</p>

      <pre className="code">
        <code>
          {`import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < className="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>`}
        </code>
      </pre>
    </div>
  );
};

export default FragmentPage;

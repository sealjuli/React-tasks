const ComponentsPage = () => {
  return (
    <div className="outlet text">
      <h2>Components</h2>
      <p>
        {`Компоненты - это небольшие, переиспользуемые элементы пользовательского интерфейса, которые объединены вместе, чтобы создать более крупные приложения.
        Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности.`}
      </p>
      <p>{`Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
      React компоненты могут быть классовыми или функциональными.`}</p>
      <p>{"Пример объявления классового компонента в React:"}</p>
      <pre className="code">
        <code>
          {`class MyComponent extends React.Component {
    render() {
        return <div>Hello, Redev!</div>;
    }
}

export default MyComponent;`}
        </code>
      </pre>

      <p>{"Пример объявления функционального компонента в React:"}</p>
      <pre className="code">
        <code>
          {`const MyComponent = () => {
  return <div>Hello, Redev!</div>;
}
export default MyComponent;`}
        </code>
      </pre>

      <p>
        {`Оба примера создают компонент, который отображает текст "Hello, Redev!". Разница заключается в том, что
        классовый компонент наследуется от базового класса React.Component и имеет доступ к дополнительным функциям,
        таким как состояние и методы жизненного цикла.`}
      </p>

      <p>
        {
          "Компонента должна себя вести как чистая функция. “Чистой” называется функция, которая:"
        }
      </p>
      <ul className="list">
        <li>
          {`Для одинаковых входных данных всегда возвращает один результат.`}
        </li>
        <li>
          {`Не имеет побочных эффектов (то есть не изменяет внешние состояния).`}
        </li>
        <li>{`Не зависит от внешних состояний.`}</li>
      </ul>
    </div>
  );
};

export default ComponentsPage;
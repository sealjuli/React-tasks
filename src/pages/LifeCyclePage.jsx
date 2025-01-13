const LifeCyclePage = () => {
  return (
    <div className="outlet text">
      <h2>LifeCycle (useEffect)</h2>
      <p>
        {`LifeCycle в React - это набор этапов, через которые компонент проходит, чтобы правильно работать на странице. `}
      </p>

      <p>{`Методы жизненного цикла в React можно разделить на следующие группы:`}</p>

      <ol className="list">
        <li>{"Методы монтирования (Mounting Methods):"}</li>
        <ul>
          <li>constructor()</li>
          <li>render()</li>
          <li>componentDidMount()</li>
        </ul>
        <li>{"Методы обновления (Updating Methods):"}</li>
        <ul>
          <li>shouldComponentUpdate()</li>
          <li>render()</li>
          <li>componentDidUpdate()</li>
        </ul>
        <li>{"Методы размонтирования (Unmounting Methods):"}</li>
        <ul>
          <li>componentWillUnmount()</li>
        </ul>
        <li>{"Методы обработки ошибок (Error Handling Methods):"}</li>
        <ul>
          <li>componentDidCatch()</li>
        </ul>
      </ol>

      <p>
        {`
            useEffect - это хук в React, предназначенный для работы с методами жизненного цикла в функциональных компонентах.
            По сути вот ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного цикла.
            `}
      </p>

      <pre className="code">
        <code>
          {`// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, [])

// Отработает как componentDidUpdate (но есть прикол. Покажу ниже)
useEffect(() => { console.log("componentDidUpdate") }, [dependency])

// Отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") })

 // Отработает как componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount')
}, [])`}
        </code>
      </pre>
    </div>
  );
};

export default LifeCyclePage;

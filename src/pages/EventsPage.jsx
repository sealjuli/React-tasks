const EventsPage = () => {
  return (
    <div className="outlet text">
      <h2>Events</h2>
      <p>
        {`В React события (events) являются важной частью взаимодействия с пользователем. Они позволяют обрабатывать действия пользователя, такие как клики, наведение, отправка формы и другие.  `}
      </p>

      <p>{`Вот пять наиболее часто используемых событий в React и примеры их применения:`}</p>

      <ol className="list">
        <li>
          {`onClick (Клик): возникает при клике на элементе. Это одно из наиболее распространенных событий в React.`}
          <pre className="code">
            <code>
              {`const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}`}
            </code>
          </pre>
        </li>
        <li>
          {
            "onChange (Изменение): возникает при изменении значения элемента формы, такого как текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio)."
          }
          <pre className="code">
            <code>
              {`const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
    или
    <input type="text" onChange={event => handleChange(event)} />
  );
}`}
            </code>
          </pre>
        </li>
        <li>
          {
            "onSubmit (Отправка формы): возникает при отправке формы. Оно позволяет выполнить действия, связанные с отправкой данных формы на сервер."
          }
          <pre className="code">
            <code>
              {`const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );`}
            </code>
          </pre>
        </li>
        <li>
          {
            "onMouseOver (Наведение курсора): возникает, когда курсор наводится на элемент. Оно может использоваться для отображения дополнительной информации или изменения состояния компонента при наведении."
          }
          <pre className="code">
            <code>
              {`const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}`}
            </code>
          </pre>
        </li>
        <li>
          {
            "onKeyDown (Нажатие клавиши): возникает при нажатии клавиши на клавиатуре. Оно позволяет реагировать на определенные комбинации клавиш или выполнять действия на основе нажатых клавиш."
          }

          <pre className="code">
            <code>
              {`const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}`}
            </code>
          </pre>
        </li>
      </ol>
    </div>
  );
};

export default EventsPage;

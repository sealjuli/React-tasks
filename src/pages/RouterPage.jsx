const RouterPage = () => {
  return (
    <div className="outlet text">
      <h2>Router</h2>
      <p>
        {`Роутинг играет важную роль в разработке веб-приложений, обеспечивая навигацию и
        переходы между различными страницами и разделами приложения.`}
      </p>

      <p>
        {`Основная цель роутинга в веб-приложениях заключается в том, чтобы позволить пользователям
        перемещаться по различным частям приложения БЕЗ ПЕРЕЗАГРУЗКИ страницы. Вместо того, чтобы каждый раз
        отправлять запрос на сервер и загружать новую страницу, роутинг позволяет динамически обновлять только
        необходимые компоненты или данные в соответствии с выбранным маршрутом.`}
      </p>
      <p>
        {`Это создает более плавный пользовательский опыт, уменьшает время загрузки и позволяет разработчикам
        создавать богатые и интерактивные приложения.`}
      </p>
      <p>
        {`
        Кроме того, роутинг обеспечивает возможность передачи параметров через URL, что позволяет приложению
        динамически адаптироваться к разным условиям и сценариям использования. Например, приложение может отображать
        разные данные или компоненты на основе параметров маршрута, таких как идентификатор пользователя или идентификатор записи.`}
      </p>

      <p>{`ОСНОВНЫЕ КОМПОНЕНТЫ, которые присутствуют в react-router-dom v6:`}</p>

      <ol className="list">
        <li>
          {`BrowserRouter: компонент, который оборачивает ваше приложение и предоставляет
          контекст для маршрутизации. Он используется для настройки основного маршрутизатора в приложении.`}

          <pre className="code">
            <code>
              {`import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);`}
            </code>
          </pre>
        </li>
        <li>
          {`Routes: компонент, который содержит определения маршрутов и соответствующих им компонентов.
          Вы определяете маршруты внутри компонента Routes, используя элемент Route.`}
        </li>
        <li>
          {`Route: Компонент Route используется для определения отдельных маршрутов и связанных с ними компонентов.
            Вы можете определить маршруты с помощью элемента Route, указывая путь URL и связанный с ним компонент,
            который будет отображаться при совпадении маршрута.`}
          <pre className="code">
            <code>
              {`import { Routes, Route } from 'react-router-dom';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>`}
            </code>
          </pre>
        </li>

        <li>
          {`Link и NavLink: Компоненты Link и NavLink используются для создания ссылок для навигации между маршрутами.
            Они работают аналогично версии 5, позволяя пользователю переходить к соответствующим маршрутам без перезагрузки
            страницы. NavLink также предоставляет возможности для стилизации активных ссылок и текущего маршрута.`}
          <pre className="code">
            <code>
              {`import { NavLink, Link } from 'react-router-dom';

// ...

<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>
<Link to="/contact">Контакты</Link>

// ...

<NavLink to="/" activeClassName="active">Главная</NavLink>
<NavLink to="/about" activeClassName="active">О нас</NavLink>
<NavLink to="/contact" activeClassName="active">Контакты</NavLink>`}
            </code>
          </pre>
        </li>

        <li>
          {`Outlet: Компонент Outlet является контейнером, в котором будут отображаться компоненты,
            связанные с соответствующими маршрутами. Он заменяет Switch из версии 5 и автоматически выбирает
            и рендерит компонент, соответствующий текущему маршруту.`}
          <pre className="code">
            <code>
              {`import { Outlet } from 'react-router-dom';

// ...

const App = () => {
  return (
    <div>
      <h1>Мое приложение</h1>
      <nav>
        {/* Навигационные ссылки */}
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};`}
            </code>
          </pre>
        </li>

        <li>
          {`useNavigate: Хук useNavigate используется для программной навигации между маршрутами.
            Он позволяет вам переходить к другим маршрутам из компонентов или обработчиков событий.`}
          <pre className="code">
            <code>
              {`import { useNavigate } from 'react-router-dom';

// ...

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Домашняя страница</h1>
      <button onClick={handleClick}>Перейти к странице О нас</button>
    </div>
  );
};`}
            </code>
          </pre>
        </li>

        <li>
          {`useParams: Хук useParams используется для получения параметров маршрута, переданных через URL.
            Он позволяет вам извлекать и использовать динамические данные из пути маршрута.`}
          <pre className="code">
            <code>
              {`import { useParams } from 'react-router-dom';

// ...

const UserProfile = () => {
  const params = useParams();

  return (
    <div>
      <h1>Профиль пользователя: {params.username}</h1>
    </div>
  );
};`}
            </code>
          </pre>
        </li>

        <li>
          {`useLocation: Хук useLocation используется для получения информации о текущем URL.
            Он предоставляет доступ к объекту location, который содержит информацию о текущем пути, параметрах и других деталях URL.`}
          <pre className="code">
            <code>
              {`import { useLocation } from 'react-router-dom';

// ...

const Page = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Текущий URL: {location.pathname}</h1>
    </div>
  );
};`}
            </code>
          </pre>
        </li>
      </ol>

      <p>{`Помимо основных компонентов, React Router Dom v6 предлагает и другие возможности, такие как параметры маршрута,
      вложенные маршруты, защита маршрутов и многое другое.`}</p>
    </div>
  );
};

export default RouterPage;

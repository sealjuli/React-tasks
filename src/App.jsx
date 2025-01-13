import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VirtualDOMPage from "./pages/VirtualDOMPage";
import ComponentsPage from "./pages/ComponentsPage";
import PropsPage from "./pages/PropsPage";
import StatePage from "./pages/StatePage";
import LifeCyclePage from "./pages/LifeCyclePage";
import EventsPage from "./pages/EventsPage";
import RefsPage from "./pages/RefsPage";
import FragmentPage from "./pages/FragmentPage";
import KeyPage from "./pages/KeyPage";
import ReactMemoPage from "./pages/ReactMemoPage";
import UseMemoPage from "./pages/UseMemoPage";
import ContextPage from "./pages/ContextPage";
import RouterPage from "./pages/RouterPage";
import FormPage from "./pages/FormPage";
import "./App.css";

const App = () => {
  return (
    <div className="parent_container">
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/virtualDOM"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          VirtualDOM
        </NavLink>
        <NavLink
          to="/components"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Components
        </NavLink>

        <NavLink
          to="/props"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Props
        </NavLink>

        <NavLink
          to="/state"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          State (useState)
        </NavLink>

        <NavLink
          to="/lifeCycle"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          LifeCycle (useEffect)
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Events
        </NavLink>

        <NavLink
          to="/refs"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Refs
        </NavLink>

        <NavLink
          to="/fragment"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Fragment
        </NavLink>

        <NavLink
          to="/key"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Key
        </NavLink>

        <NavLink
          to="/reactmemo"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          React.memo
        </NavLink>

        <NavLink
          to="/useMemo"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          useMemo
        </NavLink>

        <NavLink
          to="/context"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Context
        </NavLink>

        <NavLink
          to="/router"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Router
        </NavLink>

        <NavLink
          to="/form"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Forms
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/virtualDOM" element={<VirtualDOMPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/props" element={<PropsPage />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/lifeCycle" element={<LifeCyclePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/refs" element={<RefsPage />} />
        <Route path="/fragment" element={<FragmentPage />} />
        <Route path="/key" element={<KeyPage />} />
        <Route path="/reactmemo" element={<ReactMemoPage />} />
        <Route path="/useMemo" element={<UseMemoPage />} />
        <Route path="/context" element={<ContextPage />} />
        <Route path="/router" element={<RouterPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;

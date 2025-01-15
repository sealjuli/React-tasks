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
          to="/React-tasks/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/React-tasks/virtualDOM"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          VirtualDOM
        </NavLink>
        <NavLink
          to="/React-tasks/components"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Components
        </NavLink>

        <NavLink
          to="/React-tasks/props"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Props
        </NavLink>

        <NavLink
          to="/React-tasks/state"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          State (useState)
        </NavLink>

        <NavLink
          to="/React-tasks/lifeCycle"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          LifeCycle (useEffect)
        </NavLink>

        <NavLink
          to="/React-tasks/events"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Events
        </NavLink>

        <NavLink
          to="/React-tasks/refs"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Refs
        </NavLink>

        <NavLink
          to="/React-tasks/fragment"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Fragment
        </NavLink>

        <NavLink
          to="/React-tasks/key"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Key
        </NavLink>

        <NavLink
          to="/React-tasks/reactmemo"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          React.memo
        </NavLink>

        <NavLink
          to="/React-tasks/useMemo"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          useMemo
        </NavLink>

        <NavLink
          to="/React-tasks/context"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Context
        </NavLink>

        <NavLink
          to="/React-tasks/router"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Router
        </NavLink>

        <NavLink
          to="/React-tasks/form"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Forms
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
      <Routes>
        <Route path="/React-tasks" element={<HomePage />} />
        <Route path="/React-tasks/virtualDOM" element={<VirtualDOMPage />} />
        <Route path="/React-tasks/components" element={<ComponentsPage />} />
        <Route path="/React-tasks/props" element={<PropsPage />} />
        <Route path="/React-tasks/state" element={<StatePage />} />
        <Route path="/React-tasks/lifeCycle" element={<LifeCyclePage />} />
        <Route path="/React-tasks/events" element={<EventsPage />} />
        <Route path="/React-tasks/refs" element={<RefsPage />} />
        <Route path="/React-tasks/fragment" element={<FragmentPage />} />
        <Route path="/React-tasks/key" element={<KeyPage />} />
        <Route path="/React-tasks/reactmemo" element={<ReactMemoPage />} />
        <Route path="/React-tasks/useMemo" element={<UseMemoPage />} />
        <Route path="/React-tasks/context" element={<ContextPage />} />
        <Route path="/React-tasks/router" element={<RouterPage />} />
        <Route path="/React-tasks/form" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;

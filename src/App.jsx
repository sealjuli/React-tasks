import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifecycleComponentClass from "./components/ChildComponent";
import LifecycleComponentFunc from "./components/SiblingComponent";

const ParentComponent = () => {
  return (
    <div className="parent-container">
      <LifecycleComponentClass />
      <LifecycleComponentFunc />
    </div>
  );
};

export default ParentComponent;

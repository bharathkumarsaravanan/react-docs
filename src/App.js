import './App.css';
import UseActionStateHook from './hooks/UseActionStateHook/UseActionStateHook';
import UseCallBackHook from './hooks/UseCallBackHook/UseCallBackHook';
import UseContextHook from './hooks/UseContextHook/UseContextHook';
import UseEffectHook from './hooks/UseEffectHook/UseEffectHook';
import UseDebugValueHook from './hooks/UseDebugValueHook/UseDebugValueHook';
import UseIdHook from './hooks/UseIdHook/UseIdHook';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <UseIdHook />
    </div>
  );
}

export default App;

import './App.css';
import UseActionStateHook from './hooks/UseActionState/UseActionStateHook';
import UseCallBackHook from './hooks/UseCallBackHook/UseCallBackHook';
import UseContextHook from './hooks/UseContext/UseContextHook';
import UseEffectHook from './hooks/UseEffect/UseEffectHook';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <UseEffectHook />
    </div>
  );
}

export default App;

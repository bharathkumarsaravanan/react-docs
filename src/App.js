import './App.css';
import UseActionStateHook from './hooks/UseActionStateHook/UseActionStateHook';
import UseCallBackHook from './hooks/UseCallBackHook/UseCallBackHook';
import UseContextHook from './hooks/UseContextHook/UseContextHook';
import UseEffectHook from './hooks/UseEffectHook/UseEffectHook';
import UseDebugValueHook from './hooks/UseDebugValueHook/UseDebugValueHook';
import UseIdHook from './hooks/UseIdHook/UseIdHook';
import UseMemoHook from './hooks/UseMemoHook/UseMemoHook';
import UseFormActionHook from './hooks/UseFormStatusHook/UseFormStatus';
import UseTransitionHook from './hooks/UseTransitionHook/UseTransitionHook';
import UseDeferredValueHook from './hooks/UseDeferredValueHook /UseDeferredValueHook';
import UseStateHook from './hooks/UseStateHook/UseStateHook';
import UseRefHook from './hooks/UseRefHook/UseRefHook';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <UseRefHook />
    </div>
  );
}

export default App;

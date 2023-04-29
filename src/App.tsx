import MessagesDisplay from "./components/MessagesDisplay";
import CodeDisplay from "./components/CodeDisplay";

function App() {
  return (
    <div className="app">
      <MessagesDisplay />
      <input />
      <CodeDisplay />
      <div className="button-container">
        <button id="get-query">Get Query!</button>
        <button id="clear-shat">Clear Chat</button>
      </div>
    </div>
  );
}

export default App;

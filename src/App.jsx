import Calculator from "./components/Calculator";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <div id="user-input">
        <UserInput />
        <UserInput />
        <UserInput />
        <UserInput />
      </div>
      <Result />
    </>
  );
}

export default App;

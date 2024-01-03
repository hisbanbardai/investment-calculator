import Calculator from "./components/Calculator";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <div id="user-input">
        <UserInput>INITIAL INVESTMENT</UserInput>
        <UserInput>ANNUAL INVESTMENT</UserInput>
        <UserInput>EXPECTED RETURN</UserInput>
        <UserInput>DURATION</UserInput>
      </div>
      <Result />
    </>
  );
}

export default App;

import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  const isValidData = duration >= 1;

  function handleInitialInvestmentInputChange(event) {
    setInitialInvestment(Number(event.target.value));
  }

  function handleAnnualInvestmentInputChange(event) {
    setAnnualInvestment(Number(event.target.value));
  }

  function handleExpectedReturnInputChange(event) {
    setExpectedReturn(Number(event.target.value));
  }

  function handleDurationInputChange(event) {
    setDuration(Number(event.target.value));
  }

  return (
    <>
      <div id="user-input">
        <UserInput
          value={initialInvestment}
          onChange={handleInitialInvestmentInputChange}
        >
          INITIAL INVESTMENT
        </UserInput>
        <UserInput
          value={annualInvestment}
          onChange={handleAnnualInvestmentInputChange}
        >
          ANNUAL INVESTMENT
        </UserInput>
        <UserInput
          value={expectedReturn}
          onChange={handleExpectedReturnInputChange}
        >
          EXPECTED RETURN
        </UserInput>
        <UserInput value={duration} onChange={handleDurationInputChange}>
          DURATION
        </UserInput>
      </div>
      {!isValidData && (
        <p className="center">Please enter a duration greater than 0.</p>
      )}
      {isValidData && (
        <Result
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          expectedReturn={expectedReturn}
          duration={duration}
        />
      )}
    </>
  );
}

export default App;

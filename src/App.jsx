import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

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

  console.log(initialInvestment, annualInvestment, expectedReturn, duration);

  // const results = calculateInvestmentResults({
  //   initialInvestment,
  //   annualInvestment,
  //   expectedReturn,
  //   duration,
  // });

  // console.log(duration);

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
      <Result
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </>
  );
}

export default App;

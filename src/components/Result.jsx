import { calculateInvestmentResults } from "../util/investment";

export default function Result({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  // console.log("result", result);

  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  let totalInterest = 0;
  let investedCapital = initialInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(({ year, interest, valueEndOfYear, annualInvestment }) => {
          totalInterest += interest;
          investedCapital += annualInvestment;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{Math.round(valueEndOfYear)}</td>
              <td>{Math.round(interest)}</td>
              <td>{Math.round(totalInterest)}</td>
              <td>{Math.round(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

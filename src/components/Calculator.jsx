export default function Calculator() {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="">
          INITIAL INVESTMENT
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="">
          ANNUAL INVESTMENT
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="">
          EXPECTED RETURN
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="">
          DURATION
          <input type="number" />
        </label>
      </div>
    </div>
  );
}

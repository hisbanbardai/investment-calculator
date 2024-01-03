export default function Calculator() {
  return (
    <div id="user-input">
      <div className="input-group">
        INITIAL INVESTMENT
        <label htmlFor="">
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        ANNUAL INVESTMENT
        <label htmlFor="">
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        EXPECTED RETURN
        <label htmlFor="">
          <input type="number" />
        </label>
      </div>
      <div className="input-group">
        DURATION
        <label htmlFor="">
          <input type="number" />
        </label>
      </div>
    </div>
  );
}

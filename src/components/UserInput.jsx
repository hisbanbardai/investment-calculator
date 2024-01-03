export default function UserInput({ children }) {
  return (
    <div className="input-group">
      <label htmlFor="">
        {children}
        <input type="number" />
      </label>
    </div>
  );
}

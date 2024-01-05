export default function UserInput({ children, value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor="">
        {children}
        <input type="number" onChange={onChange} value={value} required />
      </label>
    </div>
  );
}

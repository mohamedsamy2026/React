export default function InputVailed({
  label,
  type,
  value,
  required,
  handleChange
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => {
          (event.tahandleChangerget.value)
        }}
        required={required}
      />
    </div>
  );
}

const Textfield = ({
  label,
  onChange,
  id,
  value,
  placeholder,
  required = false,
  type = "text",
}) => {
  return (
    <div className={"flex gap-3 flex-col w-[400px]"}>
      <label htmlFor={id}>{label}</label>
      <input
        className="border border-gray-600 rounded p-2"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default Textfield;

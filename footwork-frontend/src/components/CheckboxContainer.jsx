const CheckboxContainer = ({ 
    label,
    checked = false, 
    onChange,
    id,
}) => {
  return (
    <div className="checkboxContainer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        htmlFor={id}
        className={checked ? "checked" : ""}
        >
        {label}
      </label>
    </div>
  );
};

export default CheckboxContainer;

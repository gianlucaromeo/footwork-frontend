const CheckboxContainer = ({ 
    label = "", 
    checked = false, 
    onChange = () => {} 
}) => {
  return (
    <div className="checkboxContainer">
      <input
        type="checkbox"
        id="customCheckbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)} // Pass the checked value back to the parent
      />
      <label
        htmlFor="customCheckbox"
        className={checked ? "checked" : ""}
        >
        {label}
      </label>
    </div>
  );
};

export default CheckboxContainer;

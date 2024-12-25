import Label from "./Label";

const Input = ({ type, placeholder, value, onChange, name,label, description }) => {
  return (
    <div className="w-[300px]">
      <Label text={label} />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full p-2 border rounded"
      />
      <Label text={description} />
    </div>
  );
};

export default Input;

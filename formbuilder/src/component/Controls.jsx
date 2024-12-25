import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addField } from "../redux/slices/form";

const Controls = () => {
  const formElements = useSelector((state) => state.form.formElements);
  console.log("formElement", formElements);
  const dispatch = useDispatch();

  const handleAddField = (type) => {
    const newField = {
      id: `${type}-${Date.now()}`,
      type,
      label: `${type}`,
      description: `${type} enter correct input field`,
      name: `${type}`,
      placeholder: `Enter your ${type}`,
      className: `${type}`,
      required: false,
    };
    dispatch(addField(newField));
  };

  const butn = ["Text", "Number", "Email", "CheckBox","Password"];

  return (
    <div className="h-96 max-h-screen w-full sm:w-72 md:w-80 lg:w-96 bg-slate-950 text-white p-4 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 ">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
        {butn.map((element, index) => (
          <div
            onClick={() => handleAddField(element)}
            key={index}
            className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded-full hover:bg-gray-800 cursor-pointer w-[100px]"
          >
            <span className="text-sm">{element}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Controls;

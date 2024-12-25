import React, { useState } from "react";
import FormElement from "./FormElement";
import { useDispatch, useSelector } from "react-redux";
import { addSubField, removeField, removeSubField } from "../redux/slices/form";
import { FiPlus } from "react-icons/fi";

const FormBuilder = () => {
  const formElements = useSelector((state) => state.form.formElements);
  console.log("formElement", formElements);
  const dispatch = useDispatch();


  const handleRemoveField = (id) => {
    dispatch(removeField(id));
  };
  const handleRemoveSubField = (parentId, childId) => {
    dispatch(removeSubField({ fieldId: parentId, subFieldId: childId }));
  };

  // Change isDropdownOpen to an object where each key represents a unique field ID
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific dropdown state based on ID
    }));
  };

  const options = ["Text", "Number", "Email","Password"];



  return (
   
      <div className="flex-wrap gap-4 justify-center items-center w-[600px] max-w-screen-md mx-auto ">
        {formElements.map((element, index) => (
          <div key={index} className="flex gap-2 flex-wrap w-full sm:w-auto mb-2">
            <FormElement
              element={element}
              elementtype={element.type}
              elementlabel={element.label}
              elementid={element.id}
              formElements={formElements}
              handleRemoveField={handleRemoveField}
              lenght={element.subFields?.length || 0}
              index={index} // Pass index for drag-and-drop
            />
            {(element.subFields || []).map((sub) => (
              <FormElement
                key={sub.id}
                elementid={element.id}
                childId={sub.id}
                elementlabel={sub.label}
                removeSubField={handleRemoveSubField}
              />
            ))}
            {element.subFields?.length === 2 ? (
              ""
            ) : (
              <div>
                <button
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
                  onClick={() => toggleDropdown(element.id)} 
                >
                  <FiPlus className="text-white w-5 h-5" />
                </button>
              </div>
            )}
            {openDropdowns[element.id] && (
              <div className="absolute inset-auto w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      dispatch(
                        addSubField({
                          fieldId: element.id,
                          subFieldData: {
                            type: option,
                            label: option,
                            placeholder: `Enter your ${option}`,
                            description: `Enter${option} details`,
                            required: false,
                          },
                        })
                      ); setOpenDropdowns((prev) => ({
                        ...prev,
                        [element.id]: false, 
                      }));
                    }}
                    className="block w-full px-4 py-2 text-white hover:bg-gray-700"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
   
  );
};

export default FormBuilder;

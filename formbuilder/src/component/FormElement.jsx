import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  updateField, updateFormElements, updateSubField } from "../redux/slices/form";
import { FiEdit2,  FiTrash } from 'react-icons/fi'

import EditModal from "./EditModel";
import Label from "./Label";

const FormElement = ({
  element,
  handleRemoveField,
  elementlabel,
  elementtype,
  elementid,
  index,
  childId,
  removeSubField,

  lenght,
}) => {
  const formElements = useSelector((state) => state.form.formElements);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    label: elementlabel,
    placeholder: elementlabel,
    type: elementtype,
    discription:"",
    name:""
  });

  // Handle drag-and-drop reordering
  const handleDragStart = (e) => {
    e.dataTransfer.setData("draggedIndex", index);
  };

  const handleDrop = (e) => {
    const draggedIndex = Number(e.dataTransfer.getData("draggedIndex"));
    if (draggedIndex === index) return;

    const updatedFormElements = [...formElements];
    const [draggedItem] = updatedFormElements.splice(draggedIndex, 1); // Remove dragged item
    updatedFormElements.splice(index, 0, draggedItem); // Insert at target index

    dispatch(updateFormElements(updatedFormElements)); // Update the form elements array
  };

 
 

 
const handleSaveChangesField = () => {
  dispatch(
    updateField({
      id: elementid, // Pass the ID of the field to update
      updates: { ...formData }, // Pass all updated properties from formData
    })
  );
  setIsModalOpen(false); // Close the modal
};
const handleSaveChangesSubField = () => {
  dispatch(
    updateSubField({
      fieldId: elementid,
      subFieldId: childId,
      updates: { ...formData },
    })
  );
  setIsModalOpen(false); // Close the modal
};


  console.log(lenght);
  return (
    <>
      <div
        className="flex items-center  justify-between bg-gray-800 border border-gray-700 rounded-lg px-4 py-1 "
        draggable
        onDragStart={handleDragStart}
        onDragOver={(e) => e.preventDefault()} // Allow drop
        onDrop={handleDrop}
      >
        <div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg px-4 py-0 w-auto">
          <div>
            <Label text={elementlabel} />
          </div>

          <div className="flex items-center space-x-2">
            <button
              className="p-1 rounded-full hover:bg-gray-700"
              onClick={() => setIsModalOpen(true)} // Open the edit modal
            >
              <FiEdit2
                className="text-white w-5 h-5"
                onClick={() => setIsModalOpen(true)}
              />
            </button>

            <button
              className="p-1 rounded-full hover:bg-gray-700"
              onClick={
                handleRemoveField
                  ? () => handleRemoveField(elementid)
                  : () => removeSubField(elementid, childId)
              }
            >
              <FiTrash className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleSaveChanges={
          childId ? handleSaveChangesSubField : handleSaveChangesField
        }
      />
    </>
  );
};

export default FormElement;

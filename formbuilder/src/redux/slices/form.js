import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formElements: [],
  },
  reducers: {
    addField: (state, action) => {
      state.formElements.push({
        id: action.payload.id,
        type: action.payload.type,
        label: action.payload.label,
        discription: action.payload.description,
        placeholder:action.payload.placeholder,
        required: false,
        subFields: [],
      });
    },
    removeField: (state, action) => {
      state.formElements = state.formElements.filter(
        (field) => field.id !== action.payload
      );
    },
    addSubField: (state, action) => {
      const { fieldId, subFieldData } = action.payload;

      // Locate the field by its ID
      const field = state.formElements.find((field) => field.id === fieldId);
      if (field) {
        field.subFields.push({
          id: `${fieldId}-${field.subFields.length + 1}`,
          type: subFieldData.type || "default",
          label: subFieldData.label || "Subfield Label",
          description: subFieldData.description || "",
          placeholder: subFieldData.placeholder ||` Enter accourding to your ${subFieldData.type}` ,
          required: subFieldData.required || false,
        });
      }
    },

    removeSubField: (state, action) => {
      const { fieldId, subFieldId } = action.payload;
      const field = state.formElements.find((field) => field.id === fieldId);
      if (field) {
        field.subFields = field.subFields.filter(
          (subField) => subField.id !== subFieldId
        );
      }
    },
    updateField: (state, action) => {
      const { id, updates } = action.payload; // 'updates' will contain the updated properties
      const field = state.formElements.find((field) => field.id === id);
      if (field) {
        Object.assign(field, updates); // Update field properties dynamically
      }
    },

    updateSubField: (state, action) => {
      const { fieldId, subFieldId, updates } = action.payload;
       console.log(updates)
      // Locate the field by its ID
      const field = state.formElements.find((field) => field.id === fieldId);
      if (field) {
        const subField = field.subFields?.find(
          (subField) => subField.id === subFieldId
        );
        if (subField) {
          Object.assign(subField, updates);
        }
      }
    },

    updateFormElements: (state, action) => {
      state.formElements = action.payload; // This replaces the entire formElements array
    },
  },
});

export const {
  addField,
  removeField,
  addSubField,
  removeSubField,
  updateField,
  updateFormElements,
  updateSubField,
} = formSlice.actions;

export default formSlice.reducer;

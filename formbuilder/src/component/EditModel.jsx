import React from "react";

const EditModal = ({
  isOpen,
  onClose,
  formData,
  setFormData,
  handleSaveChanges,
}) => {
  if (!isOpen) return null; // Render nothing if the modal is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Field</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm">Label</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border rounded bg-gray-800 text-white"
              value={formData.label}
              onChange={(e) =>
                setFormData({ ...formData, label: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm">Description</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border rounded bg-gray-800 text-white"
              value={formData. discription}
              onChange={(e) =>
                setFormData({ ...formData, discription: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm">Placeholder</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border rounded bg-gray-800 text-white"
              value={formData.placeholder}
              onChange={(e) =>
                setFormData({ ...formData, placeholder: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm">className</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border rounded bg-gray-800 text-white"
              value={formData.className}
              onChange={(e) =>
                setFormData({ ...formData, className: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm">Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border rounded bg-gray-800 text-white"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.required}
                  onChange={(e) =>
                    setFormData({ ...formData, required: e.target.checked })
                  }
                />
                <span>Required</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.disabled}
                  onChange={(e) =>
                    setFormData({ ...formData, disabled: e.target.checked })
                  }
                />
                <span>Disabled</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-700 rounded text-white"
            onClick={onClose} // Close the modal
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 rounded text-white"
            onClick={handleSaveChanges} // Save changes
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

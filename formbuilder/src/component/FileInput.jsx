import React from "react";
import Input from "./Input";
import Label from "./Label";

const FileInput = () => {
  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log("Selected files:", files);
  };

  return (
    <div className="file-input">
      <label className="block text-sm font-medium">Upload File</label>
      <Label/>
      <input
        type="file"
        onChange={handleFileChange}
        className="mt-1 block w-full p-2 border rounded"
        multiple
      />
      <Input 
        type={"file"}
        onChange={handleFileChange}
        multiple
      />
    </div>
  );
};

export default FileInput;

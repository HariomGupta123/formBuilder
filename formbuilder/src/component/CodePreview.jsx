const CodePreview = ({ formElements }) => {
  const generateCode = () => {
    return `import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  ${formElements
    .map((el) => {
      const ssub = el.subFields
        .map(
          (sub) => `  ${sub.id}: z.string().min(1, '${sub.label} is required')`
        )
        .join(",\n"); // Join subField schemas with commas and newlines

      const ss = `  ${el.id}: z.string().min(1, '${el.label} is required')`; // Main element schema

      return `${ss},\n${ssub}`; // Combine the main schema with subField schemas
    })
    .join(",\n")}
});

const GeneratedForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => console.log(data);
  console.log("generated code", formElements);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      ${formElements
        .map((el) => {
          const renderElement = (element) => {
            // Render the main element
           
            const parent = `<div>
              <label>${element.label}</label>
              <Controller
                name="${element.id}"
                control={control}
                render={({ field }) => <input {...field} placeholder="${element.label}" />}
              />
            </div>`;

            // Check if it has children (subFields)
            const children =
              element.subFields && element.subFields.length > 0
                ? element.subFields
                    .map((child) => renderElement(child)) // Recursive rendering for subFields
                    .join("\n")
                : "";

            return parent + children; // Combine parent and subFields
          };

          return renderElement(el);
        })
        .join("\n")}
      <button type="submit">Submit</button>
    </form>
  );
};

export default GeneratedForm;
`;
  };

  return (
    <pre className="generated-code p-10 text-white ">{generateCode()}</pre>
  );
};

export default CodePreview;

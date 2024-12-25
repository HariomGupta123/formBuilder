import EmailInput from "./Email";
import Input from "./Input";
import Label from "./Label";
import PasswordInput from "./Password";

const FieldPreview = ({ formElements }) => {
  return (
    <form className="mt-4 w-auto">
      {(formElements || []).map((element, index) => (
        <div
          key={index}
          className="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full "
        >
          {/* Parent Field */}

          {/* Render the parent field input dynamically based on its type */}
          {element.type === "Text" && (
            <Input
              key={index}
              type="text"
              onChange={element.onChange}
              placeholder={element.placeholder}
              label={element.label}
              description={element.discription}
            />
          )}
          {element.type === "undefined" && (
            <Input
              key={index}
              type={element.type}
              onChange={element.onChange}
              placeholder={element.placeholder}
              label={element.label}
              description={element.discription}
            />
          )}
          {element.type === "Number" && (
            <Input
              key={index}
              type={element.type}
              onChange={element.onChange}
              placeholder={element.placeholder}
              label={element.label}
              description={element.discription}
            />
          )}
          {element.type === "Password" && (
            <PasswordInput
              label={element.label}
              description={element.discription}
            />
          )}
          {element.type === "Email" && (
            <EmailInput
              label={element.label}
              description={element.discription}
            />
          )}

          {/* Render Subfields if present */}

          {element.subFields && element.subFields.length > 0 && (
            <>
              {element.subFields.map((subField, subIndex) => {
                if (subField.type === "Text") {
                  return (
                    <Input
                      key={subIndex}
                      type={subField.type}
                      onChange={subField.onChange}
                      placeholder={subField.placeholder}
                      label={subField.label}
                      description={subField.description}
                    />
                  );
                }
                 if (subField.type === "undefined") {
                   return (
                     <Input
                       key={subIndex}
                       type={subField.type}
                       onChange={subField.onChange}
                       placeholder={subField.placeholder}
                       label={subField.label}
                       description={subField.description}
                     />
                   );
                 }
                
                if (subField.type === "Number") {
                  return (
                    <Input
                      key={subIndex}
                      type={subField.type}
                      onChange={subField.onChange}
                      placeholder={subField.placeholder}
                      label={subField.label}
                      description={subField.description}
                    />
                  );
                }

                if (subField.type === "Password") {
                  return (
                    <PasswordInput
                      key={subIndex}
                      label={subField.label}
                      description={subField.description}
                      placeholder={subField.placeholder}
                    />
                  );
                }
                if (subField.type === "Email") {
                  return (
                    <EmailInput
                      key={subIndex}
                      label={subField.label}
                      description={subField.description}
                      placeholder={subField.placeholder}
                    />
                  );
                }
              })}
            </>
          )}
        </div>
      ))}
      <button type="submit" className=" text-white">
        Submit
      </button>
    </form>
  );
};

export default FieldPreview;

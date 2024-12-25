import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormBuilder from './component/FormBuilder';
import FieldPreview from './component/FieldPreview';
import { useSelector } from 'react-redux';
import Scrollable from './component/Scrollable';
import Controls from './component/Controls';
import CodePreview from './component/CodePreview';



const Layout = () => {
  const formElements = useSelector((state) => state.form.formElements);
  const [showCode, setShowCode] = useState(false);


  return (
    <div className=" w-screen flex flex-col lg:flex-row  overflow-hidden bg-slate-950  ">
      <div className=" lg:w-1/5 h-full lg:h-full flex border-r border-gray-50  ">
        <Scrollable>
          <Controls />
        </Scrollable>
      </div>
      {formElements.length > 0 && (
        <>
          {" "}
          <div className="w-full lg:w-1/2 h-full pt-14 flex items-center justify-center bg-slate-950 border-t lg:border-t-0 lg:border-l lg:border-r">
            <FormBuilder />
          </div>
          <div className="bg-slate-950 p-4 lg:w-1/3 h-1/4 lg:h-full flex flex-col items-center justify-center">
            <div className="flex flex-col bg-black p-4 rounded-lg">
              {/* Tabs */}
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={() => setShowCode(false)}
                  className={`px-4 py-2 text-sm font-medium rounded focus:outline-none ${
                    !showCode
                      ? "text-white bg-gray-700"
                      : "text-gray-400 hover:text-white bg-transparent"
                  }`}
                >
                  Preview
                </button>

                <button
                  onClick={() => setShowCode(true)}
                  className={`px-4 py-2 text-sm font-medium rounded focus:outline-none ${
                    showCode
                      ? "text-white bg-gray-700"
                      : "text-gray-400 hover:text-white bg-transparent"
                  }`}
                >
                  Code
                </button>
              </div>

              {/* Scrollable Content */}
              <Scrollable>
                {showCode ? (
                  <CodePreview formElements={formElements} />
                ) : (
                  <FieldPreview formElements={formElements} />
                )}
              </Scrollable>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Layout


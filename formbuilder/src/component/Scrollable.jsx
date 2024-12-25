import React from "react";

const Scrollable = ({ children }) => {
  return (
    <div className="h-auto md:min-h-auto md:max-h-[90vh] lg:h-screen w-auto max-w-[90%] md:max-w-[300px] bg-slate-950 mx-auto">
      {/* Scrollable container for both horizontal and vertical scrolling */}
      <div className="overflow-auto h-full ">{children}</div>
    </div>
  );
};

export default Scrollable;

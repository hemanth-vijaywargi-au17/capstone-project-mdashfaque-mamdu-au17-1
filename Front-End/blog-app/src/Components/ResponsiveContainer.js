import React from "react";

function ResponsiveContainer({ children }) {
  return (
    <div className="w-full flex justify-center mb-4">
      <div className="w-full md:w-11/12 lg:w-4/6 xl:w-3/6">{children}</div>
    </div>
  );
}

export default ResponsiveContainer;

import React from "react";

function CopyRight() {
  return (
    <p className="text-base font-bold text-slate-500">
      &copy;{new Date().getFullYear()}. Powered by PCES
    </p>
  );
}

export default CopyRight;

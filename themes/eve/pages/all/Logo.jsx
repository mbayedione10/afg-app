import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img 
          style={{ width: "150px", height: "auto" }} src="/images/afg-logo.JPG" alt="eve" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};

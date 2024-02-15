// ProjectTag.jsx

import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? {
        color: "#1fbabf",
        
        borderColor:"#1fbabf",
        backgroundColor: "#252525",
      }
    : {
        color: "white",
        borderColor: "gray",
        hoverBorderColor: "gray",
        backgroundColor: "#252525",

      };

  return (
    <button 
    className="project-tag-button"
    style={{
      ...buttonStyles,
    }}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

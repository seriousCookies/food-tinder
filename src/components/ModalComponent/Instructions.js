import React from "react";

const Instructions = ({ instructions }) => {
  if (instructions.includes("<ol><li>")) {
    return <div dangerouslySetInnerHTML={{ __html: instructions }} />;
  } else {
    return (
      <ol>
        {instructions
          .split(".")
          .map((el) => (el.length > 1 ? <li key={el}>{el}</li> : null))}
      </ol>
    );
  }
};

export default Instructions;

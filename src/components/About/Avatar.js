import React from "react";
import Image from "react-bootstrap/Image";

function Avatar(props) {
  const { size, ...otherProps } = props;

  return (
    <Image
      {...otherProps}
      roundedCircle={false}
      style={{
        cursor: "pointer",  
        width: size,
        height: size,
      }}
    ></Image>
  );
}

export default Avatar;

import React, { useEffect } from "react";

const NewCard = (props) => {
  let imageurl = props.url;
  const [isHovering, setIsHovering] = React.useState(false);
  const [pos, setPos] = React.useState(0.0);

  useEffect(() => {
    setTimeout(() => {
      console.log(isHovering);
      if (isHovering && pos <= 100 - 0.2) setPos(pos + 0.2);
      if (!isHovering && pos >= 0.2) setPos(pos - 0.2);
    }, 10);
  }, [pos, isHovering]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <img
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      alt="mj pics"
      src={imageurl}
      style={{ objectPosition: `0% ${pos}%` }}
    />
  );
};

export default NewCard;

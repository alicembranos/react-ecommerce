import { AnimationOnScroll } from "react-animation-on-scroll";
import moment from "moment";
import { useState } from "react";

const DateItem = ({ event }) => {
  const [isHovering, setIsHovering] = useState(false);

  const formatDate = (date) => {
    const dateToFormat = moment(date);
    return dateToFormat.format("MMM Do YY");
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="animate__animated animate__bounce animate__slow"
    >
      <div
        className="dates__list-item"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="list-item-text1">
          <p className="list-item-date">{formatDate(event.datetime_local)}</p>
          <p className="list-item-place"> {event.name}</p>
        </div>
        <h2 className="list-item-band">{event.artist}</h2>
      </div>
      {isHovering && (
        <div className="list-item-image">
          <img src={event.image} alt={event.artist} />
        </div>
      )}
    </AnimationOnScroll>
  );
};

export default DateItem;

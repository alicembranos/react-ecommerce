import { useQuery } from "@tanstack/react-query";
import background_image from "assets/img/gallery/pexels-wendy-wei-1190297.jpg";
import Spinner from "components/Spinner/Spinner";
import getEvents from "services/getEvents";
import "./DatesItemList.css";
import DateItem from "./DateItem/DateItem";

const DatesItemList = () => {
  const {
    data: events,
    status
  } = useQuery(["events"], getEvents);

  if (status === "loading") {
    return (
      <div className="dates-loading">
        <Spinner />
        Loading events...
      </div>
    );
  }

  if (status === "error") {
    <div className="dates-error">
      Error fetching events, please refresh the browser.
    </div>;
  }

  return (
    <section className="dates__container">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${background_image})`,
          backgroundSize: "cover",
          opacity: 0.5,
        }}
      ></div>
      <div className="dates__list-container">
        <ul className="dates__list">
          {events.map((event) => (
            <DateItem event={event} key={event.id}></DateItem>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DatesItemList;

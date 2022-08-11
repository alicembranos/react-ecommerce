import DatesItemList from "components/DatesItemList/DatesItemList";
import getEvents from "services/getEvents";

getEvents();
const Dates = () => {
  const fetchData = async () => {
    const data = await getEvents();
  };

  fetchData();
  return (
    <div>
      <DatesItemList />
    </div>
  );
};

export default Dates;

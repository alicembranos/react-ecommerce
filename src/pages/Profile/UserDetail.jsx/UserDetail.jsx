import { useOutletContext } from "react-router-dom";
import "./UserDetail.css";

const UserDetail = () => {
  const user = useOutletContext();
  return (
    <article className="userDetail__article">
      <h2 className="userDetail__title">
        <span>{user.firstname}, </span>Welcome to your personal space!{" "}
      </h2>
      <div className="userdetail__box">
        <h4 className="userDetail__subtitle">Personal Data</h4>
        <p className="userDetail__p">
          Name: <span>{user.firstname}</span>
        </p>
        <p className="userDetail__p">
          LastName: <span>{user.lastname}</span>
        </p>
        <p className="userDetail__p">
          Email Address: <span>{user.email}</span>
        </p>
        <p className="userDetail__p">
          Age: <span>{user.age}</span>
        </p>
        <p className="userDetail__p">
          Genre: <span>{user.genre}</span>
        </p>
      </div>
    </article>
  );
};

export default UserDetail;

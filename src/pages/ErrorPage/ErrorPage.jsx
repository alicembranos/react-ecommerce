import CustomButton from "components/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error__section">
      <div className="error-wrapper">
        <div className="notFound-404">
          <h1 className="notFound-h1">
            4<span>0</span>4
          </h1>
        </div>
        <p className="notFound-message">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link replace to={"/"}>
          <CustomButton value="HOME PAGE" />
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

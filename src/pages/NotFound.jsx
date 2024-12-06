import { useNavigate, Link } from "react-router-dom";
// import "./notFound.scss";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link className="notFound__btn" to="/">
        Home
      </Link>
    </div>
  );
};

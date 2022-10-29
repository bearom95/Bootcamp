import { Link } from "react-router-dom";
// importamos Link para ir a nuestro Animals

export const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        A website created to deligth you with a view of 10 random wild animals
      </p>
      {/*  <ul>
        <li>
          <p>
            <span>Visit the animals website:</span>
            <Link to="animals">Animals</Link>
          </p>
        </li>
      </ul> */}
    </>
  );
};

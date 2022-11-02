import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/782/782225.png"
            alt="mushroom logo"
          />
        </NavLink>

        <span className="ml-3 text-xl">Mushrooms diary</span>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="gallery">Gallery</NavLink>
          <NavLink to="insert">Add new mushrooms</NavLink>
        </nav>
      </div>
    </header>
  );
};
{
  /* <header>
  <img src="https://cdn-icons-png.flaticon.com/512/782/782225.png" alt="mushroom logo" />

  <nav>
    <NavLink to="gallery">Gallery</NavLink>
    <NavLink to="insert">Add new mushrooms</NavLink>
  </nav>
</header>; */
}

const Header = ({getData}) =>{
  const user = 'Guest';
  getData(user);
  return <h1>Hai from {user}!</h1>
}

export default Header;
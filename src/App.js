import './App.css';

function App() {
  return (
    <>
     <Header>
      <img src="%PUBLIC_URL%/logo.png"/>
     </Header>
      <Nav>
      <ul>
        <li>
          <a href="/home">Home</a>
         </li>
        <li>
           <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
           <a href="/reservations">Reservations</a>
        </li>
        <li>
           <a href="/orderonline">Order Online</a>
        </li>
        <li>
           <a href="/login">Login</a>
        </li>
    </ul>
</Nav>
      <Main></Main>
      <Footer>
      <ul>
        <li>
          <a href="/home">Home</a>
         </li>
        <li>
           <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
           <a href="/reservations">Reservations</a>
        </li>
        <li>
           <a href="/orderonline">Order Online</a>
        </li>
        <li>
           <a href="/login">Login</a>
        </li>
    </ul>
      </Footer>
      </>
  );
 }

export default App;

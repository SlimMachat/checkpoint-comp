
import './App.css';
import PhotoProfil from "./components/profil/PhotoProfil";
import {Nav} from "react-bootstrap" ;
import FullName from "./components/profil/FullName";
import Adress from "./components/profil/Adress";
function App() {
  return (
    <div className="App">
      <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
      <PhotoProfil/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;

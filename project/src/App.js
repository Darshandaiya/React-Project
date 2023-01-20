import './App.css';
import Dashbord1 from './component/Dashbord1';
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/Footer';
import AllRoutes from './component/AllRoutes';
// import 'mdbreact/dist/css/mdb.css';

function App(props) {
  return (
    <div className="App mainBody">
      <BrowserRouter>
        <Dashbord1 />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

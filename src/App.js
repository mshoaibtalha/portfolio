import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
};

export default App;

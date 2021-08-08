import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Articles from './views/Articles';

import Navbar from './components/Navbar';

import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </div>
  );
}

export default App;

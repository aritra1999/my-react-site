import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Articles from './views/Articles';

import Navbar from './components/Navbar';

import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Topics from './Topics'
import {
	BrowserRouter,
	Route, 
	Link,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
  	// BrowserRouter only needed once in Root of app
    	<BrowserRouter>
		    <div>
		    	<ul>
			     	<li><Link to='/'>Home</Link></li>
			     	<li><Link to='/about'>About</Link></li>
			     	<li><Link to='/topics'>Topics</Link></li>
		     	</ul>

		     	<hr />
		     {/* w/o adding 'exact' before home path, 
		   		it will show along with About and Topics 
		   		because of slash technically matching as well */}
		     	<Route exact path='/' component={Home} />
		     	<Route path='/about' component={About} />
		     	<Route path='/topics' component={Topics} />
		    </div>
		  </BrowserRouter>
    );
  }
}

export default App;

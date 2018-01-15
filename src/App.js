import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MosesStore from './store';
import Home from './home/Home';
import Footer from './component/Footer';
import PeopleFocus from './about/PeopleFocus';

class App extends Component {

  render() {

    return (
      <div>
        <Provider store={MosesStore}>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={PeopleFocus} />
            <Route path='/about/peopleFocus' component={PeopleFocus} />
          </div>
        </Provider>
        <Footer />
      </div>


    )
  }
}

export default App;

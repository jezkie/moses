import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MosesStore from './store';
import Home from './home/Home';
import Footer from './component/Footer';

import PeopleFocus from './about/PeopleFocus';
import BenefitsOfMembers from './join/BenefitsOfMembers';

class App extends Component {

  render() {

    return (
      <div>
        <Provider store={MosesStore}>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={PeopleFocus} />
            <Route path='/about/peopleFocus' component={PeopleFocus} />
            <Route path='/join' component={BenefitsOfMembers} />
            <Route path='/join/benefits' component={BenefitsOfMembers} />
          </div>
        </Provider>
        <Footer />
      </div>
    )
  }
}

export default App;

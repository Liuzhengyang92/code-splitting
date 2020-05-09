import React, { Component, Suspense } from 'react';
import Page1 from './components/Page1';
import './App.css';

const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    };
  }

  onRouteChange = (route) => {
    // high order function code splitting
    this.setState({ route });
  }

  render() {
    const { route } = this.state;
    if (route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (route === 'page2') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    } else if (route === 'page3') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
         <Page3Lazy onRouteChange={this.onRouteChange} />
        </Suspense>
      );
    }
  }
}

export default App;

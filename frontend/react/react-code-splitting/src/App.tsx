import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loading } from './components/Loading';
import { Nav } from './components/Nav';
import { asyncComponent } from './components/asyncComponent';
import Loadable from 'react-loadable';
import  { MyLoadingComponent } from './components/MyLoading';
// Static import
import { Home } from './routes/Home';
import { Collection } from './routes/Collection';
// import { About } from './routes/About';
// import { ContactContainer as Contact } from './routes/ContactContainer';

// Dynamic import
 const About = asyncComponent(() => import(/* webpackChunkName: "about" */'./routes/About'));
const Location = Loadable({
  loader: () => import(/* webpackChunkName: "location" */'./routes/Location'),
  loading: MyLoadingComponent,
});
const Contact = React.lazy(() => import(/* webpackChunkName: "contact" */'./routes/ContactContainer'));

/*
[React.lazy] The React.lazy function lets you render a dynamic import as a regular component.
React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves 
to a module with a default export containing a React component.

[Suspense]If the module containing the OtherComponent is not yet loaded by the time MyComponent renders, 
we must show some fallback content while we’re waiting for it to load - such as a loading indicator. 
This is done using the Suspense component.
1. The fallback prop accepts any React elements that you want to render while waiting for the component to load. 
2. You can place the Suspense component anywhere above the lazy component. 
3. You can even wrap multiple lazy components with a single Suspense component.
 
[Names chunk] Right now, webpack will use an incrementing counter for the chunk names, 
which is why our chunk file was named 0.chunk.js. 
We can provide an explicit chunk name by adding a special comment within the import() expression:
*/
export const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/collection" component={Collection} />
         <Route path="/about" component={About} />
         <Route path="/location" component={Location} />
          <Suspense fallback={<Loading />}>
           <Route path="/contact" component={Contact} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

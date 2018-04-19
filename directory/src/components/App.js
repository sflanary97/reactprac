import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import AWS from 'aws-sdk';
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';
import Search from './Search';
import { Grid, Jumbotron } from 'react-bootstrap';
import Results from './Results'
/*state = {
    response: ''
  };

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

*/
const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
      <Switch>
      <Route exact path = "/" component = {Home} />
      <Route path = "/about" render = {() => <About title = 'About'/> } />
      <Route exact path = "/teachers" component = {Teachers} />
      <Route path = "/teachers/:name" component = {Featured} />
      <Route path = "/courses" component = {Courses} />
      <Route path = "/search" component = {Search} />
      <Route component = {NotFound}/>
      </Switch>
      <Jumbotron>
        <Grid>
          <h1>Search App </h1>
          <p> This is an app</p>
          <Search/>
        </Grid>
      </Jumbotron>
      <Results/>
      <p className="App-intro">{this.state.response}</p>
    </div>
  </BrowserRouter>


  //<CloudSearchDomain>
    //cloudSearchDomain = new CloudSearchDomain
    //{}
      //params:
    //  query = searchForm().submit.
  //  }
//    </CloudSearchDomain>

);

export default App;

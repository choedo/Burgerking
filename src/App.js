import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './header/header';
import LoginHeader from './header/loginHeader';
import Home from './home/home';
import TopRoute from './topRoute/topRoute';
import Login from './login/login';
import Join from './join/join';
import Menu from './menu/menu';
import MenuDetail from './menu/menuDetail';
import Event from './event/event';
import EventDetail from './event/eventDetail';
import NewStore from './newStore/newStore';
import NewStoreDetail from './newStore/newStoreDetail';
import BrandStory from './brandStory/brandStory';
import Footer from './footer/footer';
import Search from './search/search';

// yarn add react-icons
// yarn add styled-components
// yarn add react-router-dom@5

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route path="/login">
            <LoginHeader />
            <div style={{paddingTop: '168px'}}>
              <TopRoute />
              <Login />
            </div>
            <Footer />
          </Route>

          <Route path="/join">
            <LoginHeader />
            <div style={{paddingTop: '168px'}}>
              <TopRoute />
              <Join />
            </div>
            <Footer />
          </Route>

          <Route path="/menu">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <Menu />
            </div>
            <Footer />
          </Route>

          <Route path="/menudetail">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <MenuDetail />
            </div>
            <Footer />
          </Route>

          <Route path="/search">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <Search />
            </div>
          </Route>

          <Route path="/event">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <Event />
            </div>
            <Footer />
          </Route>
          <Route path="/eventdetail">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <Route path="/eventdetail/:key" component={EventDetail} />
            </div>
            <Footer />
          </Route>

          <Route path="/newstore">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <NewStore />
            </div>
            <Footer />
          </Route>
          <Route path="/newstoredetail">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <Route path="/newstoredetail/:key" component={NewStoreDetail} />
            </div>
            <Footer />
          </Route>

          <Route path="/brandstory">
            <Header />
            <div style={{paddingTop: '120px'}}>
              <TopRoute />
              <BrandStory />
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

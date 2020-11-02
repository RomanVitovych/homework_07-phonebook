import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './Components/Layout/Layout';
import Book from './Components/Book/Book';
// import styles from './App.module.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={routes.book} exact component={Book} />
      </Switch>
    </Layout>
  );  
};

export default App;

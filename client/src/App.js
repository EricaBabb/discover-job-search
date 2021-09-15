import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import SearchJobs from './pages/SearchJobs';
import SavedJobs from './pages/SavedJobs';
import Navbar from './components/Header';
import ApolloClient from 'apollo-boost';
import SignupForms from './components/SignupForms';
import LoginForm from './components/LoginForm';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchJobs} />
            <Route exact path='/signup' component={SignupForms} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/saved' component={SavedJobs} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
};

export default App;
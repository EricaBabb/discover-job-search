import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchJobs from './pages/SearchJobs';
import SavedJobs from './pages/SavedJobs';
import Header from './components/Header';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

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
        <Header />
        <Switch>
          <Route exact path='/' component={SearchJobs} />
          <Route exact path='/saved' component={SavedJobs} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  </ApolloProvider>
  );
}

export default App;

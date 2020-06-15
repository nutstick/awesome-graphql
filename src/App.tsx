import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo/client';
import Home from './pages/home';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;

import { Switch, Route } from 'react-router-dom';
import BooksList from './BooksList';
import CreateBook from './CreateBook';
import { NavBar } from './layout';
import UpdateBook from './UpdateBook';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={BooksList} />
        <Route path="create-book" component={CreateBook} />
        <Route path="update-book/:id" component={UpdateBook} />
      </Switch>
    </>
  );
}

export default App;

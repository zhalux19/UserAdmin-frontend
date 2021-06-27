
import ViewUsersPage from "./components/viewUsersPage/ViewUsersPage";
import CreateUserPage from "./components/createUserPage/CreateUserPage";
import HomePage from "./components/home/HomePage";
import Header from "./components/common/Header";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";

const App = ()=> {
  return(
    <>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/" exact component = {HomePage} />
          <Route path="/createuser" component = {CreateUserPage} />
          <Route path="/viewusers" component = {ViewUsersPage} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    </>
  )
}
export default App;
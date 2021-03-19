import { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./components/Home";
//import Home from './components/layout/Home'

import Profile from "./components/user/Profile";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { loadUser } from "./actions/userActions";
import UpdateProfile from "./components/user/UpdateProfile"; 
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";


import Dashboard from "./components/admin/Dashboard"

import store from "./store";
import ProtectedRoute from './components/route/ProtectedRoute'

import Aptitude from "./components/QuizPage/aptitude";
import Coding from "./components/QuizPage/coding";
import RB from "./components/QuizPage/rb";
import TechnicalAptitude from "./components/QuizPage/technicalaptitude";
import DBMS from "./components/QuizPage/dbms";
import Ds from "./components/QuizPage/ds";

import Play from "./components/playquiz/Calendar/Play";
import QuizSummary from "./components/playquiz/Calendar/QuizSummary";
import QuizInstructions from "./components/playquiz/Calendar/Quizinstructions";
import Percentageplay from "./components/playquiz/Percentage/Percentageplay";
import Percentageqs from "./components/playquiz/Percentage/Percentageqs";
import Percentageqi from "./components/playquiz/Percentage/Percentageqi";
import SIplay from "./components/playquiz/SimpleInterest/SIplay";
import SIsummary from "./components/playquiz/SimpleInterest/SIsummary";
import SIinstructions from "./components/playquiz/SimpleInterest/SIinstructions";
import PandIplay from "./components/playquiz/profitandloss/Pandlplay";
import PandIsummary from "./components/playquiz/profitandloss/Pandlsummary";
import PandIinstructions from "./components/playquiz/profitandloss/Pandlinstructions";
import Trainplay from "./components/playquiz/Trains/Trainplay";
import Trainsummary from "./components/playquiz/Trains/Trainsummary";
import Traininstructions from "./components/playquiz/Trains/Traininstructions";
import TandCinstructions from "./components/playquiz/TandConcurrency/TandCinstructions";
import Nfinstructions from "./components/playquiz/Normalforms/Nfinstructions";
import Sqlinstructions from "./components/playquiz/Sql/Sqlinstructions";
import ERinstructions from "./components/playquiz/ERmodel/ERinstructions";
import Finstructions from "./components/playquiz/Files/Finstructions";
import TandCplay from "./components/playquiz/TandConcurrency/TandCplay";
import Nfplay from "./components/playquiz/Normalforms/Nfplay";
import Sqlplay from "./components/playquiz/Sql/Sqlplay";
import ERplay from "./components/playquiz/ERmodel/ERplay";
import FPlay from "./components/playquiz/Files/FPlay";
import TandCsummary from "./components/playquiz/TandConcurrency/TandCsummary";
import Nfsummary from "./components/playquiz/Normalforms/Nfsummary";
import Sqlsummary from "./components/playquiz/Sql/Sqlsummary";
import ERsummary from "./components/playquiz/ERmodel/ERsummary";
import Fsummary from "./components/playquiz/Files/Fsummary";
import Ginstructions from "./components/playquiz/Graph/Ginstructions";
import Qinstructions from "./components/playquiz/Queue/Qinstructions";
import Llinstructions from "./components/playquiz/Linkedlist/Llinstructions";
import Stackinstructions from "./components/playquiz/Stack/Stackinstructions";
import Treesinstructions from "./components/playquiz/Trees/Treesinstructions";
import Gplay from "./components/playquiz/Graph/Gplay";
import Qplay from "./components/playquiz/Queue/Qplay";
import Stackplay from "./components/playquiz/Stack/Stackplay";
import Treesplay from "./components/playquiz/Trees/Treesplay";
import LlPlay from "./components/playquiz/Linkedlist/Llplay";
import Gsummary from "./components/playquiz/Graph/Gsummary";
import Qsummary from "./components/playquiz/Queue/Qsummary";
import Llsummary from "./components/playquiz/Linkedlist/Llsummary";
import Treessummary from "./components/playquiz/Trees/Treessummary";
import Stacksummary from "./components/playquiz/Stack/Stacksummary";
import Dtinstructions from "./components/playquiz/Datatypes/Dtinstructions";
import Operatorsinstructions from "./components/playquiz/Operators/Operatorsinstructions";
import Fuinstructions from "./components/playquiz/Functions/Fuinstructions";
import Pointersinstructions from "./components/playquiz/Pointers/Pointersinstructions";
import Scinstructions from "./components/playquiz/Storageclass/Scinstructions";
import Dtplay from "./components/playquiz/Datatypes/Dtplay";
import Operatorsplay from "./components/playquiz/Operators/Operatorsplay";
import Fuplay from "./components/playquiz/Functions/Fuplay";
import Pointersplay from "./components/playquiz/Pointers/Pointersplay";
import Scplay from "./components/playquiz/Storageclass/Scplay";
import Dtsummary from "./components/playquiz/Datatypes/Dtsummary";
import Fusummary from "./components/playquiz/Functions/Fusummary";
import Operatorssummary from "./components/playquiz/Operators/Operatorssummary";
import Pointerssummary from "./components/playquiz/Pointers/Pointerssummary";
import Scsummary from "./components/playquiz/Storageclass/Scsummary";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />

          <Route exact path="/Home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/password/forgot" component={ForgotPassword} exact />
          <Route path="/password/reset/:token" component={NewPassword} exact />
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/me" component={Profile} exact />
          <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
          <ProtectedRoute path="/password/update" component={UpdatePassword} exact />

          {<ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact /> }


          <Route exact path="/play" component={Play} />
          <Route exact path="/play/quizSummary" component={QuizSummary} />
          <Route
            exact
            path="/play/Quizinstructions"
            component={QuizInstructions}
          />
          <Route exact path="/Percentageplay" component={Percentageplay} />
          <Route exact path="/Percentageqs" component={Percentageqs} />
          <Route exact path="/aptitude/Percentageqi" component={Percentageqi} />
          <Route exact path="/SIplay" component={SIplay} />
          <Route exact path="/SIsummary" component={SIsummary} />
          <Route
            exact
            path="/aptitude/SIinstructions"
            component={SIinstructions}
          />
          <Route exact path="/PandIplay" component={PandIplay} />
          <Route exact path="/PandIsummary" component={PandIsummary} />
          <Route
            exact
            path="/aptitude/PandIinstructions"
            component={PandIinstructions}
          />
          <Route exact path="/Trainplay" component={Trainplay} />
          <Route exact path="/Trainsummary" component={Trainsummary} />
          <Route
            exact
            path="/aptitude/Traininstructions"
            component={Traininstructions}
          />
          <Route exact path="/ERplay" component={ERplay} />
          <Route exact path="/ERsummary" component={ERsummary} />
          <Route exact path="/ERinstructions" component={ERinstructions} />
          <Route exact path="/Sqlplay" component={Sqlplay} />
          <Route exact path="/Sqlsummary" component={Sqlsummary} />
          <Route exact path="/Sqlinstructions" component={Sqlinstructions} />
          <Route exact path="/Nfplay" component={Nfplay} />
          <Route exact path="/Nfsummary" component={Nfsummary} />
          <Route exact path="/Nfinstructions" component={Nfinstructions} />
          <Route exact path="/Fplay" component={FPlay} />
          <Route exact path="/Fsummary" component={Fsummary} />
          <Route exact path="/Finstructions" component={Finstructions} />
          <Route exact path="/TandCplay" component={TandCplay} />
          <Route exact path="/TandCsummary" component={TandCsummary} />
          <Route
            exact
            path="/TandCinstructions"
            component={TandCinstructions}
          />
          <Route exact path="/Gplay" component={Gplay} />
          <Route exact path="/Gsummary" component={Gsummary} />
          <Route exact path="/Ginstructions" component={Ginstructions} />
          <Route exact path="/Stackplay" component={Stackplay} />
          <Route exact path="/Stacksummary" component={Stacksummary} />
          <Route
            exact
            path="/Stackinstructions"
            component={Stackinstructions}
          />
          <Route exact path="/Qplay" component={Qplay} />
          <Route exact path="/Qsummary" component={Qsummary} />
          <Route exact path="/Qinstructions" component={Qinstructions} />
          <Route exact path="/Llplay" component={LlPlay} />
          <Route exact path="/Llsummary" component={Llsummary} />
          <Route exact path="/Llinstructions" component={Llinstructions} />
          <Route exact path="/Treesplay" component={Treesplay} />
          <Route exact path="/Treessummary" component={Treessummary} />
          <Route
            exact
            path="/Treesinstructions"
            component={Treesinstructions}
          />
          <Route exact path="/Fuplay" component={Fuplay} />
          <Route exact path="/Fusummary" component={Fusummary} />
          <Route exact path="/Fuinstructions" component={Fuinstructions} />
          <Route exact path="/Scplay" component={Scplay} />
          <Route exact path="/Scsummary" component={Scsummary} />
          <Route exact path="/Scinstructions" component={Scinstructions} />
          <Route exact path="/Operatorsplay" component={Operatorsplay} />
          <Route exact path="/Operatorssummary" component={Operatorssummary} />
          <Route
            exact
            path="/Operatorsinstructions"
            component={Operatorsinstructions}
          />
          <Route exact path="/Dtplay" component={Dtplay} />
          <Route exact path="/Dtsummary" component={Dtsummary} />
          <Route exact path="/Dtinstructions" component={Dtinstructions} />
          <Route exact path="/Pointersplay" component={Pointersplay} />
          <Route exact path="/Pointerssummary" component={Pointerssummary} />
          <Route
            exact
            path="/Pointersinstructions"
            component={Pointersinstructions}
          />

          <Route
            exact
            path="/technicalaptitude"
            component={TechnicalAptitude}
          />
          <ProtectedRoute exact path="/aptitude" component={Aptitude} />
          <ProtectedRoute exact path="/rb" component={RB} />
          <ProtectedRoute exact path="/dbms" component={DBMS} />
          <ProtectedRoute exact path="/ds" component={Ds} />
          <ProtectedRoute exact path="/coding" component={Coding} />

          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

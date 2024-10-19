import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuizPage from "./Components/QuizPage";
import Quiz from "./Components/Quiz";
import QuizReviewPage from "./Components/QuizReviewPage";
import { HistoryProvider } from './Components/data/Context';

const App = () => {
  return (
    <HistoryProvider>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" Component={QuizPage} exact>
            <QuizPage />
          </Route>

          <Route path="/quiz/start" component={Quiz} />
          <Route path="/quiz/review" component={QuizReviewPage} />


        </Switch>
      </Router>
    </HistoryProvider>
  );
};

export default App;
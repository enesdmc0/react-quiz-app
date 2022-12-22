import React from "react";
import {GlobalProvider} from './context/GlobalContext';
import MoneyList from './components/moneyList/MoneyList';
import QuestionPage from './components/questionPage/QuestionPage';
import "./app.scss";
function App() {
  return (
      <GlobalProvider>
          <div className="App">
              <QuestionPage />
              <MoneyList />
          </div>
      </GlobalProvider>
  );
}

export default App;

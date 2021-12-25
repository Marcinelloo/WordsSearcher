import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
import StopBar from "./components/stopBar";
import AnswerPage from "./pages/AnswerPage";
import SearchPage from "./pages/SearchPage";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainNavigation />
        <Routes>
          <Route exact path="/" element={<SearchPage />} />
          <Route exact path="/answer-page/:word" element={<AnswerPage />} />
          <Route exact path="/" element={<SearchPage />} />
        </Routes>
        <StopBar />
      </Provider>
    </div>
  );
}

export default App;

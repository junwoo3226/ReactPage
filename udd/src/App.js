// 메인
import Header from "./js/Header";
import Main from "./js/Main";
import Footer from "./js/Footer";
// 사람들
import Story from "./js/People/Story";
import StoryDetail from "./js/People/StoryDetail";
import Faculty from "./js/People/Faculty";
import Staff from "./js/People/Staff";
// 결과물
import All from "./js/Work/All";
import Award from "./js/Work/Award";
import AwardDetail from "./js/Work/AwardDetail";
import Publication from "./js/Work/Publication";
import PublicationDetail from "./js/Work/PublicationDetail";
import Exhibition from "./js/Work/Exhibition";
import ExhibitionDetail from "./js/Work/ExhibitionDetail";
// 기타 및 교육
import Labs from "./js/etc/Labs";
import LabDetail from "./js/etc/LabDetail";
import News from "./js/etc/News";
import NewsDetail from "./js/etc/NewsDetail";

//Tools
import Facility from "./js/Tool/Facility";
import UseFul from "./js/Tool/Useful";
import Guideline from "./js/Tool/Guideline";
import SearchList from "./js/Tool/SearchList";

import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={"/"} element={<Main />}></Route>

          {/* 사람들 */}
          <Route path={"/People/Story"} element={<Story />}></Route>
          <Route path={"/People/Story/:id"} element={<StoryDetail />}></Route>
          <Route path={"/People/Faculty"} element={<Faculty />}></Route>
          <Route path={"/People/Staff"} element={<Staff />}></Route>

          {/* 결과물 */}
          <Route path={"/Work/All"} element={<All />}></Route>
          <Route path={"/Work/Award"} element={<Award />}></Route>
          <Route path={"/Work/Award/:id"} element={<AwardDetail />}></Route>
          <Route path="/Work/Publication" element={<Publication />}></Route>
          <Route
            path={"/Work/Publication/:id"}
            element={<PublicationDetail />}
          ></Route>
          <Route path={"/Work/Exhibition"} element={<Exhibition />}></Route>
          <Route
            path={"/Work/Exhibition/:id"}
            element={<ExhibitionDetail />}
          ></Route>

          {/* 기타 및 교육 */}
          <Route path={"/etc/Labs"} element={<Labs />}></Route>
          <Route path={"/etc/Labs/:lab"} element={<LabDetail />}></Route>
          <Route path={"/etc/News"} element={<News />}></Route>
          <Route path={"/etc/News/:id"} element={<NewsDetail />}></Route>

          {/* Tools */}
          <Route path={"/Tool/Facility"} element={<Facility />}></Route>
          <Route path={"/Tool/Useful"} element={<UseFul />}></Route>
          <Route path={"/Tool/Guideline"} element={<Guideline />}></Route>
          <Route path={"/Tool/SearchList"} element={<SearchList />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

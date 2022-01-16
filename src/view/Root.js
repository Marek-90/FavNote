import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Notes from "../view/Notes";
import Articles from "../view/Articles";
import Twitters from "../view/Twitters";

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Notes />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/twitters" element={<Twitters />} />
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  );
};
export default Root;

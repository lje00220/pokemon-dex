import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Dex from "../pages/Dex";

/**
 * 애플리케이션 라우터 컴포넌트
 * - 경로에 따라 다른 페이지를 렌더링
 *
 * @returns {JSX.Element}
 */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 메인 페이지 */}
        <Route path="dex" element={<Dex />} /> {/* 포켓몬 도감 페이지 */}
        <Route path="dex/value" element={<Detail />} />{" "}
        {/* 포켓몬 상세 페이지 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

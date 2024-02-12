import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Atoms from "src/atoms";
import * as Pages from "src/pages";

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Atoms.Nav />}>
        <Route index element={<Pages.Main />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

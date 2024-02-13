import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Atoms from "src/atoms";
import * as Pages from "src/pages";
import * as Editor from "src/editor";

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Atoms.Nav />}>
        <Route index element={<Pages.Main />} />
      </Route>
      <Route path="/editor">
        <Route index element={<Editor.Selector />} />
        <Route path="main" element={<Editor.Main />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';
import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { MojeCV } from './App/MojeCV/MojeCV';
import { Blog } from './App/Blog/Blog';
import { FAQ } from './App/Exercises/FAQ/Faq';
import { Calendar } from './App/Calendar/Calendar';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="mojecv/*" element={<MojeCV />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="faq/*" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

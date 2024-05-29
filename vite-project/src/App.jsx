import { useState } from 'react'

import './App.css'
import Note from './note'
import Login from './Login'
import { Signup } from './Signup'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import { Product } from './Product/Product'

function App() {


  return (
    <AppProviders>
    <Applayout>
      <Suspense >
        <Routes>
          <Route path="/signup" element={<Login />} />
          <Route path="/product" element={<Product />} />

        </Routes>
      </Suspense>
    </Applayout>
  </AppProviders>
  )
}

export default App
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/main/main';
import Card from './components/card/card';
import './App.less'

function App() {

	const dispatch = useDispatch();


  return (
     <BrowserRouter>
		 	<div className='container'>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/card" element={<Card />} />
				</Routes>
			</div>
		 </BrowserRouter>
  )
}

export default App

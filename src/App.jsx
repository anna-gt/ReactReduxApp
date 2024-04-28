import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './components/main/main';
import Card from './components/card/card';
import './App.less'

function App() {

  return (
     <BrowserRouter basename={process.env.PUBLIC_URL}>
		 	<div className='container'>
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route exact path="/card/:username/:reponame" element={<Card />} />
				</Routes>
			</div>
		 </BrowserRouter>
  )
}

export default App

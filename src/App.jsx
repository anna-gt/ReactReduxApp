import React from 'react';
import { BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import Main from './components/main/main';
import Card from './components/card/card';
import './App.less'

function App() {

  return (
     <HashRouter>
			{/* <BrowserRouter basename={window.location.pathname || ''}> */}
		 	<div className='container'>
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="/card/:username/:reponame" element={<Card />} />
				</Routes>
			</div>
		 </HashRouter>
  )
}

export default App

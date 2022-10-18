import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Cryptocurrency from './pages/cryptocurrency';
import Disclaimer from './pages/disclaimer';
import Faq from './pages/faq';
import Merchandise from './pages/merchandise';
import Metaverse from './pages/metaverse';
import Nfts from './pages/nfts';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/cryptocurrency' element={<Cryptocurrency/>} />
		<Route path='/disclaimer' element={<Disclaimer/>} />
		<Route path='/faq' element={<Faq/>} />
		<Route path='/merchandise' element={<Merchandise/>} />
    <Route path='/metaverse' element={<Metaverse/>} />
    <Route path='/nfts' element={<Nfts/>} />
	</Routes>
	</Router>
);
}

export default App;

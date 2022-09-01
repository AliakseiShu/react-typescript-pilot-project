import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";
import {CreateProduct} from "./components/CreateProduct";

function App() {

	return (
		<>
			<Navigation/>
			<Routes>
				<Route path="/" element={<CreateProduct/>}/>
				<Route path="/about" element={<AboutPage/>}/>
			</Routes>
		</>
	);
}

export default App;
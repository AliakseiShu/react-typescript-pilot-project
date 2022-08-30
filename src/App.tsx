import React from 'react';
import './index.css';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";

function App() {

	const {products, loading, error} = useProducts()

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{ loading && <Loader/> }
			{ error && <ErrorMessage/> }
			{ products.map(product => <Product product={product} key={product.id}/>) }
		</div>
	);
}

export default App;
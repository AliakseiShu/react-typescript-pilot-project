import React from 'react';
import './index.css';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
//import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import BasicModal from "./components/Modal";


function App() {

	const {products, loading, error} = useProducts()

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{ loading && <Loader/> }
			{ error && <ErrorMessage error={error}/> }
			{ products.map(product => <Product product={product} key={product.id}/>) }

			<BasicModal />


	{/*	<BasicModal >
			 <CreateProduct/>
		</BasicModal>*/}
		</div>
	);
}

export default App;
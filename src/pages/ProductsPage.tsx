import React from 'react';
import {useProducts} from "../hooks/products";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {CreateProduct} from "../components/CreateProduct";

export const ProductsPage = () => {
	const {products, loading, error} = useProducts()

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader/>}
			{error && <ErrorMessage error={error}/>}
			{products.map(product => <Product product={product} key={product.id}/>)}
			<CreateProduct/>
		</div>
	);
};


import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
	product: IProduct
}

export const Product = ({product}: ProductProps) => {
	const [details, setDetails] = useState(false)

	const btnBgClassName = details ? "bg-yellow-400" : "bg-green-400"

	const btnClasses = ["py-2 px-4 border", btnBgClassName]

	return (
		<div className="border py-2 px-4 rounded flex flex-col items-center mb-4">
			<img src={product.image} className="w-2/4" alt={product.title}/>
			<p>{product.title}</p>
			<span className="font-bold">{product.price}</span>
			<button
				onClick={() => setDetails(prev => !prev)}
				className={btnClasses.join(' ')}>{details ? "Hide Details" : "Show Details"}
			</button>
			{details && <div><p>{product.description}</p>
				<p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
			</div>}
		</div>
	)
}
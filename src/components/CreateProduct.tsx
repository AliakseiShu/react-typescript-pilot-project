import React, {ChangeEvent, useState} from 'react';
import {BasicModal} from "./BasicModal";
import {Box, Typography} from "@mui/material";
import Modal from "@mui/material/Modal";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";
import {ErrorMessage} from "./ErrorMessage";
import {useProducts} from "../hooks/products";
import {Product} from "./Product";
import {Loader} from "./Loader";

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const productData: IProduct = {
	title: '',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 25,
		count: 30
	}
}

export const CreateProduct = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [value, setValue] = useState('')

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value)
	}

	const {addProduct, products, loading, error, setError, setLoading} = useProducts()

	const createHandler = (productData: IProduct) => {
		setOpen(false)
		addProduct(productData)
	}

	const onclickHandler = async () => {
		try {
			setError('')
			if (value.trim().length === 0) {
				setError('Please enter valid tittle')
				return
			}
			productData.title = value
			const response = await axios.post<IProduct>('https:/ww/fakestoreapi.com/products', productData)
			createHandler(response.data)
			setValue('')
		} catch (e:unknown) {
			const error = e as AxiosError
			setLoading(false)
			setError(error.message)
		}
	}

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader/>}
			{error && <ErrorMessage error={error}/>}
			{products.map(product => <Product product={product} key={product.id}/>)}
			<BasicModal>
				<button onClick={handleOpen}
								className="fixed bottom-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2">Add
				</button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Create new product
						</Typography>
						<input type="text"
									 className="border py-2 px-4 mb-4 w-full outline-0"
									 placeholder="Enter product title..."
									 value={value}
									 onChange={onChangeHandler}
						/>

						{error && <ErrorMessage error={error}/>}

						<button onClick={onclickHandler}
										className="py-2 px-4 border bg-yellow-400 hover:text-white mb-4">Create
						</button>
					</Box>
				</Modal>
			</BasicModal>
		</div>
	)
};


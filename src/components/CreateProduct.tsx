import React from 'react';
import {BasicModal} from "./BasicModal";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

export const CreateProduct = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<BasicModal>
			<Button onClick={handleOpen}>Open modal</Button>
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
								 placeholder="Enter product title..."/>
					<button className="py-2 px-4 border bg-yellow-400 hover:text-white mb-4">Create</button>
				</Box>
			</Modal>
		</BasicModal>
	)
};


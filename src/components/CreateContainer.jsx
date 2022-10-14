import React, { useState } from "react";
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import { categories } from "../utils/categories";
import Loader from "./Loader";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase.config";
import { getAllFoodItems, submitItem } from "../utils/firebaseFunctions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const CreateContainer = () => {
	const [title, setTitle] = useState("");
	const [calories, setCalories] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState(null);
	const [imageAsset, setImageAsset] = useState(null);
	const [fields, setFields] = useState(false);
	const [alertStatus, setAlertStatus] = useState("danger");
	const [msg, setMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);


	const dispatch = useDispatch(); 
    const {getFoodItems} = bindActionCreators(actionCreators, dispatch);


	const uploadImage = (e) => {
		setIsLoading(true);
		const imageFile = e.target.files[0];
		console.log(imageFile);
		const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
		const uploadTask = uploadBytesResumable(storageRef, imageFile);

		uploadTask.on('state_changed', (snapshot) => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		}, (error) => {
			console.log(error);
			setFields(true);
			setMsg("Error While Uploading: Try Again!");
			setAlertStatus('danger');
			setTimeout(() => {
				setFields(false);
				setIsLoading(false);
			}, 4000);
		}, () => {
			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				console.log('File available at', downloadURL);
				setImageAsset(downloadURL);
				setIsLoading(false);
				setFields(true);
				setMsg("Image Uploaded Successfully!");
				setAlertStatus("success");
				setTimeout(() => {
					setFields(false);
				}, 4000);
			});
		}
		);
	};

	const deleteImage = (e) => {
		setIsLoading(true);
		const deleteRef = ref(storage, imageAsset);

		deleteObject(deleteRef).then(() => {

			setImageAsset(null);
			setIsLoading(false);
			setFields(true);
			setAlertStatus("success");
			setMsg("Image Deleted Successfully.");
			setTimeout(() => {
				setFields(false);
			}, 4000);

		}).catch((error) => {

			console.log(error);
			setIsLoading(false);
			setFields(true);
			setAlertStatus("dange");
			setMsg("Some error occured while deleting the image.Please try again!");
			setTimeout(() => {
				setFields(false);
			}, 4000);

		});
	};
	const saveDetails = () => {
		setIsLoading(true);

		try {
			if ((!title || (!category || category === "Select Category") || !imageAsset || !calories || !price)) {
				setFields(true);
				setMsg("Required fields must be filled!");
				setAlertStatus('danger');
				setIsLoading(false);
				setTimeout(() => {
					setFields(false);
				}, 4000);
			}
			else {
				const data = {
					id: Date.now(),
					title: title,
					category: category,
					imageUrl: imageAsset,
					calories: calories,
					price: price,
					qty: 1
				}
				submitItem(data);

				setFields(true);
				setMsg("Data Successfully Submitted.")
				setAlertStatus('success');
				setIsLoading(false);

				clearData();
				setTimeout(() => {
					setFields(false);
				}, 4000);
			}
		} catch (error) {
			console.log(error);
			setFields(true);
			setMsg("Error While Submitting: Try Again!");
			setAlertStatus('danger');
			setTimeout(() => {
				setFields(false);
				setIsLoading(false);
			}, 4000);
		}
		fetchFoodItems();
	};

	const clearData = () => {
		setTitle("");
		setCategory(null);
		setImageAsset(null);
		setCalories("");
		setPrice("");
	};

	const fetchFoodItems = async () => {
        await getAllFoodItems().then(data => {
            getFoodItems(data);
        });
    }


	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">

				{/* bottom line not completed yet */}
				{fields && <p>No Here</p>}

				{/* Title Input Field Starts Here */}
				<div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
					<MdFastfood className="text-xl text-gray-700" />

					<input className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor" type="text" required value={title} placeholder="Title here" onChange={(e) => setTitle(e.target.value)} />
				</div>
				{/* Title Input Field Ends Here */}

				{/* Category Selection List Starts Here */}
				<div className="w-full">
					<select onChange={(e) => setCategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
						<option value="other" className="bg-white" selected disabled >Select Category</option>
						{categories && categories.map(item => (
							<option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-headingColor" value={item.urlParamName}>
								{item.name}
							</option>
						))}
					</select>
				</div>
				{/* Category Selection List Ends Here */}

				{/* Image Upload Section Starts Here */}
				<div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 rounded-lg cursor-pointer">
					{
						isLoading ? <Loader /> :
							<>
								{!imageAsset ? <>
									<label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">

										<div className="w-full h-full flex flex-col items-center justify-center gap-3">

											<MdCloudUpload className="text-3xl text-gray-500 hover:text-gray-700" />
											<div className="text-gray-500 hover:text-gray-700">Click Here to Upload</div>
										</div>
										<input type="file" name="uploadimage" accept="image/*" onChange={uploadImage} className="w-0 h-0" />
									</label>
								</> : <>
									<div className="relative h-full">
										<img src={imageAsset} alt="Uploaded Image" className="w-full h-full object-cover" />
										<button className="absolute bottom-3 right-3 p-3 rounded-full bg-red-600 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out" onClick={deleteImage}>
											<MdDelete className="text-white" />
										</button>
									</div>
								</>
								}
							</>
					}

				</div>
				{/* Image Upload Section Ends Here */}

				{/* Calories Input Field Starts Here */}
				<div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
					<MdFoodBank className="text-xl text-gray-700" />

					<input className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor" type="number" required value={calories} placeholder="Calories" onChange={(e) => setCalories(e.target.value)} />
				</div>
				{/* Calories Input Field Ends Here */}

				{/* Price Input Field Starts Here */}
				<div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
					<BiRupee className="text-xl text-gray-700" />

					<input className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor" type="number" required value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
				</div>
				{/* Price Input Field Ends Here */}


				{/* Submit button starts Here */}
				<div className="flex items-center w-full">
					<button type="button" className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold" onClick={saveDetails}>
						Submit
					</button>
				</div>
				{/* Submit button Ends Here */}

			</div>
		</div>
	);
};

export default CreateContainer;

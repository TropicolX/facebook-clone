/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useSession } from "next-auth/client";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

const InputBox = () => {
	const [session] = useSession();
	const inputRef = useRef(null);
	const filepickerRef = useRef(null);
	const [imageToPost, setImageToPost] = useState(null);

	const sendPost = (e) => {
		e.preventDefault();

		if (!inputRef.current.value) return;

		db.collection("posts")
			.add({
				message: inputRef.current.value,
				name: session.user.name,
				email: session.user.email,
				image: session.user.image,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then((doc) => {
				if (imageToPost) {
					// image upload
					const uploadTask = storage
						.ref(`posts/${doc.id}`)
						.putString(imageToPost, "data_url");

					removeImage();

					uploadTask.on(
						"state_change",
						null,
						(error) => console.error(error),
						() => {
							// when the upload completes
							storage
								.ref(`posts`)
								.child(doc.id)
								.getDownloadURL()
								.then((url) => {
									db.collection("posts").doc(doc.id).set(
										{
											postImage: url,
										},
										{ merge: true }
									);
								});
						}
					);
				}
			});

		inputRef.current.value = "";
	};

	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setImageToPost(readerEvent.target.result);
		};
	};

	const removeImage = () => {
		setImageToPost(null);
	};

	return (
		<div className="lg:w-11/12 mx-auto bg-white p-2 dark:bg-post-gray rounded-2xl shadow-md text-gray-500 font-medium mt-4">
			<div className="flex flex-col relative space-y-4 py-1 px-4 sm:space-y-0 sm:space-x-4 sm:p-4 items-center">
				<div
					className={`flex space-x-4 items-center sm:w-full sm:mb-0 ${
						!imageToPost && "mb-16"
					}`}
				>
					<Image
						className="rounded-full"
						src={session.user.image}
						width={40}
						height={40}
						layout="fixed"
						alt=""
					/>
					<form className="flex flex-1">
						<input
							className="rounded-full h-12 dark:text-text-color bg-gray-100 dark:bg-icon-gray flex-grow py-0 px-2 sm:px-5 focus:outline-none"
							type="text"
							ref={inputRef}
							placeholder={`What's on your mind, ${session.user.name}?`}
						/>
						<button
							className="block sm:hidden absolute bottom-5 bg-blue-500 text-white py-2 px-6 rounded-full"
							type="submit"
							onClick={sendPost}
						>
							Post
						</button>
					</form>
				</div>

				{imageToPost && (
					<div
						onClick={removeImage}
						className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer mr-auto"
					>
						<img
							src={imageToPost}
							alt=""
							className="h-10 object-contain"
						/>
						<p className="text-xs text-red-500 text-center">
							Remove
						</p>
					</div>
				)}
			</div>
			<div className="flex justify-evenly p-3 border-t dark:text-gray-400 dark:border-gray-400 ">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="h-7 text-xs sm:text-sm xl:text-base">
						Live Video
					</p>
				</div>

				<div
					onClick={() => filepickerRef.current.click()}
					className="inputIcon"
				>
					<CameraIcon className="h-7 text-green-400" />
					<p className="h-7 text-xs sm:text-sm xl:text-base">
						Photo/Video
					</p>
					<input
						ref={filepickerRef}
						onChange={addImageToPost}
						type="file"
						hidden
					/>
				</div>

				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="h-7 text-xs sm:text-sm xl:text-base">
						Feeling/Activity
					</p>
				</div>
			</div>
		</div>
	);
};

export default InputBox;

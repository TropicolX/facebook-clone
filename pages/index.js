import { getSession } from "next-auth/client";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
	const [dark, setDark] = useState(false);

	if (!session) return <Login />;

	const darkToggle = () => {
		setDark(!dark);
	};

	return (
		<div className={`bg-gray-100 ${dark && "dark"}`}>
			<Head>
				<title>Facebook Clone</title>
			</Head>

			<Header dark={darkToggle} darkStatus={dark} />

			<main className="flex dark:bg-body-gray dark:text-text-color">
				<Sidebar />
				<Feed posts={posts} />
				<Widgets />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	// get the user
	const session = await getSession(context);

	const posts = await db
		.collection("posts")
		.orderBy("timestamp", "desc")
		.get();

	const docs = posts.docs.map((post) => ({
		id: post.id,
		...post.data(),
		timestamp: null,
	}));

	return {
		props: {
			session,
			posts: docs,
		},
	};
}

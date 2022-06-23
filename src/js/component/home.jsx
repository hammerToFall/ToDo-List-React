import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoList from "./todolist.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<h1 className="text-center">Todos</h1>
				<ToDoList />
			</div>
		</div>
	);
};

export default Home;

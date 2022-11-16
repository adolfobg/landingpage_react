import React from "react";
import NavBar from "./navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import DivBody from "./divBody.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<DivBody />
			<div className="container-fluid mt-3">
				<div className="row">
					<div className="col-12 p-4 d-flex justify-content-center bg-dark text-white">Copyright@ Your Website 2018</div>
				</div>
			</div>
		</>
	);
};

export default Home;

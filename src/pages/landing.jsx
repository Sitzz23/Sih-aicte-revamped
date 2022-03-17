import React from "react";
import Navbar from "../components/navbar";
import LandCar from "../components/home/land-carousel";
import QuickLinks from "../components/home/quicklinks";
import Bureaus from "../components/home/bureaus";
import Initiatives from "../components/home/initiatives";
import Scheme from "../components/home/Scheme";
import Eminent from "../components/home/eminent";
import Footer from "../components/footer";
import ITICT from "../components/home/ITandICT.jsx";
// import BureausOverview from "../components/home/BureausOverview";

export default function landing() {
	return (
		<div className="overflow-x-hidden">
			<ITICT />
			{/* <LandCar />
			<QuickLinks />

			<Bureaus />
			<Initiatives />
			<Eminent />
			<Footer /> */}
			{/* <BureausOverview /> */}
		</div>
	);
}

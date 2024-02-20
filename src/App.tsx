import { useState } from "react";

import { Page } from "@ui5/webcomponents-react";
import { FlexBox } from "@ui5/webcomponents-react";
import companyLogo from "./assets/images/irm.png";
import userImage from "./assets/images/userImages/user1.jpg";

import Navbar from "./components/Navbar";
import SideNavbar from "./components/SideNavbar";
import routes from "./lib/data";
import RiskCard from "./components/RiskCard";
import cardData from "./lib/cardData";

function App() {
	const [theme, setTheme] = useState("sap_horizon");

	let bg: string;

	if (theme === "sap_horizon_hcb" || theme === "sap_horizon_dark") {
		bg = "bg-gray-700";
	} else {
		bg = "bg-gray-300";
	}
	return (
		<div className={`overflow-hidden ${bg} relative transition-all`}>
			<Navbar
				companyName="TRP Global"
				productName="Process Control Flow"
				isNotifiction={true}
				notificationCount="10"
				companyLogo={companyLogo}
				userImage={userImage}
				userName="John Doe"
				themeSwitch={setTheme}
			/>

			<FlexBox
				style={{
					height: "92dvh",
					marginTop: "0.50rem",
					columnGap: "0.50rem",
					marginRight: "0.50rem",
					marginBottom: "0.3rem",
				}}>
				<SideNavbar items={routes} />

				<Page
					backgroundDesign="Solid"
					className="page transition-all"
					style={{
						borderRadius: "6rem",
					}}>
					{cardData.map((card, index) => (
						<RiskCard
							key={index}
							header={card.header}
							icon={card.icon}
							risk={card.risk}
							desciption={card.desciption}
						/>
					))}
				</Page>
			</FlexBox>
		</div>
	);
}

export default App;

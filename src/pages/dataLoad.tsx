import { FlexBox } from "@ui5/webcomponents-react";
import SimulationDetails from "../components/SimulationDetails";
import FileUpload from "../components/FileUpload";

const DataLoad = () => {
	return (
		<FlexBox
			alignItems="Center"
			wrap="Wrap"
			justifyContent="Center"
			style={{ padding: "2rem" }}>
			<div>
				<SimulationDetails />
			</div>
			<div>
				<FileUpload />
			</div>
		</FlexBox>
	);
};

export default DataLoad;

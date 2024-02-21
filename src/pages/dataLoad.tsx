import { FlexBox } from "@ui5/webcomponents-react";
import SimulationDetails from "../components/SimulationDetails";
import FileUpload from "../components/FileUpload";

const DataLoad = () => {
	return (
		<FlexBox
			alignItems="Start"
			wrap="Wrap"
			justifyContent="Center"
			>
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

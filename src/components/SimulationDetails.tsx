import {
	Label,
	Table,
	TableCell,
	TableColumn,
	TableRow,
	Card,
	Button,
	Icon,
} from "@ui5/webcomponents-react";
import { simulateData } from "../lib/simulateData";

const SimulationDetails = () => {
	return (
		<Card className="h-[45vh]">
			<Table
				className="h-full overflow-y-auto"
				stickyColumnHeader
				style={{ width: "", padding: "1rem" }}
				columns={
					<>
						<TableColumn style={{ width: "2rem" }}>
							<Label>Sync ID</Label>
						</TableColumn>

						<TableColumn>
							<Label>Control Attribute Name</Label>
						</TableColumn>

						<TableColumn>
							<Label>Report Name</Label>
						</TableColumn>

						<TableColumn>
							<Label>Synced At</Label>
						</TableColumn>

						<TableColumn>
							<Label>Synced By</Label>
						</TableColumn>

						<TableColumn>
							<Label>Simulated At</Label>
						</TableColumn>

						<TableColumn>
							<Label>Simulated By</Label>
						</TableColumn>

						<TableColumn>
							<Label>Preview</Label>
						</TableColumn>

						<TableColumn>
							<Label>View Dashboard</Label>
						</TableColumn>

						<TableColumn>
							<Label>Simulate</Label>
						</TableColumn>
					</>
				}>
				{simulateData.map((data, index) => (
					<TableRow
						style={{ padding: "1rem" }}
						key={index}>
						<TableCell
							className="center-tabledata"
							data-name="ID">
							{data.id}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="controlAttribute">
							{data.controlAttributeName}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="reportname">
							{data.reportName}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="syncAt">
							{data.syncAt}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="syncBy">
							{data.syncedBy}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="simulatedAt">
							{data.isSimulated && data.simulateAt}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="simulatedBy">
							{data.isSimulated && data.simulatedBy}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="previewBtn">
							<Button>
								<Icon name="detail-view" />
							</Button>
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="dashboardBtn">
							{data.isSimulated && (
								<Button>
									<Icon name="performance" />
								</Button>
							)}
						</TableCell>
						<TableCell
							className="center-tabledata"
							data-name="simulatedBtn">
							{!data.isSimulated && (
								<Button>
									<Icon name="synchronize" />
								</Button>
							)}
						</TableCell>
					</TableRow>
				))}
			</Table>
		</Card>
	);
};

export default SimulationDetails;

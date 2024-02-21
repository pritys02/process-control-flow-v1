import {
	Label,
	Table,
	TableCell,
	TableColumn,
	TableRow,
	Card,
} from "@ui5/webcomponents-react";

const SimulationDetails = () => {
	return (
		<Card
			style={{
				width: "80rem",
				padding: "1rem",
			}}>
			<Table
				stickyColumnHeader
				style={{ width: "100%", padding: "1rem" }}
				columns={
					<>
						<TableColumn style={{ width: "2rem" }}>
							<Label>Sync ID</Label>
						</TableColumn>
						<TableColumn
							minWidth={800}
							popinText="Supplier">
							<Label>Control Attribute Name</Label>
						</TableColumn>
						<TableColumn
							demandPopin
							minWidth={600}
							popinText="Dimensions">
							<Label>Report Name</Label>
						</TableColumn>
						<TableColumn
							demandPopin
							minWidth={600}
							popinText="Weight">
							<Label>Synced At</Label>
						</TableColumn>
						<TableColumn>
							<Label>Synced By</Label>
						</TableColumn>
						<TableColumn>
							<Label>Previw</Label>
						</TableColumn>
						<TableColumn>
							<Label>View Dashboard</Label>
						</TableColumn>
						<TableColumn>
							<Label>Simulate</Label>
						</TableColumn>
					</>
				}
				onLoadMore={function _a() {}}
				onPopinChange={function _a() {}}
				onRowClick={function _a() {}}
				onSelectionChange={function _a() {}}>
				<TableRow>
					<TableCell>
						<Label>Notebook Basic</Label>
					</TableCell>
					<TableCell>
						<Label>Very Best Screens</Label>
					</TableCell>
					<TableCell>
						<Label>30 x 18 x 3cm</Label>
					</TableCell>
					<TableCell>
						<Label>4.2KG</Label>
					</TableCell>
					<TableCell>
						<Label>956EUR</Label>
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>
						<Label>Notebook Basic 17HT-1001</Label>
					</TableCell>
					<TableCell>
						<Label>Very Best Screens</Label>
					</TableCell>
					<TableCell>
						<Label>29 x 17 x 3.1cm</Label>
					</TableCell>
					<TableCell>
						<Label>4.5KG</Label>
					</TableCell>
					<TableCell>
						<Label>1249EUR</Label>
					</TableCell>
				</TableRow>
			</Table>
		</Card>
	);
};

export default SimulationDetails;

const routes = [
	{
		text: "Dashboard",
		icon: "bbyd-dashboard",
		path: "/dashboard",
		
	},
	{
		text: "Data Load",
		icon: "upload-to-cloud",
		path: "/dataLoad",
	},
	{
		text: "Master",
		icon: "drop-down-list",
		path:"/master",
	  
		subItems: [
			{
				text: "Type Of Control",
				icon: "permission",
				path: "/typeOfControl",
			},
			{
				text: "Control Family",
				icon: "customer-and-contacts",
				path: "/controlFamily",
			},
			{
				text: "Control Attribute",
				icon: "customer-order-entry",
				path: "/controlAttribute",
			},
			{
				text: "Report",
				icon: "manager-insight",
				path: "/report",
			},
			{
				text: "Control Logic",
				icon: "wrench",
				path: "/controlLogic",
			},
		],
	},
	
];

export default routes;

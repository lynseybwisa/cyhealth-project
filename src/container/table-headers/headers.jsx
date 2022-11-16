
import TableInitials from "../../components/table/components/TableInitials";
import TableText from "../../components/table/components/TableText";
import React from "react";


export const Headers = (
//   toggleDrawer,
) => [
  {
    title: "Branch Name",
    render: (rowData) => {
      return (
        <TableInitials
          title={rowData?.comment}
          subtitle={rowData?.comment}
          initials={rowData?.comment}
          textColor={"darkBlack"}
        />
      );
    },
  },
  {
    title: "Activity",
    render: (rowData) => {
      return <TableText title={rowData?.comment} type="text" />;
    },
  },
  {
    title: "Activity Group",
    render: (rowData) => {
      return <TableText title={rowData?.comment} />;
    },
  },

  {
    title: "Total Amount",
    render: (rowData) => {
      return <TableText title={rowData?.comment} type="money" />;
    },
  },
  {
    title: "Submitted Date",
    render: (rowData) => {
      return <TableText title={rowData?.comment} type="datetime" />;
    },
  },
  {
    title: "Activity Stage",
    render: (rowData) => {
      // return <ActivityStages stage={rowData.activityStage.stageName} />;
    },
  },
  {
    title: "From",
    render: (rowData) => {
      return <TableText title={rowData?.comment} type="date" />;
    },
  },
  {
    title: "To",
    render: (rowData) => {
      return <TableText title={rowData?.comment} type="date" />;
    },
  },
//   {
//     title: "Actions",
//     render: (rowData) => {
//     //   const canAllocate =
//     //     roles.includes("branch_manager") &&
//     //     (rowData.activityStage.stageName === "DISBURSEMENT" ||
//     //       rowData.activityStage.stageName === "AUDIT" || 
//     //       rowData.activityStage.stageName === "COMPLETED");
//       // TODO: Other conditions here

//       let options = [
//         {
//           label: "View",
//           action: () =>
//             toggleDrawer({
//               activityId: rowData.id,
//               activityName: rowData.activityName,
//               stageName: rowData.activityStage.stageName,
//               branchName: rowData.branchName,
//             }),
//         },
//       ];
//       if (canAllocate)
//         options.push({
//           label:
//             rowData.activityStage.stageName === "DISBURSEMENT"
//               ? "Allocate"
//               : "View Allocations",
//           action: () => allocateHandler(rowData.id),
//         });
//       return <SimpleDropdownButton name="Action" options={options} />;
//     },
//   },
];

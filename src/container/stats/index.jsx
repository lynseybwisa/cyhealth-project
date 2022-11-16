import classNames from 'classnames'
import React from 'react'
import Textfield from '../../components/inputs/Textfield'
import { Table } from '../../components/table'
import TableInitials from '../../components/table/components/TableInitials'
import TableText from '../../components/table/components/TableText'
import { Headers } from '../table-headers/headers'

const statistics = [
  {
    "id": 1,
    "comment": "Fuel Amount not available",
    "commentedby": "Jameson Doe",
    "stage": "Sales Manager",
    "date": "22/2/22",
},
{
    "id": 2,
    "comment": "Transport too much, reduce the amount",
    "commentedby": "Mwaniki Mwangi",
    "stage": "Finance",
    "date": "22/2/22",
},
{
    "id": 2,
    "comment": "Transport too much, reduce the amount",
    "commentedby": "Mwaniki Mwangi",
    "stage": "Finance",
    "date": "22/2/22",
},
{
    "id": 2,
    "comment": "Transport too much, reduce the amount",
    "commentedby": "Mwaniki Mwangi",
    "stage": "Finance",
    "date": "22/2/22",
}
]

console.log(statistics)

const Stats = () => {

  const tableConstant = [
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
    }
  ]

  return (
    <div>
     
      <Table
        //   filterData={updateFilterData}
        //   applyFilter={handleFilter}
        //   sortCriteria={sortCriteria}
        //   onChangeSort={onChangeSort}
          tableConstant={tableConstant}
          data={statistics}
          bgColor={'dirtyGrey'}
        />
    </div>
  )
}

export default Stats

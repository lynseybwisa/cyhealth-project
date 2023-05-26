import React, { useEffect, useState } from 'react'
import { get_all_statistics } from '../../api/Axios'
import { Table } from '../../components/table'
import TableInitials from '../../components/table/components/TableInitials'
import TableText from '../../components/table/components/TableText'


// const statistics = [
//   {
//     "id": 1,
//     "comment": "Fuel Amount not available",
//     "commentedby": "Jameson Doe",
//     "stage": "Sales Manager",
//     "date": "22/2/22",
// },
// {
//     "id": 2,
//     "comment": "Transport too much, reduce the amount",
//     "commentedby": "Mwaniki Mwangi",
//     "stage": "Finance",
//     "date": "22/2/22",
// },
// {
//     "id": 2,
//     "comment": "Transport too much, reduce the amount",
//     "commentedby": "Mwaniki Mwangi",
//     "stage": "Finance",
//     "date": "22/2/22",
// },
// {
//     "id": 2,
//     "comment": "Transport too much, reduce the amount",
//     "commentedby": "Mwaniki Mwangi",
//     "stage": "Finance",
//     "date": "22/2/22",
// }
// ]

// console.log(statistics)

const Stats = () => {
  const [statistics, setStatistics] = useState([])

  // console.log('This is the page', statistics)
  const fetchData = () => {
    get_all_statistics()
      .then((res) => {
        setStatistics(res.data.response)
        // console.log("This is the response", res.data.response)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log('These are the statistics', statistics)
  const tableConstant = [
    {
      title: 'Location Details',
      render: (rowData) => {
        return (
          <TableInitials
            title={`Continent: ${rowData.continent}`}
            subtitle={`Country: ${rowData?.country}`}
            population={`Population: ${rowData.population} people`}
            initials={rowData?.continent}
            textColor="darkBlack"
          />
        );
      },
    },
    {
      title: 'Cases',
      render: (rowData) => {
        return (
          <TableText
            title={`New: ${rowData?.cases.new}`}
            subtitle={`Active: ${rowData?.cases.active}`}
            critical={`Critical: ${rowData?.cases.critical}`}
            recovered={`Recovered: ${rowData?.cases.recovered}`}
            total={`Total: ${rowData?.cases.total} people`}
            type="text"
          />
        );
      },
    },
    {
      title: 'Deaths',
      render: (rowData) => {
        return (
          <TableText
            title={`New: ${rowData?.deaths.new}`}
            total={`Total: ${rowData?.cases.total} people`}
          />
        );
      },
    },
    {
      title: 'Tests',
      render: (rowData) => {
        return (
          <TableText
            total={`Total: ${rowData?.tests.total} people`}
            type="text"
          />
        );
      },
    },
    {
      title: 'Time',
      render: (rowData) => {
        return <TableText title={rowData?.time} type="datetime" />;
      },
    },
  ];
  

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

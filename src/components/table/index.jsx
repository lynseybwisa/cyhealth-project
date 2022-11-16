import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import Textfield from '../../components/inputs/Textfield'
import { Button } from '../button/Button'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
// import { FilterDropdown } from '../dropdown/FilterDropdown'
// import DropdownItem from './components/DropdownItem'

export const Table = ({
  tableConstant,
  data,
  page_size = 10,
  bgColor = '',
  additionalClasses = '',
  headerStyles = '',
  canSearch = true,
//   sortCriteria,
//   onChangeSort,
//   applyFilter,
//   filterData,
}) => {
  const [tableData, setTableData] = useState(data)

  useEffect(() => {
    setTableData(data)
  }, [data])

  // const [page, setPage] = useState(1)
  const [tableDataPaginated, setTableDataPaginated] = useState([])

  const onSearch = (e) => {
    const searchResult = data.filter((item) => {
      const filteredResults = Object.values(item).filter(() =>
        String(it).toUpperCase().includes(e.target.value.toUpperCase()),
      )
      return filteredResults.length > 0
    })
    setTableData(searchResult)
  }

  // const paginate = () => {
  //   // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  //   setTableDataPaginated(
  //     tableData.slice((page - 1) * page_size, page * page_size),
  //   )
  // }

  // useEffect(() => {
  //   paginate()
  // }, [page, tableData])

  // const nextPage = () => {
  //   if (tableData.length / page_size > page) setPage(page + 1)
  // }

  // const prevPage = () => {
  //   if (page > 1) {
  //     setPage(page - 1)
  //   }
  // }

  return (
    // <div
    //   className={classNames(
    //     ' overflow-visible rounded-t-lg w-full overflow-x-auto flex flex-col bg-white',
    //     additionalClasses,
    //   )}
    // >
    //   {canSearch && (
    //     <div className="p-4 flex">
    //       <div className="w-[30%] max-w-[30em]">
    //         <Textfield
    //           id="search"
    //           type="text"
    //           placeholder="Search here..."
    //           onChange={onSearch}
    //         />
    //       </div>

    //       {/* <div className="flex flex-row items-center gap-4 mx-8 pb-4">
    //         <DropdownItem
    //           label="Sort by:"
    //           options={sortCriteria}
    //           onSelect={onChangeSort}
    //         />
    //         <Button type="medium" handleClick={applyFilter}>
    //           Apply Filter
    //         </Button>
    //       </div> */}
    //     </div>
    //   )}

    //   <table className="w-full whitespace-no-wrap mb-8">
    //     <thead className={classNames('w-full uppercase', headerStyles)}>
    //       <tr
    //         className={`text-text tracking-wide text-left border-b bg-${bgColor}`}
    //       >
    //         {tableConstant.map((headerItem, index) => (
    //           <th className="px-4 py-1" key={index}>
    //             {headerItem.title}
    //           </th>
    //         ))}
    //         <th></th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white divide-y ">
    //       {tableDataPaginated.map((item, index) => (
    //         <tr
    //           key={index}
    //           className="text-text normal-case text-textGrey py-10"
    //         >
    //           {tableConstant.map((col, key) => (
    //             <td className="mt-1 py-3 px-4" key={key}>
    //               {col.render(item)}
    //             </td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //   {/* {tableData.length / page_size > 1 && (
    //     <div className="p-4 flex justify-end items-center">
    //       <span>Page: {page}</span>
    //       <Button
    //         type="iconLeft"
    //         handleClick={prevPage}
    //         icon={<AiOutlineLeft />}
    //       >
    //         Prev
    //       </Button>
    //       <Button
    //         type="iconRight"
    //         handleClick={nextPage}
    //         icon={<AiOutlineRight />}
    //       >
    //         Next
    //       </Button>
    //     </div>
    //   )} */}
    // </div>
    <div
    className={classNames(
      ' overflow-visible rounded-t-lg w-full overflow-x-auto flex flex-col bg-white'
    )}
  >
    <div className="p-4 flex">
        <div className="w-[30%] max-w-[30em]">
          <Textfield
            id="search"
            type="text"
            placeholder="Search here..."
            // onChange={onSearch}
          />
        </div>
      </div>
      <table className="w-full whitespace-no-wrap mb-8">
      <thead className={classNames('w-full uppercase')}>
        <tr
          className={`text-text tracking-wide text-left border-b bg-red-100`}
        >
          {tableConstant.map((headerItem, index) => (
            <th className="px-4 py-1" key={index}>
              {headerItem.title}
            </th>
          ))} 
          <th></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y ">
        {data.map((item, index) => (
          <tr
            key={index}
            className="text-text normal-case text-textGrey py-10"
          >
            {tableConstant.map((col, key) => (
              <td className="mt-1 py-3 px-4" key={key}>
                {col.render(item)}
              </td>
            ))} 
          </tr>
         ))} 
      </tbody>
    </table>
  </div>
  )
}

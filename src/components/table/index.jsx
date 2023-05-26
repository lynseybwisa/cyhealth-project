import React, { useEffect, useState, useCallback } from 'react'
import classNames from 'classnames'
import Textfield from '../../components/inputs/Textfield'
import { Button } from '../button/Button'
// import { FilterDropdown } from '../dropdown/FilterDropdown'
// import DropdownItem from './components/DropdownItem'

export const Table = ({
  tableConstant,
  data,
  page_size = 5,
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

  const [page, setPage] = useState(1)
  const [tableDataPaginated, setTableDataPaginated] = useState([])

  const onSearch = (e) => {
    const searchResult = data.filter((item) => {
      const filteredResults = Object.values(item).filter((it) =>
        String(it).toUpperCase().includes(e.target.value.toUpperCase()),
      )
      return filteredResults.length > 0
    })
    setTableData(searchResult)
  }

  const paginate = useCallback(() => {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    setTableDataPaginated(
      tableData.slice((page - 1) * page_size, page * page_size),
    );
  }, [page, tableData, page_size]);
  
  useEffect(() => {
    paginate();
  }, [paginate]);
  

  const nextPage = () => {
    if (tableData.length / page_size > page) setPage(page + 1)
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div
      className={classNames(
        ' overflow-visible rounded-t-lg w-full overflow-x-auto flex flex-col bg-white',
      )}
    >
      {canSearch && (
        <div className="p-4 flex">
          <div className="w-[30%] max-w-[30em]">
            <Textfield
              id="search"
              type="text"
              placeholder="Search here..."
              onChange={onSearch}
            />
          </div>
        </div>
      )}
      <table className="w-full whitespace-no-wrap mb-8">
        <thead className={classNames('w-full uppercase')}>
          <tr className={`text-sm tracking-wide text-left border-b bg-red-100`}>
            {tableConstant.map((headerItem, index) => (
              <th className="px-4 py-1" key={index}>
                {headerItem.title}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y py-2">
          {tableDataPaginated.map((item, index) => (
            <tr key={index} className="text-xs normal-case text-textGrey py-4">
              {tableConstant.map((col, key) => (
                <td className="mt-1  px-4" key={key}>
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.length / page_size > 1 && (
        <div className="p-4 flex justify-end items-center text-sm">
          <span className='mr-10'>Page: {page}</span>
          <Button
            additionalClasses=" bg-slate-800 "
            handleClick={prevPage}
          >
            Prev
          </Button>
          <Button
            additionalClasses=" bg-slate-800 "
            handleClick={nextPage}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}

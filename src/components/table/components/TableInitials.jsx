import React from 'react'
import Avatar from '../../avatar'

const TableInitials = ({  title, subtitle, initials, textColor, population }) => {

  return (
       <th scope="row" className="flex text-left py-2 px-2 whitespace-nowrap">
            <Avatar initials={initials || ""} />
            <div className="pl-3">
                <div className="text-text normal-case">{(title)}</div>
                <div className={` text-text text-${textColor} normal-case`}>{(subtitle)}</div>
                <div className={` text-text text-red-400 normal-case`}>{(population)}</div>
            </div>  
        </th>
  )
}

export default TableInitials

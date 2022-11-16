import React from 'react'
// import Avatar from '../../avatar'

const TableInitials = ({  title, subtitle, initials, textColor }) => {

  return (
       <th scope="row" className="flex text-left py-1 px-2 whitespace-nowrap">
            {/* <Avatar initials={initials || ""} /> */}
            <div className="pl-3">
                <div className="text-text text-darkBlack normal-case">{(title)}</div>
                <div className={` text-text text-${textColor} normal-case`}>{(subtitle)}</div>
            </div>  
        </th>
  )
}

export default TableInitials

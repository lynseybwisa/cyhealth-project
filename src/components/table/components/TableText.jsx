import classNames from 'classnames';
import moment from 'moment';
import React from 'react'


export const TableText = ({ title, subtitle, textColor, type="text", additionalClasses="", critical, recovered, total }) => {

    return (
        <div className='py-2'>
            <p className={classNames('text-text text-darkBlack normal-case', additionalClasses)}>{
                type === 'text' ?
                title :
                type === 'datetime' ?
                moment(title).format("lll") :
                type === 'date' ?
                moment(title).format("ll") :
                type === 'money' ?
                "KES "+parseFloat(title).toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                }):
                title
            }</p>
            {
                (subtitle !== null || subtitle !== undefined) && 
                <p className={`text-text text-${textColor} normal-case`}>{(subtitle)}</p>
            }
            {
                (critical !== null || critical !== undefined) && 
                <p className={`text-text text-${textColor} normal-case`}>{(critical)}</p>
            }
            {
                (recovered !== null || recovered !== undefined) && 
                <p className={`text-text text-${textColor} normal-case`}>{(recovered)}</p>
            }
            {
                (total !== null || total !== undefined) && 
                <p className={`text-text text-red-400 font-semibold normal-case`}>{(total)}</p>
            }
            
        </div>
    )
}
export default TableText
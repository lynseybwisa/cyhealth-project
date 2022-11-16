import classNames from 'classnames';
import moment from 'moment';
import React from 'react'


export const TableText = ({ title, subtitle, textColor, type="text", additionalClasses="" }) => {

    return (
        <>
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
            
        </>
    )
}
export default TableText
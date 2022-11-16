// import React from 'react'

import { useEffect, useState } from 'react'
import { get_all_statistics } from '../../api/Axios'
import Stats from '../../container/stats'

const Statistics = () => {
  // const [statistics, setStatistics] = useState([])

  // console.log('This is the page', statistics)
  // const fetchData = () => {
  //   get_all_statistics()
  //     .then((res) => {
  //       setStatistics(res.data)
  //       console.log("This is the response", res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   get_all_statistics()
  //     .then((res) => {
  //       setStatistics(res.data)
  //       console.log("This is the response", res.data)
  //     })
  //     .then((data) => {
  //       console.log(data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <div>
      {/* <Stats statistics={statistics} /> */}
      <Stats />
    </div>
  )
}

export default Statistics

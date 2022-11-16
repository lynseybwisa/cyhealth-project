import React, { useEffect, useState } from 'react'
import { get_all_statistics } from '../../api/Axios'
import Stats from '../../container/stats'

const Statistics = () => {
  const [statistics, setStatistics] = useState([])

  // console.log('This is the page', statistics)
  const fetchData = () => {
    get_all_statistics()
      .then((res) => {
        setStatistics(res.data)
        // console.log("This is the response", res.data.response)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Stats  />
    </div>
  )
}

export default Statistics

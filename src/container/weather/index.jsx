import React, { useEffect, useState } from 'react';
import { get_all_statistics } from '../../api/Axios';
import { Table } from '../../components/table';
import TableInitials from '../../components/table/components/TableInitials';
import TableText from '../../components/table/components/TableText';
import { Headers } from '../table-headers/headers';

const Climate = () => {
  const [statistics, setStatistics] = useState([]);

  const apiKey = 'b1b3b037178b9409e81e6eccac3c7c88';
  const city = 'Nairobi';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data, 'data')
        const country = data.sys.country;
        const location = data.name;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;
        const weatherDescription = data.weather[0].description;
        setStatistics([
          {
            country: country,
            location:location,
            temperature: temperature,
            humidity: humidity,
            pressure: pressure,
            weatherDescription: weatherDescription
          }
        ]);
      })
      .catch(error => {
        console.log('Error occurred:', error);
      });
  }, []);

  console.log(statistics, "weather details")

  const tableConstant = [
    {
      title: 'Location Details',
      render: (rowData) => {
        return (
          <TableInitials
            title={'Temperature: ' + ' ' + rowData.temperature + ' ' + 'degree celsius'}
            subtitle={'Weather Description: ' + ' ' + rowData?.weatherDescription + ' ' + 'in' + ' ' + rowData.location }
            population={
              'Humidity: ' + ' ' + rowData.humidity + ' ' + 'humidity' + ' ' + rowData.pressure + ' ' + 'pressure'
            }
            initials={rowData?.country}
            textColor={'darkBlack'}
          />
        );
      },
    },
    // Add more tableConstant objects for other columns

  ];

  return (
    <div>
      <Table
        tableConstant={tableConstant}
        data={statistics}
        bgColor={'dirtyGrey'}
      />
    </div>
  );
};

export default Climate;

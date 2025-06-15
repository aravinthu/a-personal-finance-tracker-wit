import React, { useEffect, useState } from 'react';
import { Charts } from '../components/Charts';
import { exportData } from '../utils/exportData';

export default function TrackerPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data here and set data
    // setData(fetchedData);
  }, []);

  const handleExport = () => {
    exportData(data, 'finance_data.json');
  };

  return (
    <div>
      <Charts data={data} />
      <button onClick={handleExport}>Export Data</button>
    </div>
  );
}
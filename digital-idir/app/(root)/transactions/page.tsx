'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function TransactionsPage() {
  const [transactionsData, setTransactionsData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    async function fetchAnnouncements() {
      const response = await fetch(
        'http://localhost:5000/api/v1/transactions',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      const data = await response.json();
      const formattedData = data.map((tx) => ({
        ...tx,
        date: new Date(tx.date).toLocaleDateString('en-CA'), // Format date to YYYY-MM-DD
      }));
      setTransactionsData(formattedData);
    }
    fetchAnnouncements();
  }, []);

  // Chart configuration
  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      background: 'transparent',
    },
    theme: {
      mode: darkMode ? 'dark' : 'light',
    },
    xaxis: {
      categories: transactionsData.map((tx) => tx.date),
      labels: { style: { colors: darkMode ? '#E4E4E4' : '#333' } },
    },
    yaxis: {
      labels: { style: { colors: darkMode ? '#E4E4E4' : '#333' } },
    },
    stroke: { curve: 'smooth' },
    grid: { borderColor: darkMode ? '#333' : '#ddd' },
  };

  const chartSeries = [
    {
      name: 'Amount',
      data: transactionsData.map((tx) => tx.amount),
    },
  ];

  if (transactionsData.length > 0) {
    return (
      <div
        className={`p-6 flex w-full gap-20 items-start ${
          darkMode ? ' text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        {/* Line Chart */}
        <div className="mb-8 p-4 bg-gray-800 rounded-lg shadow-md flex-1">
          <h2 className="text-lg font-bold mb-4">Transaction Overview</h2>
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="line"
            height={300}
          />
        </div>

        {/* Transactions List */}
        <div className="bg-gray-800 rounded-lg shadow-md flex-1">
          <h2 className="text-lg font-bold p-4">Transactions</h2>
          <div className="divide-y divide-gray-700">
            {transactionsData.map((tx, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 hover:bg-gray-700"
              >
                <span className="text-sm font-medium">{tx.name}</span>
                <span className="text-sm">{tx.date}</span>
                <span className="text-sm font-bold">
                  {tx.amount.toFixed(2)} Birr
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-10 w-full">
      <h3 className="text-center text-white font-semibold text-lg mt-10">
        No Transactions
      </h3>{' '}
    </div>
  );
}

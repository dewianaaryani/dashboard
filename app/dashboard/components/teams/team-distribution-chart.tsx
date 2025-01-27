"use client";

import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';



export default function TeamDistributionChart() {
    const data = [
        {
          name: "Delta",
          value: 55,
          color: "#f50057",
        },
        {
          name: "Alpha",
          value: 34,
          color: "#ec407a",
        },
        {
          name: "Canary",
          value: 11,
          color: "#f8bbd0",
        },
      ];
  return <ResponsiveContainer width="100%" height={150}>
    <PieChart>
        <Tooltip 
            labelClassName='font-bold'
            wrapperClassName='dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border' 
        />
        <Pie data={data} dataKey="value" nameKey="name">
            {data.map((dataItem, i )=> (
                <Cell fill={dataItem.color} key={i} />
            ))}
        </Pie>
    </PieChart>
  </ResponsiveContainer>
}

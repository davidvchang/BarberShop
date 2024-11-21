import React from 'react'


interface params {
    title: string,
    number: string
}

const DashboardCard:React.FC<params> = ({title, number}) => {
  return (
    <div className='dashboardCard'>
        <span>{title}</span>
        <span>{number}</span>
    </div>
  )
}

export default DashboardCard

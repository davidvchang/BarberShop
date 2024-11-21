import React from 'react'
import DashboardCard from '../components/DashboardCard'

const Dashboard:React.FC = () => {
  return (
    <section className='dashboard'>

        <div className='dashboardCardContainer'>
          <DashboardCard title='Citas para hoy' number='0'/>
          <DashboardCard title='Clientes totales' number='0'/>

        </div>

        <div className='appointmentsContainer'>
          <span>Citas para hoy</span>
        </div>
      
    </section>
  )
}

export default Dashboard

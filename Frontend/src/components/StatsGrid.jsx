
import StatsCard from './StatsCard'

const StatsGrid = ({stats}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[30px]'>
        <StatsCard value={stats.subscriber} label="SUBSCRIBERS" icon="👥" borderColor="#f56565"/>
        <StatsCard value={stats.view} label="TOTAL VIEWS" icon="👁" borderColor="#4ecdc4"/>
        <StatsCard value={stats.vedios} label="TOTAL VEDIOS" icon="🎥" borderColor="#4299e1"/>
        <StatsCard value={stats.engagement} label="AVG ENGAGEMENT" icon="🔗" borderColor="#48bb78"/>
    </div>
  )
}

export default StatsGrid





import StatsCard from './StatsCard'

const StatsGrid = ({stats}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[30px]'>
        <StatsCard value={stats.subscriber} label="SUBSCRIBERS" icon="👥"/>
        <StatsCard value={stats.view} label="TOTAL VIEWS" icon="👁"/>
        <StatsCard value={stats.vedios} label="TOTAL VEDIOS" icon="🎥"/>
        <StatsCard value={stats.engagement} label="AVG ENGAGEMENT" icon="🔗"/>
    </div>
  )
}

export default StatsGrid




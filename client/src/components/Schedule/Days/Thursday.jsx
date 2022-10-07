import ThursdayData from '../Data/ThursdayData'
import ScheduleButton from '../SheduleButton'
const Thursday = () =>{
    const tt = ThursdayData.map(x=>
            <ScheduleButton 
            time = {x.time}
            subject = {x.subject}
            venue = {x.venue}
            />
        
    )
    return(
        <div>
            {tt}
        </div>
    )
}

export default Thursday;
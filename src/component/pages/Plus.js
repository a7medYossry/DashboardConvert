// import Gallery from './plus/Gallery'
import Calender from './plus/fullcalendar/Calender'
import Widgets from './plus/Widgets'
import Kanban from './plus/Kanban'


const Plus = 
    [
        { path: 'calendar', element: <Calender /> },
        // { path: 'gallery', element: < Gallery />},
        { path: 'kanban', element: <Kanban />},
        { path: 'widgets', element: <Widgets />},
    ]

export default Plus
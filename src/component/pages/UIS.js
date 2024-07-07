import Buttons from './UI/Buttons'
import General from './UI/general/General'
import Icons from './UI/Icons'
import Modals from './UI/modals/Modals'
import Navbar from './UI/navbar/Navbar'
import Ribbons from './UI/Ribbons'
import Sliders from './UI/sliders/Sliders'
import TimeLine from './UI/TimeLine'


const UIS = 
    [
        { path: 'general', element: <General /> },
        { path: 'buttons', element: <Buttons /> },
        { path: 'icons', element: < Icons />},
        { path: 'modals', element: <Modals />},
        { path: 'navbar', element: <Navbar />},
        { path: 'ribbons', element: <Ribbons />},
        { path: 'sliders', element: <Sliders />},
        { path: 'timeline', element: <TimeLine />},
    ]

export default UIS
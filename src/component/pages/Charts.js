import Chartjs from './charts/Chartjs'
import Flot from './charts/flot/Flot'
import Inline from './charts/Inline'
import Uplot from './charts/Uplot'

const Charts = 
    [
        { path: 'chartjs', element: <Chartjs /> },
        { path: 'flot', element: < Flot />},
        { path: 'inline', element: <Inline />},
        { path: 'uplot', element: <Uplot />}
    ]
    export default Charts
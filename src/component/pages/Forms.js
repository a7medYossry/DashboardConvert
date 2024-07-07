import Advanced from './forms/advanced/Advanced'
import Editors from './forms/Editors/Editors'
import General from './forms/general/General'
import Validation from './forms/Validation'



const Forms = 
    [
        { path: 'advanced', element: <Advanced /> },
        { path: 'editors', element: < Editors />},
        { path: 'general', element: <General />},
        { path: 'Validation', element: <Validation />},
    ]


export default Forms
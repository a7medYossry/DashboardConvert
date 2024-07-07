import Enhanced from './search/Enhanced'
import EnhancedResults from './search/EnhancedResults'
import Simple from './search/Simple'
import SimpleResults from './search/SimpleResults'


const Search = 
    [
        { path: 'enhanced', element: <Enhanced /> },
        { path: 'enhanced-result', element: < EnhancedResults />},
        { path: 'simple', element: <Simple />},
        { path: 'simple-result', element: <SimpleResults />},
    ]

export default Search
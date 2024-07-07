import Iframe from './mainpages/Iframe'
import IframeDark from './mainpages/IframeDark'
import Index from './mainpages/index/Index'
import Index2 from './mainpages/index2/Index2'
import Index3 from './mainpages/Index3'


const MainPages = 
    [
        { path: '/iframe', element: <Iframe /> },
        { path: 'iframeDark', element: < IframeDark />},
        { path: '/index', element: <Index />},
        { path: '/index2', element: <Index2 />},
        { path: '/index3', element: <Index3 />},
        { path: '/', element: <Index3 />},
    ]


export default MainPages
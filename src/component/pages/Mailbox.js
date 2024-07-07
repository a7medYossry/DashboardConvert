import Compose from './mailbox/Compose'
import Mailboxs from './mailbox/Mailboxs'
import ReadMail from './mailbox/ReadMail'


const Mailbox = 
    [
        { path: 'compose', element: <Compose /> },
        { path: 'mailbox', element: < Mailboxs />},
        { path: 'read-mail', element: <ReadMail />},
    ]

export default Mailbox
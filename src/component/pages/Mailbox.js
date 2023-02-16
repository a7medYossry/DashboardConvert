import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Compose from './mailbox/Compose'
import Mailboxs from './mailbox/Mailboxs'
import ReadMail from './mailbox/ReadMail'

function Mailbox() {
    return (
        <Routes>
            <Route path={'pages/mailbox/compose'} element={<Compose />} />
            <Route path={'pages/mailbox/mailbox'} element={<Mailboxs />} />
            <Route path={'pages/mailbox/read-mail'} element={<ReadMail/>} />

        </Routes>
    )
}

export default Mailbox
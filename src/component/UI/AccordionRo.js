import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function AccordionRo({ name = '', opened = false, leftIcons = [], rightIcons = [''], children = [], badge = '' }) {
    const dntrotate = (opened === true) ? 'rotate' : 'no-rotate'
    const [Rotatee, setRotatee] = useState(dntrotate)
    let defaults = []
    defaults[0] = (rightIcons[0] === '') ? { m: <FontAwesomeIcon icon="fas fa-angle-left" size="sm" className={`${Rotatee}`} pull="right" /> } : { m: rightIcons }
    const badges = (badge === '') ? { m: '' } : { m: <span className="badges badge-info right">{badge}</span> }
    const Rotates = () => {
        if (Rotatee === 'no-rotate')
            setRotatee('rotate')
        else setRotatee('no-rotate')
    }
    const state = (opened === true) ? '0' : '1'
    return (
        <Accordion defaultActiveKey={`${state}`}>
            <Accordion.Item eventKey="0" >
                <div onClick={() => Rotates()} >
                    <Accordion.Header className="btn-acor" >{leftIcons}<name> {name}{badges.m}{defaults[0].m}</name></Accordion.Header>
                </div>
                <Accordion.Body >
                    {children}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionRo
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import Button from './Button'

import 'bulma'
import KitchenPoemStart from './KitchenPoemStart';
import GetConversations from '../features/GetConversations';

const KitchenPoem = () => {
    let { url } = useRouteMatch()
    let startClicked = false

    return (
        <div className="column">
            <h2 className="title">Kitchen Poem</h2>

            <h3 className="subtitle">What is Kitchen Poem?</h3>
            <Button onClick={startClicked==true}>
                <Link to={`${url}/start`} >Start</Link>
            </Button>

            {startClicked &&
                <KitchenPoemStart/>
            }
            
            <GetConversations/>
        </div>
    )

    function renderPage() {
        
    }
}


export default KitchenPoem
import React from 'react'
import {HashRouter} from "react-router-dom";
import Routs from "./Routs";
import Header from "./Header";

function HW5() {

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <div>
                    <Header/>
                    <Routs/>
                </div>
            </HashRouter>
        </div>
    )
}

export default HW5

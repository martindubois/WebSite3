
// Author    KMS - Martin Dubois, P. Eng.
// Copyright (C) 2022 KMS
// Product   WebSite3
// File      front-end/src/pages/Layout.js

import { useState } from 'react'

import { Outlet } from 'react-router-dom'

const Layout = () =>
{
    const [ sLanguage, SetLanguage ] = useState( 'fr' )

    const SetEnglish = () => { SetLanguage( 'en' ) }
    const SetFrench  = () => { SetLanguage( 'fr' ) }

    let lLanguage

    switch (sLanguage)
    {
    case 'en': lLanguage = <button onClick = { SetFrench  } > Fran&ccedil;ais </button>; break
    case 'fr': lLanguage = <button onClick = { SetEnglish } > English         </button>; break

    default: lLanguage = <></>
    }

    return (
        <>
            <div className = "header" >
                <img alt       = "KMS Logo"
                     className = "logo"
                     src       = "logo1b.png" />
                <div className = "right" > { lLanguage } </div>
                <hr/>
            </div>

            <div className = "main" >
                <Outlet context = { [ sLanguage, SetLanguage ] }/>
            </div>

            <div className = "footer" >
                <footer>
                    <hr/>
                    <address>Copyright &copy; 2022 KMS - 0.0.2</address>
                </footer>
            </div>
        </> )
};

export default Layout;

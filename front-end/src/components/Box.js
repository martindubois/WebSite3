
// Author    KMS - Martin Dubois, P. Eng.
// Copyright (C) 2022 KMS
// Product   WebSite3
// File      front-end/src/components/Box.js

const Box = ( aProps ) =>
{
    let lLabel_Subject;

    switch ( aProps.Language )
    {
    case 'en':
        lLabel_Subject = 'Subject'
        break

    case 'fr':
        lLabel_Subject = 'Sujet'
        break

    default:
    }

    let lURL_Card    = 'http://www.kms-quebec.com/Cards/' + aProps.Card.No + '_' + aProps.Language + '.pdf'
    let lURL_Image   = 'http://www.kms-quebec.com/Cards/' + aProps.Card.No + '_' + aProps.Language + '.png'
    let lURL_Subject = "Subject.htm?Subject=" + aProps.Card.Subject;

    return (
        <div className = "box">
            <a href   = { lURL_Card }
               target = "_blank"
               rel    = "noreferrer" >
                <img alt = { aProps.Card.Title }
                     src = { lURL_Image } />
            </a>
            <p>
                { lLabel_Subject } :
                <a href = { lURL_Subject } > { aProps.Card.Subject } </a>
            </p>
        </div>
    )
}

export default Box

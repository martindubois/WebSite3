
// Author    KMS - Martin Dubois, P. Eng.
// Copyright (C) 2022 KMS
// Product   WebSite3
// File      front-end/src/components/Entry.js

const Entry = ( aProps ) =>
{
    let lURL_Card    = 'http://www.kms-quebec.com/Cards/' + aProps.Card.No + '_' + aProps.Language + '.pdf'
    let lURL_Subject = "Subject.htm?Subject=" + aProps.Card.Subject;

    return (
        <tr>
            <td> { aProps.Card.No } </td>
            <td>
                <a href = { lURL_Subject } > { aProps.Card.Subject } </a>
            </td>
            <td>
                <a href   = { lURL_Card }
                   target = "_blank"
                   rel    = "noreferrer">
                    { aProps.Card.Title }
                </a>
            </td>
        </tr> )
}

export default Entry

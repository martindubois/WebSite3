
// Author    KMS - Martin Dubois, P. Eng.
// Copyright (C) 2022 KMS
// Product   WebSite3
// File      front-end/src/pages/Subject.js

import { useOutletContext, useSearchParams } from 'react-router-dom'

import { CardList_en, CardList_fr } from '../CardList'

import Box from '../components/Box'

const Subject = ( aProps ) =>
{
    const [ sLanguage ] = useOutletContext()
    const [ lParams   ] = useSearchParams();

    let lSubject = lParams.get( 'Subject' );

    let lCardList
    let lLabel_AllCards;
    let lLabel_Title;

    switch ( sLanguage )
    {
    case 'en':
        lCardList = CardList_en
        lLabel_AllCards = 'All cards'
        lLabel_Title = 'Subject : ' + lSubject
        break

    case 'fr':
        lCardList = CardList_fr
        lLabel_AllCards = 'Toutes les fiches'
        lLabel_Title = 'Sujet : ' + lSubject
        break

    default:
    }

    var lBoxes = [];

    for ( let i = 0; i < lCardList.length; i ++ )
    {
        if ( lSubject === lCardList[i].Subject )
        {
            lBoxes.push(
                <Box Card     = { lCardList[i] }
                     key      = { lCardList[i].No }
                     Language = { sLanguage } /> )
        }
    }

    return (
        <>
            <div className = "centered" >
                <h1> { lLabel_Title } </h1>
            </div>
            <div className = "centered" >
                <form action = "/"
                      method = "get" >
                    <button type = "submit" > { lLabel_AllCards } </button>
                </form>
            </div>
            <div className = "boxes">
                { lBoxes }
            </div>
        </> )
}

export default Subject

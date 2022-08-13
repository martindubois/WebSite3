
// Author    KMS - Martin Dubois, P. Eng.
// Copyright (C) 2022 KMS
// License   http://www.apache.org/licenses/LICENSE-2.0
// Product   WebSite3
// File      front-end/src/pages/Home.js

import { useEffect, useState } from 'react'

import { useOutletContext } from 'react-router-dom'

import { CardList_en, CardList_fr } from '../CardList'

import Box from '../components/Box'

const Home = () =>
{
    const [ sAuto      , SetAuto       ] = useState( true )
    const [ sLanguage                  ] = useOutletContext()
    const [ sStartIndex, SetStartIndex ] = useState( 0 )

    const CARD_PER_PAGE = 3

    const OnTimeout = () =>
    {
        SetStartIndex( sStartIndex + 1 )
    }

    const OnLoad = () =>
    {
        if ( sAuto )
        {
            setTimeout( OnTimeout, 6000 )
        }
    }

    const OnNext = () =>
    {
        SetAuto( false )
        SetStartIndex( sStartIndex + CARD_PER_PAGE )
    }

    const OnPrevious = () =>
    {
        SetAuto( false )
        SetStartIndex( sStartIndex - CARD_PER_PAGE )
    }

    // eslint-disable-next-line
    useEffect( OnLoad, [] )

    let lCardList
    let lLabel_List
    let lLabel_Next
    let lLabel_Previous
    let lLabel_Title

    switch ( sLanguage )
    {
    case 'en':
        lCardList = CardList_en
        lLabel_List = 'List'
        lLabel_Next = 'Next'
        lLabel_Previous = 'Previous'
        lLabel_Title = 'All cards'
        break

    case 'fr':
        lCardList = CardList_fr
        lLabel_List = 'Liste'
        lLabel_Next = 'Suivantes'
        lLabel_Previous = 'Pr\xE9c\xE9dentes'
        lLabel_Title = 'Toutes les fiches'
        break

    default:
    }

    let lStartIndex = sStartIndex

    if ( 0 > lStartIndex )
    {
        lStartIndex = 0
    }
    else
    {
        lStartIndex = lStartIndex % lCardList.length
    }

    let lButton_Next;
    let lStopIndex = lStartIndex + CARD_PER_PAGE;

    if ( lCardList.length < lStopIndex )
    {
        lButton_Next = <button disabled > { lLabel_Next } </button>
        lStopIndex = lCardList.length;
    }
    else
    {
        lButton_Next = <button onClick = { OnNext } > { lLabel_Next } </button>
    }

    let lButton_Previous;

    if ( 0 >= lStartIndex )
    {
        lButton_Previous = <button disabled > { lLabel_Previous } </button>
    }
    else
    {
        lButton_Previous = <button onClick = { OnPrevious } > { lLabel_Previous } </button>
    }

    var lBoxes = [];

    for ( let i = lStartIndex; i < lStopIndex; i ++ )
    {
        lBoxes.push(
            <Box Card     = { lCardList[i] }
                 key      = { lCardList[i].No }
                 Language = { sLanguage } /> )
    }

    return (
        <>
            <div className = "centered" >
                <h1> { lLabel_Title } </h1>
            </div>
            <div className = "centered" >
                <form action = "/List.htm"
                      method = "get">
                    <button type = "submit" > { lLabel_List } </button>
                </form>
            </div>
            <div className = "boxes" >
                { lBoxes }
            </div>
            <div className = "centered"> { lButton_Previous } { lButton_Next } </div>
        </> )
}

export default Home;

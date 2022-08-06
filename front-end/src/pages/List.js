
// Author    KMS - Martin Dubois, P. Eng.
// Copyright (C) 2022 KMS
// Product   WebSite3
// File      front-end/src/pages/Home.js

import { useOutletContext } from "react-router-dom"

import { CardList_en, CardList_fr } from '../CardList'

import Entry from '../components/Entry'

const List = () =>
{
    const [ sLanguage ] = useOutletContext()

    const RenderCard = ( aCard ) =>
    {
        return (
            <Entry Card     = { aCard }
                   key      = { aCard.No }
                   Language = { sLanguage } /> )
    }

    let lCardList;
    let lHeader;
    let lLabel_Previews;
    let lLabel_Title;

    switch ( sLanguage )
    {
    case 'en':
        lCardList = CardList_en
        lHeader = <tr><th> No. </th><th> Subject </th><th> Title </th></tr>
        lLabel_Previews = 'Previews'
        lLabel_Title = 'List of all cards'
        break

    case 'fr':
        lCardList = CardList_fr
        lHeader = <tr><th> No. </th><th> Sujet </th><th> Titre </th></tr>
        lLabel_Previews = 'Aper\xE7us'
        lLabel_Title = "Liste de toutes les fiches"
        break

    default:
    }

    return (
        <>
            <div className = "centered" >
                <h1> { lLabel_Title } </h1>
            </div>
            <div className = "centered" >
                <form action = "/"
                      method = "get" >
                    <button type = "submit" > { lLabel_Previews } </button>
                </form>
            </div>
            <div className = "entries" >
                <table>
                    <thead> { lHeader } </thead>
                    <tbody>
                        { lCardList.map( RenderCard ) }
                    </tbody>
                </table>
            </div>
        </> )
}

export default List

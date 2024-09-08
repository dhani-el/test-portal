import { useState } from "react";
import { TextField } from "@mui/material";
import "./search.scss";
import { DropDownItemProp,DropDownProps,HistoryBodyProp,AsearchHistoryProp } from "./interfaces";


export default function SearchPage(){
    const [serchBarValue, setSearchBarValue] = useState('');
    const [searchResult, setSearchResult] = useState<string[]>([]);
    return <div id="search-page-container">
                <section id="search-bar-container">
                    <TextField/>
                    <DropDown searchResult={searchResult} />
                </section>
                <History/>
    </div>
}

function DropDown({searchResult}:DropDownProps){
    return <div>
                {
                    searchResult.map(function(aResult){
                        return <DropDownItem aResult={aResult}  key={aResult.slice(0,4)}/>
                    })
                }
    </div>
}

function DropDownItem({aResult}:DropDownItemProp){
    return <div>
                <p>{aResult}</p>
    </div>
}

function History(){
    const [searchHistory,setSearchHistory] = useState<string[]>([])
    const [noSearchHistory,setNoSearchHistory] = useState<boolean>(true);
    return( noSearchHistory ? <NoHistoryIndicator/> : <HistoryBody entries={searchHistory}/> )

}

function NoHistoryIndicator(){
    return <div>
                <p>You Have No Search History</p>
    </div>
}

function HistoryBody({entries}:HistoryBodyProp){
    return <main>
                {
                    entries.map((anEntry)=>{
                        return <AsearchHistory entry={anEntry} key={anEntry.slice(0,4)}/>
                    })
                }
            </main>
}

function AsearchHistory({entry}:AsearchHistoryProp){
    return <div>
                <p>{entry}</p>
            </div>
}
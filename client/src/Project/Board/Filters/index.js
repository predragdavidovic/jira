import React, {useState} from "react";
import _intersection from "lodash.intersection";

import { arrayIntoObject } from "../../../shared/utils/javascript";
import {
    UserIconFilter,
} from "../../../shared/components/Icon/index.jsx";

import {
    Filter,
    SearchContainer,
    SearchMagnifier,
    SearchInput,
    UserContainer,
    UserAvatarFilter,
    ClearAll,
} from "./Style.js";

function searchByWord(filter, data, value){
    let filteredIssues = [];
    const filterClone = {...filter};
    const regex = new RegExp((value || value == "") ? value : filter.typed, "gi");
    return {
        filteredIssues: data.originalIssues.filter((item) => item.title.match(regex)),
        filterClone,
    }        
}

function searchIntersection(filterClone, filteredIssues) {
    return filteredIssues.filter(item => {
        if ( _intersection(JSON.parse(item.userIds), filterClone.selected).length ) {
            return item;
        }
    });
}

function handleInputChange(value, filter, setFilter, users, data, setData) {
    let {filteredIssues, filterClone} = searchByWord(filter, data, value);
    filterClone.typed = value;

    if (filterClone.selected.length) {
        filteredIssues = searchIntersection(filterClone, filteredIssues)
   }

   setFilter(filterClone);
   setData({users, issues: filteredIssues, originalIssues: data.originalIssues});
}

function handleUserIcon(userId, data, users, setData, filter, setFilter) {
    let {filteredIssues, filterClone} = searchByWord(filter, data);
    
    if (!filterClone.selected.includes(userId)) {
        filterClone.selected.push(userId);
    } else {
        filterClone.selected = filterClone.selected.filter(item => item !== userId);
    }

    if (filterClone.selected.length) {
        filteredIssues = searchIntersection(filterClone, filteredIssues);
   } else {
       filteredIssues = filteredIssues;
   }

    setFilter(filterClone);
    setData({users, issues: filteredIssues, originalIssues: data.originalIssues});
}

function handleClear(data, users, setData, setFilter) {
    setData({users, issues: data.originalIssues, originalIssues: data.originalIssues});
    setFilter({typed: "", selected: []});
}

const Filters = ({issues, users, data, setData}) => {
    const [filter, setFilter] = useState({typed: "", selected: []});
    const transformedUsers = arrayIntoObject(users);
    return (
        <Filter>
            <SearchContainer>
                <SearchMagnifier/>
                <SearchInput
                    value={filter.typed} 
                    onChange={(e) => handleInputChange(e.target.value, filter, setFilter,users,data, setData)}
                />
            </SearchContainer>
            <UserContainer>
                {users.map(user => (
                    <UserAvatarFilter
                        border={filter.selected.includes(user.id) ? "2px solid #1d0eff" : "0px"}
                        onClick={() => handleUserIcon(user.id, data, users, setData, filter, setFilter)}
                        key={user.id} 
                        userAvatar={user.avatarUrl} 
                    />
                ))}
            </UserContainer>
            {filter.selected.length ? <ClearAll onClick={() => handleClear(data, users, setData, setFilter)}>Clear All</ClearAll> : ""}
        </Filter>
    )
}

export default Filters;
import { useState, useEffect } from "react";
import fetchData from "./api";

const useModalState = () => {
    const [modal, setModal] = useState({
        visibility: false,
        issueId: 0,
        type: "",
    });

    return {
        modal,
        setModal,
    };
};

const useDataSet = () => {
    const [data, setData] = useState({
        issues: [],
        originalIssues: [],
        users: [],
    });
    const makeRequest = () => {
        fetchData("project").then((project) => setData({
            issues: project.issues, 
            users: project.users, 
            originalIssues: project.issues
        }));
    };

    useEffect(() => {
        makeRequest();
    }, []);

    return {
        data,
        setData,
    };
};

export { useDataSet, useModalState };

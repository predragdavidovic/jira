import React, { useState } from "react";
import { TypeIcon } from "../../../../shared/components/Icon/index.jsx";
import { handleSearch } from "../../../../shared/utils/search.js";
import {
    SearchIssues,
    SearchHolder,
    SearchDiv,
    Search,
    Icon,
    Header,
    Task,
    TaskIcon,
    Description,
    DescriptionText,
    DescriptionNumber,
    Close,
    CloseButton,
} from "./Styles.js";

const SearchIssue = ({ data: { issues }, setModal }) => {
    const [stateIssues, setIssues] = useState(issues);
    return (
        <SearchIssues>
            <Close onClick={() => setModal({ visibility: false })}>
                <CloseButton>+</CloseButton>
            </Close>
            <SearchHolder>
                <SearchDiv>
                    <Search
                        onChange={(e) => handleSearch(e, issues, setIssues)}
                        placeholder="Search issues by summary, description..."
                    />
                </SearchDiv>
                <Icon />
            </SearchHolder>
            <Header>Recent Issues</Header>
            {stateIssues.map((issue, index) => (
                <Task
                    key={index}
                    onClick={() =>
                        setModal({
                            visibility: true,
                            issueId: issue.id,
                            type: "task",
                        })
                    }
                >
                    <TypeIcon
                        color={issue.type.toUpperCase()}
                        type={issue.type}
                    />
                    <Description>
                        <DescriptionText>{issue.title}</DescriptionText>
                        <DescriptionNumber>{`${issue.type}-${issue.id}`}</DescriptionNumber>
                    </Description>
                </Task>
            ))}
        </SearchIssues>
    );
};

export default SearchIssue;

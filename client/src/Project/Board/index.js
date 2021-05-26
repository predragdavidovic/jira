import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { IssueStatus } from "../../shared/constants";
import BoardColumn from "./Column";
import { BreadCrumbs } from "../../shared/components/BreadCrumbs";
import { GitHub } from "../../shared/components/GitHub";
import { useDataSet, useActiveUsers } from "../../shared/utils/hooks";
import { useModalState } from "../../shared/utils/hooks";
import Filters from "./Filters";
import { MainBoard } from "./Style";
import { ascending } from "../../shared/utils/javascript";
import LoaderComponent from "../../shared/components/Loader";

const Board = ({data,setData, modal, setModal}) => {
    const handleDrag = ({ destination, source, draggableId }) => {
        const cloneIssues = [...data.issues];
        const destinationStatus = destination.droppableId.toLowerCase();
        const filteredIssues = cloneIssues
            .filter((item) => destinationStatus === item.status)
            .sort(ascending);
        const intactIssues = cloneIssues
            .filter((item) => destinationStatus !== item.status)
            .sort(ascending);

        if (destination.droppableId === source.droppableId) {
            const [deletedIssue] = filteredIssues.splice(source.index, 1);
            const processedIssues = setListPositions(
                filteredIssues,
                destination.index,
                deletedIssue
            );
            const issues = [...intactIssues, ...processedIssues];
            setData({ ...data, issues });
        } else {
            const [deletedIssue] = intactIssues.splice(
                intactIssues.findIndex(
                    (item) => item.id.toString() === draggableId
                ),
                1
            );
            deletedIssue.status = destinationStatus;
            const processedIssues = setListPositions(
                filteredIssues,
                destination.index,
                deletedIssue
            );
            const issues = [...intactIssues, ...processedIssues];
            setData({ ...data, issues });
        }
    };

    const content = data.issues.length ? 
        <>
            <BreadCrumbs items={["Projects", "Jira Project", "Kanban Board"]} />
            <GitHub />
            <Filters 
                data={data} 
                setData={setData} 
                issues={data.issues} 
                users={data.users}
            />
            <DragDropContext onDragEnd={handleDrag}>
                <MainBoard>  
                    {Object.keys(IssueStatus).map((statusType, index) => (
                        <BoardColumn
                            key={statusType}
                            statusType={statusType}
                            issues={data.issues}
                            users={data.users}
                            setModal={setModal}
                            modal={modal}
                        />
                    ))}
                </MainBoard>
            </DragDropContext>
        </> : <LoaderComponent />

    return content;
};

const setListPositions = (issues, destinationPosition, deletedIssue) => {
    issues.splice(destinationPosition, 0, deletedIssue);
    issues.forEach((item, index) => {
        item.listPosition = index;
    });
    return issues;
};

export default Board;

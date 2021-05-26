import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { arrayIntoObject } from "../../../shared/utils/javascript";
import {
    TypeIcon,
    PriorityIcon,
    UserIcon,
} from "../../../shared/components/Icon/index.jsx";
import {
    TaskComponent,
    TaskParagraph,
    TaskDetails,
    PriortyType,
} from "./Style";

const JiraTask = ({ issue, users, statusType, index, setModal, modal }) => {
    const transformedUsers = arrayIntoObject(users);
    return (
        <Draggable
            draggableId={issue.id.toString()}
            key={issue.id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    onClick={() =>
                        setModal({
                            visibility: !modal.visibility,
                            issueId: issue.id,
                            type: "task",
                        })
                    }
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <TaskComponent>
                        <TaskParagraph>{issue.title}</TaskParagraph>
                        <TaskDetails>
                            <PriortyType>
                                <TypeIcon
                                    color={issue.type.toUpperCase()}
                                    type={issue.type}
                                />
                                <PriorityIcon priority={issue.priority} />
                            </PriortyType>
                            <div>
                                {JSON.parse(issue.userIds).map((id) => (
                                    <UserIcon
                                        key={id}
                                        user={transformedUsers[id]}
                                    />
                                ))}
                            </div>
                        </TaskDetails>
                    </TaskComponent>
                </div>
            )}
        </Draggable>
    );
};

export default JiraTask;

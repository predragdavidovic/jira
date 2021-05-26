import { Droppable } from "react-beautiful-dnd";
import { Container, Column, Header } from "./Styled";
import Task from "../Task";

const createColumnName = (statusType) => {
    switch (statusType) {
        case "INPROGRESS":
            return "IN PROGRESS";
        case "SELECTED":
            return "SELECTED FOR DEVELOPMENT";
        default:
            return statusType;
    }
};

const BoardColumn = ({ statusType, issues, users, setModal, modal }) => {
    const issuesByStatus =
        issues &&
        issues.filter((item) => item.status === statusType.toLowerCase());
    const sortedIssues = sortByPosition(issuesByStatus);
    return (
        <Container>
            <Header>
                {createColumnName(statusType)} {sortedIssues.length}
            </Header>

            <Droppable droppableId={statusType}>
                {(provided, snapshot) => (
                    <Column
                        key={statusType}
                        ref={provided.innerRef}
                        style={
                            {
                                // backgroundColor: snapshot.isDraggingOver ? "yellow" : "red",
                            }
                        }
                        {...provided.droppableProps}
                    >
                        {sortedIssues.map((issue, index) => (
                            <Task
                                key={issue.id}
                                statusType={statusType}
                                issue={issue}
                                users={users}
                                index={index}
                                setModal={setModal}
                                modal={modal}
                            />
                        ))}
                        {provided.placeholder}
                    </Column>
                )}
            </Droppable>
        </Container>
    );
};

const sortByPosition = (issues) =>
    issues.sort((a, b) => a.listPosition - b.listPosition);

export default BoardColumn;

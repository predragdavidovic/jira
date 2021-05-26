import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Formik, Form, Field } from "formik";
import { Input, Checkbox, Select } from "../../FormFields";
import { TypeIcon } from "../../../../shared/components/Icon/index.jsx";
import { Item, Label } from "../../FormFields/Styles.js";
import { CreateModal, Header, Title, ControlButtons, Button } from "./Styles";

const Edit = ({
    data: { users, issues, originalIssues },
    setData,
    modal: { issueId },
    setModal,
}) => {
    const currentIssue = issues.filter((item) => item.id == issueId)[0];
    const [issueType, setIssueType] = useState(currentIssue.type);
    const parsedUsers = JSON.parse(currentIssue.userIds);
    return (
        <CreateModal>
            <Header>
                <TypeIcon color={issueType.toUpperCase()} type={issueType} />
                <Title> {`${issueType}-${currentIssue.id}`}</Title>
            </Header>
            <Formik
                initialValues={{
                    type: currentIssue.type,
                    title: currentIssue.title,
                    description: currentIssue.description,
                    reporter: parsedUsers[0],
                    assagnie: parsedUsers[1],
                    priority: currentIssue.priority,
                }}
                onSubmit={(values) => {
                    const updatedItem = {
                        ...currentIssue,
                        title: values.title,
                        userIds: JSON.stringify([
                            values.reporter,
                            values.assagnie,
                        ]),
                        description: values.description,
                        type: values.type,
                        priority: values.priority,
                        shortSummary: values.shortSummary || "",
                    };

                    const updatedIssues = issues.map((item, index) =>
                        item.id === issueId ? updatedItem : item
                    );
                    setData({ issues: updatedIssues, originalIssues, users });
                    setModal({ visibility: false });
                }}
            >
                <Form>
                    <Select
                        label="Issue type"
                        name="type"
                    >
                        <option value="task">Task</option>
                        <option value="bug">Bug</option>
                        <option value="story">Story</option>
                    </Select>
                    <Input label="Short Summary" name="title" type="text" />
                    <Item>
                        <Label>{"Description"}</Label>
                        <Field name="description">
                            {({ field }) => (
                                <ReactQuill
                                    value={field.value}
                                    onChange={field.onChange(field.name)}
                                />
                            )}
                        </Field>
                    </Item>
                    <Select label="Reporter" name="reporter">
                        {users.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                    <Select label="Assagnie" name="assagnie">
                        {users.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                    <Select label="Issue priority" name="priority">
                        <option value="4">Highest</option>
                        <option value="3">High</option>
                        <option value="2">Low</option>
                        <option value="1">Lowest</option>
                    </Select>
                    <ControlButtons>
                        <Button
                            type="submit"
                            background="#0153cb"
                            color="#fff"
                            type="submit"
                        >
                            Update Issue
                        </Button>
                        <Button
                            type="submit"
                            background="transparent"
                            color="#50606e"
                            onClick={() => setModal({ visibility: false })}
                        >
                            Cancel
                        </Button>
                    </ControlButtons>
                </Form>
            </Formik>
        </CreateModal>
    );
};

export default Edit;

import React from "react";
import { Formik, Form, Field } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Input, Checkbox, Select } from "../../FormFields";
import { Item, Label } from "../../FormFields/Styles.js";

import { CreateModal, Header, Title, ControlButtons, Button } from "./Styles";

const Create = ({ data, setData, setModal }) => {
    let newListPosition;
    const { users, issues } = data;
    const backlogIssues = issues.filter((issue) => issue.status === "backlog");

    if (!backlogIssues.length) {
        newListPosition = "1";
    } else {
        const lastItemInBacklog = backlogIssues[backlogIssues.length - 1];
        newListPosition = (
            parseInt(lastItemInBacklog.listPosition) + 1
        ).toString();
    }

    return (
        <CreateModal>
            <Header>
                <Title>Create issue</Title>
            </Header>
            <Formik
                initialValues={{
                    type: "task",
                    title: "",
                    description: "",
                    reporter: "444",
                    assagnie: "123",
                    priority: "1",
                    userIds: "[]",
                }}
                onSubmit={(values) => {
                    const newIssue = {
                        id: new Date().getTime().toString().slice(6),
                        priority: values.priority.toString(),
                        listPosition: newListPosition,
                        status: "backlog",
                        title: values.title,
                        description: values.description,
                        type: values.type,
                        userIds: JSON.stringify([
                            values.assagnie,
                            values.reporter,
                        ]),
                    };

                    issues.push(newIssue);
                    setData({ ...data, issues, users });
                    setModal({ visibility: false });
                }}
            >
                <Form>
                    <Select label="Issue type" name="type">
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
                    <Select name="reporter" name="reporter">
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
                            Create Issue
                        </Button>
                        <Button
                            background="transparent"
                            color="#50606e"
                            onClick={() => {
                                setModal({ visibility: false });
                            }}
                        >
                            Cancel
                        </Button>
                    </ControlButtons>
                </Form>
            </Formik>
        </CreateModal>
    );
};

export default Create;

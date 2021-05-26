import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Input, Checkbox, Select } from "../../shared/components/FormFields";
import { Item, Label } from "../../shared/components/FormFields/Styles.js";
import { BreadCrumbs } from "../../shared/components/BreadCrumbs";
import { SettingsForm, Header, Button } from "./Styled.js";

const ProjectDetails = () => {
    return (
        <SettingsForm>
            <Formik
                initialValues={{
                    name: "",
                    url: "",
                    description: "",
                    acceptedTerms: false,
                    jobType: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form style={{ width: "100%", maxWidth: "640px" }}>
                    <BreadCrumbs
                        items={["Projects", "Jira Project", "Project Details"]}
                    />
                    <Header>Project Details</Header>
                    <Input label="Short Summary" name="name" type="text" />
                    <Input label="Short Summary" name="URL" type="text" />
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
                    <Select label="Job Type" name="jobType">
                        <option value="">Select a job type</option>
                        <option value="designer">Designer</option>
                        <option value="development">Developer</option>
                        <option value="product">Product Manager</option>
                        <option value="other">Other</option>
                    </Select>

                    <Button type="submit">Save changes</Button>
                </Form>
            </Formik>
        </SettingsForm>
    );
};

export default ProjectDetails;

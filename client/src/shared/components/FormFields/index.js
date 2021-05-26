import { useField, Field } from "formik";
import ReactQuill from "react-quill";
import { Item, Label, InputElement, SelectElement } from "./Styles";

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Item>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <InputElement className="text-input" {...field} {...props} />
        </Item>
    );
};

const Checkbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <div>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    if (props.setIssueType) {
        props.setIssueType(meta.value);
    }
    return (
        <Item>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <SelectElement {...field} {...props} />
        </Item>
    );
};

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);        
    return (
        <Item>
            <Label>{label}</Label>
            <Field name="description">
                {({ ...field }) => <ReactQuill value={field.value} />}
            </Field>
        </Item>
    );
};

export { Input, Checkbox, Select, TextArea };

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: props.description };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ text: value });
    }

    handleSubmit() {
        return this.state.text;
    }

    render() {
        return (
            <ReactQuill
                value={this.state.text}
                onChange={this.handleChange}
                theme="snow"
            />
        );
    }
}

export default TextArea;

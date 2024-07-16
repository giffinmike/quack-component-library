import React, { useState } from 'react';
import './Form.module.css';
const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("input", { type: "text", name: "name", placeholder: "Name", onChange: handleChange }),
        React.createElement("input", { type: "email", name: "email", placeholder: "Email", onChange: handleChange }),
        React.createElement("button", { type: "submit" }, "Submit")));
};
export default Form;
//# sourceMappingURL=Form.js.map
import React from 'react';
import './Form.module.css';
interface FormProps {
    onSubmit: (formData: {
        [key: string]: any;
    }) => void;
}
declare const Form: React.FC<FormProps>;
export default Form;
//# sourceMappingURL=Form.d.ts.map
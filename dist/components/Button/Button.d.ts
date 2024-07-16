import React, { ReactNode } from 'react';
import './Button.module.css';
interface ButtonProps {
    label?: string;
    onClick: () => void;
    className?: string;
    children?: ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map
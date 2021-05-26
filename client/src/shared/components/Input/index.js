import { useField } from "formik";
import { InputContainer, InputElement, StyledIcon } from "./Styles";

const Input = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <InputContainer>
            {icon && <StyledIcon type={icon} size={15} />}
            <InputElement className="text-input" {...field} {...props} />
        </InputContainer>
    );
};

export default Input;

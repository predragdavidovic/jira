import { useField } from "formik";
import { SelectContainer, SelectElement, StyledIcon } from "./Styles";
// import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core"'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />
import "./st.css";

const Select = ({ items = [], label, icon, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <SelectContainer className="fa">
            {/* {icon && <StyledIcon type={icon} size={15}/>} */}
            {/* <i className="fas fa-heart"></i> */}
            <SelectElement {...field} {...props}>
                {items.map((item) => (
                    <option
                        className="fas fa-heart"
                        key={item.id}
                        value={item.id}
                    >
                        {item.label || item.name}
                    </option>
                ))}
            </SelectElement>
        </SelectContainer>
    );
};

export default Select1;

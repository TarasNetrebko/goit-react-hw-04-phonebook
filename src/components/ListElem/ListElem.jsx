import { ContactElement, Button } from "./ListElem.styled"
import PropTypes from "prop-types"

export const ListElem = ({contactId, name, number, onDelete }) => {
    return(<ContactElement>
        <span>{name}: {number}</span>
        <Button type="button" id={name} onClick={() => onDelete(contactId)}>Delete</Button>
    </ContactElement>)
}

ListElem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

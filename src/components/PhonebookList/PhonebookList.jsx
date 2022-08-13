import { List, Li } from './PhonebookList.styled';
import { ListElem } from '../ListElem/ListElem';
import PropTypes from 'prop-types';

export const PhonebookList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <Li key={id}>
          <ListElem contactId={id} name={name} number={number} onDelete={onDelete} />
        </Li>
      ))}
    </List>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ),
    onDelete: PropTypes.func.isRequired
};

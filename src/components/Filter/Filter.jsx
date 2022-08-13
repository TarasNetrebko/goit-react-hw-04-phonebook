import { LabelFilter, Input } from '../PhonebookForm/PhonebookForm.styled';
import PropTypes from 'prop-types';

export const Filter = ({value, onChange}) => (
  <LabelFilter>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </LabelFilter>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
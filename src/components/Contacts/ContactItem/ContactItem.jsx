import propTypes from 'prop-types';
// import defaultImage from '../../images/default.png';
import {
  ItemWrapper,
  Image,
  Name,
  Number,
  FlexContact,
  Button,
} from './contactItem.styled';
// import { deleteIcon } from '../../images/delete';
// import { Accordion } from 'react-bootstrap';

const ContactItem = ({ contact, deleteFunction }) => {
  const { id, name, phone, avatar } = contact;

  return (
    <>
      <ItemWrapper>
        <Image src={avatar} alt={name} />
        <FlexContact>
          <Name>{name}</Name>

          <Number href={`tel:${phone}`}>Call</Number>

          <Button type="button" onClick={() => deleteFunction(id)}>
            X
          </Button>
        </FlexContact>
      </ItemWrapper>
    </>
  );
};

ContactItem.propTypes = {
  contact: propTypes.object.isRequired,
  deleteFunction: propTypes.func.isRequired,
};
export default ContactItem;

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
      {/* <Accordion.Item eventKey={id}>
        <Accordion.Header> */}
      <ItemWrapper>
        <Image src={avatar} alt={name} />
        <FlexContact>
          <Name>{name}</Name>

          <Number href={`tel:${phone}`}>Call</Number>
          <p>
            <Button type="button" onClick={() => deleteFunction(id)}>
              X
            </Button>
          </p>
        </FlexContact>
      </ItemWrapper>
      {/* </Accordion.Header>
        <Accordion.Body> */}
      {/* <p>{email}</p>
      <p>{company}</p>

      <p>
        Delete contact
        <Button type="button" onClick={() => deleteFunction(id)}>
          -
        </Button>
      </p> */}
      {/* </Accordion.Body>
      </Accordion.Item> */}
    </>
  );
};

ContactItem.propTypes = {
  contact: propTypes.object.isRequired,
  deleteFunction: propTypes.func.isRequired,
};
export default ContactItem;

import propTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
// import defaultImage from '../../images/default.png';
import CloseIcon from '@mui/icons-material/Close';
import {
  ItemWrapper,
  Image,
  Name,
  Number,
  FlexContact,
} from './contactItem.styled';

const ContactItem = ({ contact, deleteFunction }) => {
  const { id, name, phone, avatar } = contact;

  return (
    <>
      <ItemWrapper>
        <Image src={avatar} alt={name} />
        <FlexContact>
          <Name>{name}</Name>

          <Number href={`tel:${phone}`}>
            <IconButton size="small" color="success">
              <CallIcon fontSize="large" />
            </IconButton>
          </Number>

          <IconButton
            size="small"
            style={{ position: 'absolute', top: '5px', right: '5px' }}
            onClick={() => deleteFunction(id)}
            sx={{ color: 'red' }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
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

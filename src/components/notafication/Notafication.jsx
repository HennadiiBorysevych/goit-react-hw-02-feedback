import { NotaficationBox, NotaficationText } from './Notafication.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <NotaficationBox>
      <NotaficationText>{message}</NotaficationText>
    </NotaficationBox>
  );
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

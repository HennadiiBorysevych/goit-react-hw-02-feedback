import { FeedbackSection, Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

import { FeedbackSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
};
export default Section;

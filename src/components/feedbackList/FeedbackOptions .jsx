import React from 'react';
import {
  OptionsList,
  OptionItem,
  OptionButton,
} from './FeedBackOptions.styled';
class FeedbackOptions extends React.Component {
  render() {
    const { btns, onLeaveFeedback } = this.props;
    return (
      <OptionsList>
        {btns.map(btn => (
          <OptionItem key={btn}>
            <OptionButton name={btn} onClick={onLeaveFeedback}>
              {btn}
            </OptionButton>
          </OptionItem>
        ))}
      </OptionsList>
    );
  }
}
export default FeedbackOptions;

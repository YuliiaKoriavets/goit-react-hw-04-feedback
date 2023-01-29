import { ButtonList, ButtonItem, RatingButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem key={option}>
          <RatingButton type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </RatingButton>
        </ButtonItem>
      ))}
    </ButtonList>
  );
}

import { SectionWrapper, TitleSection } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionWrapper>
  );
}

import React from 'react';
import useInView from '../../hooks/useInView';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CenteredDiv, SkillIcon } from './TechnologiesStyles';

const Technologies = () => {
  const isVisible = useInView({ threshold: 0.0 });

  return (
    <Section id="tech">
      <SectionTitle>Skills</SectionTitle>
      <SectionDivider />
      <SectionText>
        I've worked with a range of Technologies in the world of web development
        from back-end to frontend
      </SectionText>
      <CenteredDiv>
        <SkillIcon isVisible={isVisible} src="/images/html.png" />
        <SkillIcon isVisible={isVisible} src="/images/css.png" />
        <SkillIcon isVisible={isVisible} src="/images/react.png" />
        <SkillIcon isVisible={isVisible} src="/images/redux.png" />
        <SkillIcon isVisible={isVisible} src="/images/node.png" />
        <SkillIcon isVisible={isVisible} src="/images/sass.png" />
        <SkillIcon isVisible={isVisible} src="/images/figma.png" />
        <SkillIcon isVisible={isVisible} src="/images/typescript.png" />
        <SkillIcon isVisible={isVisible} src="/images/git.png" />
        <SkillIcon isVisible={isVisible} src="/images/mu5.png" />
        <SkillIcon isVisible={isVisible} src="/images/python.png" />
        <SkillIcon isVisible={isVisible} src="/images/api.png" />
      </CenteredDiv>
      {/* <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            <img src="/images/html.png" alt="html" width={40} height={60} />
            <img src="/images/css.png" alt="html" width={40} height={60} />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs, ExpressJs, Websockets, Rest API
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List> */}
    </Section>
  )
}

export default Technologies;

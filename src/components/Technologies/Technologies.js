import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CenteredDiv, SkillIcon } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionTitle>Skills</SectionTitle>
    <SectionDivider />
    <SectionText>
      I've worked with a range of Technologies in the world of web development
      from back-end to frontend
    </SectionText>
    <CenteredDiv>
      <SkillIcon src="/images/html.png" />
      <SkillIcon src="/images/css.png" />
      <SkillIcon src="/images/react.png" />
      <SkillIcon src="/images/redux.png" />
      <SkillIcon src="/images/node.png" />
      <SkillIcon src="/images/sass.png" />
      <SkillIcon src="/images/figma.png" />
      <SkillIcon src="/images/typescript.png" />
      <SkillIcon src="/images/git.png" />
      <SkillIcon src="/images/mu5.png" />
      <SkillIcon src="/images/python.png" />
      <SkillIcon src="/images/api.png" />
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
);

export default Technologies;

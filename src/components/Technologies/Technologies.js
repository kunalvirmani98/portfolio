import React from 'react';
import useInView from '../../hooks/useInView';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { CenteredDiv, SkillIcon, SkillIconContainer } from './TechnologiesStyles';

import { skills } from '../../constants/constants';

const Technologies = () => {
  const isVisible = useInView({ threshold: 0.0, elementId: 'tech' });

  return (
    <Section id="tech">
      <SectionTitle main>Skills</SectionTitle>
      <SectionText>
        Although I have experience with a range of technologies from frontend to backend, my core expertise is in frontend development, and my skills include:
      </SectionText>
      <CenteredDiv>
        {
          skills.map((skill) => {
            return (
              <SkillIconContainer key={skill.skill_name} isVisible={isVisible}>
                <SkillIcon src={skill.img_src} alt="skill_image" />
                <div className='name'>{skill.skill_name}</div>
                <div className='description'>{skill.description}</div>
              </SkillIconContainer>
            )
          })
        }
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

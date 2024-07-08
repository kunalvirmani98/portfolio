import React from 'react';
import useInView from '../../hooks/useInView';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const isVisible = useInView({ threshold: 0.1, elementId: 'projects' });

  return (
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {
          projects.map(({ title, description, image, tags, visit, id }) => (
            <BlogCard key={id} isVisible={isVisible}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              {/* <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {
                    tags.map((tag, id) => (
                      <Tag key={id}>{tag}</Tag>
                    ))
                  }
                </TagList>
              </div> */}
              <UtilityList>
                {/* <ExternalLinks href={visit}>Code</ExternalLinks> */}
              </UtilityList>
            </BlogCard>
          ))
        }
      </GridContainer>
    </Section>
  )
};

export default Projects;
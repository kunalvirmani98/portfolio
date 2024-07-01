import React from 'react';
import Image from 'next/image';
import { MdWavingHand } from 'react-icons/md';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, MaskedImage, StyledImage, Div3, SocialIcons } from './HeroStyles';


const Hero = (props) => {
  const imageUrl = '/images/kunal_virmani_cropped.png';
  const maskUrl = '/images/blob-green.svg';

  return (
    <Section row nopadding style={{ margin: '0px !important' }}>
      <LeftSection>
        <StyledImage src='/images/kunal_virmani.jpeg' />
        <SectionTitle main center>
          Hi {/*<MdWavingHand size="3rem" />*/},<br />
          I'm Kunal, <br />
          Front-end Developer
        </SectionTitle>
        <SectionText>
          {/* Transforming Designs into Engaging Web Experiences using HTML5, CSS3, Javascript, Tyescript
          React, Next, Angular */}
          I design and develop experiences that make people's lives simpler through web apps. I work with Figma, HTML5, CSS3, Javascript,
          React, Next, Angular
        </SectionText>
        <Div3>
          <SocialIcons href="https://github.com/kunalvirmani98">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/kunal-virmani-389411162/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </Div3>
        {/* <Button onClick={() => window.location = "https://google.com"}>
          Learn More
          
        </Button> */}
      </LeftSection>
      {/* <RightSection>
        <MaskedImage src={imageUrl} mask={maskUrl} alt="Masked Image" />
      </RightSection> */}
    </Section>
  );
}

export default Hero;
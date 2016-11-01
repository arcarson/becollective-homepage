// Imports - config
import React from 'react'

// Imports - components
import Hero from '../components/Hero'
import HeroText from '../components/HeroText'
import Inner from '../components/Inner'
import Section from '../components/Section'
import TextBlock from '../components/TextBlock'
import TitleBlock from '../components/TitleBlock'
import FeatureDescription from '../components/FeatureDescription'


// Component
const WhyBeCollective = () => {
  return (
    <div>

      <Hero>
        <HeroText>
          Why be collective?
        </HeroText>
      </Hero>

      <Section>
        <TitleBlock
          sub="We embrace digital connectedness to"
          main="Support community action and social change"
        />

        <TextBlock>
          <p>
            While we are now more digitally connected than ever, we are not nearly as engaged.
            <br />
            Something has to change.
            <br />
            So we created Be Collective - It&apos;s social infrastructure designed to eliminate
            duplication, misdirection and waste of effort, promoting a culture of kindness,
            recognition and support.
          </p>
        </TextBlock>
      </Section>

      <Hero>
        <HeroText>
          Video
        </HeroText>
      </Hero>

      <Section>
        <TitleBlock
          sub="Your gateway to realising your positive social impact"
          main="In the communities where you live, work and play"
        />
      </Section>

      <Section
        color="grey"
      >
        <Inner>
          <FeatureDescription
            image="community.svg"
            title="Be Collective and your community"
            text="With practical tools to help you find opportunities, manage groups of
                  people as well as run events and projects - Be Collective has something for
                  everyone. We have crafted this platform with the whole of the community in mind
                  - with solutions for changemakers across sectors and communities."
          />
        </Inner>
      </Section>

      <Hero>
        <HeroText>
          <em>
            &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
          </em>
          <br />
          ~ Mahatma Gandhi
        </HeroText>
      </Hero>

      <Section
        color="grey"
      >
        <Inner>
          <FeatureDescription
            image="infrastructure.svg"
            title="Imagine what we&apos;d achieve if we worked all together?"
            text="An integrated, networked hub where we can exchange people’s time, skills,
                  knowledge, resources and financial support and channel it to where it matters most."
            reversed
          />
        </Inner>
      </Section>

    </div>
  )
}


export default WhyBeCollective

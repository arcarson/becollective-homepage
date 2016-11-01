// Imports - config
import React from 'react'

// Imports - components
import Button from '../components/Button'
import ButtonList from '../components/ButtonList'
import FeatureButton from '../components/FeatureButton'
import Hero from '../components/Hero'
import HeroText from '../components/HeroText'
import Section from '../components/Section'
import StatList from '../components/StatList'
import TextBlock from '../components/TextBlock'
import TitleBlock from '../components/TitleBlock'
import Inner from '../components/Inner'


// Component
const Home = () => {
  return (
    <div>

      <Hero />

      <Section>
        <TitleBlock
          sub="It's all about"
          main="Doing what we can, when we can"
        />

        <TextBlock>
          <p>
            Be Collective is your digital gateway to helping your community and
            realising your positive social impact. Find volunteer opportunities,
            join groups, run events, manage people and engage new audiences.
            <br />
            Be Collective has something for everyone.
          </p>
        </TextBlock>

        <ButtonList
          buttons={[
            <FeatureButton
              icon="individuals"
              text="Individuals"
            />,
            <FeatureButton
              icon="individuals"
              text="Individuals"
            />,
            <FeatureButton
              icon="individuals"
              text="Individuals"
            />,
            <FeatureButton
              icon="individuals"
              text="Individuals"
            />,
            <FeatureButton
              icon="individuals"
              text="Individuals"
            />,
            <FeatureButton
              icon="individuals"
              text="Individuals"
            />,
          ]}
        />
      </Section>

      <Hero>
        <HeroText>
          Give back to your community
          <br />
          and watch your social record grow.
        </HeroText>
        <Button
          color="green-transparency"
          title="Explore"
        />
      </Hero>

      <Section>
        <TitleBlock
          sub="A verified social record that recognises your contribution"
          main="And creates better pathways to employment"
        />

        <TextBlock>
          <p>
            Be Collective is a platform for action and a tool that asks what you can do
            - not what you can't, and highlights what has been achieved - not what hasn't.
            <br />
            Be Collective is for everybody and there are no barriers to starting your
            journey and having your efforts recorded, verified and celebrated.
            <br />
            A personalised, intuitive experience that makes volunteering more meaningful.
          </p>
        </TextBlock>

        <Button
          title="Download social cv sample"
        />
      </Section>

      <Hero>
        <Inner>
          <StatList
            stats={[
              { label: 'Volunteers', value: '11,469' },
              { label: 'Groups', value: '6,543' },
              { label: 'Events', value: '243' },
              { label: 'Opportunities', value: '4,623' },
            ]}
          />
        </Inner>
      </Hero>

    </div>
  )
}


export default Home

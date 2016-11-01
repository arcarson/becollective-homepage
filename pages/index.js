// Imports - config
import React from 'react'

// Imports - components
import ButtonList from '../components/ButtonList'
import FeatureButton from '../components/FeatureButton'
import Hero from '../components/Hero'
import Section from '../components/Section'
import TextBlock from '../components/TextBlock'
import TitleBlock from '../components/TitleBlock'


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

      Home
    </div>
  )
}


export default Home

import React from 'react'

import Section from './section'
import QA from './qa'

import styles from './faq.module.css'

const qaList = [
  {
    question: 'Question number one',
    answer: 'This is the answer'
  },
  {
    question: 'Question number two. Lets test a longer question length.',
    answer: 'This is the answer'
  },
  {
    question: 'Question number three',
    answer: 'This is the answer'
  },
  {
    question: 'Question number four',
    answer: 'This is the answer'
  },
]

const FAQ = () => {

  return (
    <Section color='sec-dark'>
      <h1>We know you probably have many questions. Here are some FAQ's.</h1>
      <ul className={styles.list}>
        {qaList.map(qa => (
          <QA key={qa.answer} {...qa} />
        ))}
      </ul>
    </Section>
  )
}

export default FAQ
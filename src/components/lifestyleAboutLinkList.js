import React from 'react'

import Link from './lifestyleLink'

import styles from './lifestyleAboutLinkList.module.css'

const links = [
  {
    to: '',
    copy: 'Link to an article'
  },
  {
    to: '',
    copy: 'Link to an article'
  },
  {
    to: '',
    copy: 'Link to an article'
  },
  {
    to: '',
    copy: 'Link to an article'
  }
]
// TODO use a real key when there is real data
const LinkList = () => (
  <ul className={styles.root}>
    {links.map((link, idx) => (
      <Link key={idx} {...link} />
    ))}
  </ul>
)

export default LinkList
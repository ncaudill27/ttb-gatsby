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

const LinkList = () => (
  <ul className={styles.root}>
    {links.map(link => (
      <Link {...link} />
    ))}
  </ul>
)

export default LinkList
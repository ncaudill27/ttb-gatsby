import React from 'react'

import Link from './lifestyleLink'

import styles from './lifestyleAboutLinkList.module.css'

const links = [
  {
    to: 'https://nutritionfacts.org/',
    copy: 'Nutrition Facts'
  },
  {
    to: 'https://nutritionstudies.org/whole-food-plant-based-diet-guide/',
    copy: 'Plant based diet guide'
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
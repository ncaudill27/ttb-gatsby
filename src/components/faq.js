import React from 'react'

import Section from './section'
import QA from './qa'

import styles from './faq.module.css'

const qaList = [
  {
    question: "What's direct patient care (DPC)?",
    answer: "It’s a new twist on practicing medicine the old fashioned way. It's a model to provide medical care in which members pay a flat monthly fee for direct access to a physician. By doing this, the medical care is between patient and physician. DPC has a limited number of memberships available to be able to provide an individualized, boutique type of care.\n\nTelemedicine and direct contact with Dr. Rivera-Caudill via text or telephone is included with membership. Membership contracts are done on a yearly basis in which prices will not change. They can be cancelled with 30 day notice. DPC relies on memberships, not on health insurance."
  },
  {
    question: "Dr. Rivera-Caudill, why did you choose direct patient care (DPC) instead of continuing fee for service?",
    answer: "It’s mostly about time! Or lack of, that is. Lack of time with my patients has been the source of one of my biggest professional frustrations. I’m known for running behind on my schedule and constantly trying to cheat the clock to stay as long as the family needed me. I've always strived to get to the root cause of a diagnosis rather than simply treat the symptoms at hand. But that takes…you guessed it...time! In the end, neither my patients nor I were happy with the time we were allotted.\n\nWhen it came time for me to design my own practice I started with the traditional fee for service practice model in mind. That meant I had more expenses to operate. So to keep my doors open I needed to see a large number of patients per day. Placing me in the same position I've been in for more than 30 years.\n\nGod has granted me an opportunity to make it on my own, so I’m trying to make it better, to make it right. I love what I do and I long to be a Pediatrician—a healer that gets to know her patients and her families and creates an environment of mutual respect and continuity. Adopting the DPC model is a modern approach to practice medicine in an old fashion way.\n\nThrough the DPC I take in as many patients as I feel I can and dedicate time towards each family (30 minutes and sometimes up to 1 hour). Having a smaller number of patients to take care of allows for the opportunity to have direct contact with me and I can even do some house calls."
  },
  {
    question: "What's the waiting time?",
    answer: "There's virtually no waiting time because of the DPC model. In the event of any delays, the patient will be notified. Members can also decide to try to solve the problem through Telemedicine, text or phone."
  },
  {
    question: "Is DPC the same as concierge medicine?",
    answer: "No. Though they are similar in the sense that they are a membership model of care. Concierge medical practices usually bill a higher fee, in addition to the patient’s health insurance for their services. The DPC depends on membership fees to cover its costs and does not charge health insurance for services provided. Most patients find that they can use their insurance to cover labs, radiology, referrals, and hospital admissions."
  },
  {
    question: "Do you accept my insurance?",
    answer: "Due to above mentioned reasons, The Tiny Beet will be able to provide individualized quality of care working directly with the patient as an out-of-network provider.  We do not bill insurance companies for any services provided. There is a set, flat fee for services, unless clearly specified. No copays or unexpected bills."
  },
  {
    question: "Can you tell me more about Lifestyle Medicine (LM)?",
    answer: "Lifestyle Medicine addresses the root cause of disease with evidence-based (scientifically proven) therapies on behaviors such as diet, sleep, social connectivity and stress management  and how these correlate to many chronic illnesses. We believe that children that learn this approach early in life greatly increase their odds to live a long, healthy life as adults.\n\nLM approach is an addition to conventional treatments—like antibiotics or other medications. The Tiny Beet strives to provide its members with personalized education in the pillars of Lifestyle Medicine where a family deems necessary."
  },
  {
    question: "Do you accept patients without insurance?",
    answer: "Absolutely. For many families without insurance one visit to an Emergency Room might prove to be more expensive than a whole year of membership. The Tiny Beet is NOT an Emergency Room or Urgent Care. Dr. Rivera-Caudill is a general pediatrician that will strive to provide the most comprehensive service she can, in addition to deep discounts on diagnostic services."
  },
  {
    question: "Do you require vaccinations?",
    answer: "Yes. Dr. Rivera-Caudill follows all guidelines per American Academy of Pediatrics and CDC Advisory Committee on Immunizations (ACIP)."
  },
  {
    question: "I am ready to be a member! How do I secure my spot?",
    answer: "So glad you’re interested! Schedule a meet and greet with Dr. Caudill on the website. She will go into detail with how the practice works, meet the family, and answer any questions you might have. Once you decide to become a member we’ll send you a link to our EMR portal to register. We’re glad you want to join the bunch!"
  },
  {
    question: "How do I pay?",
    answer: "We accept credit and debit cards or bank drafts. After the contract is signed it will be deducted monthly. Memberships are available as gifts for baby showers or birthdays."
  },
  {
    question: "Is this health insurance?",
    answer: "No it is not. DPC is a membership medical service. We actually advise patients to carry health insurance for situations in which an Emergency Room, expensive medical testing, or hospitalization is required."
  },
  {
    question: "How do I schedule appointments?",
    answer: "Once the contract is signed you will be provided with access to the app and instructions on how to contact Dr. Rivera-Caudill personally. From there you can schedule in person or digital visits. Appointments are scheduled every 30 minutes, based on the family’s need or request."
  },
  {
    question: "But my child is really healthy and only sees the pediatrician for well exams. Where's the benefit in paying a monthly fee for that?",
    answer: "Life happens. During those unpredictable moments the peace of mind that comes from having a pediatrician that knows your child and your family’s individual needs can be priceless.\n\nMany families, even with healthy children, find themselves using the internet for answers that are not always reliable. As a member, you can contact Dr. Caudill directly, who knows your specific situation, and receive personalized advice—potentially avoiding an expensive visit to the ER or Urgent Care. One Urgent Care visit can be  equivalent to months of personalized pediatric care at The Tiny Beet.\n\nThe Tiny Beet members can also be a part of individualized educational meetings based on your child’s age and family’s needs (or in groups, once COVID restrictions subside) addressing mind and body health at no extra cost.\n\nYou might never want to go back to a traditional type of care."
  },
  {
    question: "What if my family is on vacation?",
    answer: "This is actually one of the benefits, The Tiny Beet will be your medical home even if you are out of town. We will do our best to help you from afar via Telemedicine or phone/text. Depending on the nature of the illness, the patient might still need to be seen locally for further evaluation or treatment."
  },
  {
    question: "Can a membership be cancelled?",
    answer: "Yes. A membership can be cancelled at any time with 30 days notice. If you decide to re-enroll later there is a fee of $200 per child. Since we allow a limited number of patients, once we have reached full capacity on memberships, you could lose your spot. Once we are full we will not accept more patients and will open a waiting list for enrollment."
  },
  {
    question: "Will Dr. Rivera-Caudill see my child if they are admitted or in the ER?",
    answer: "Children admitted or seen through the Emergency department will be cared for by their respective specialists, Emergency Room or Hospitalist physicians. She will communicate with them to plan for management once they are discharged."
  },
  {
    question: "Is it Dr. Rivera-Caudill or Dr. Caudill?",
    answer: "I know, I know. It can be confusing. I go by both names although most people know me as Dr. Caudill. Now you are also free to call me Dr. Beet!"
  },
]

const FAQ = () => (
  <Section color='sec-light'>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        We know you probably have many questions. Here are some FAQ's.
      </h1>
      <ul className={styles.list}>
        {qaList.map(qa => (
          <QA key={qa.question} {...qa} />
        ))}
      </ul>
    </div>
  </Section>
)

export default FAQ
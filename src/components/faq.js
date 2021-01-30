import React from 'react'

import Section from './section'
import QA from './qa'

import styles from './faq.module.css'

const qaList = [
  {
    question: "What's direct patient care (DPC)?",
    answer: "It's a model to provide medical care in which patients pay a fair monthly flat fee for direct access to a physician. By doing this the medical care is between patient and physician. DPC has a limited number of memberships available to be able to provide individualized, boutique-type of care. Telemedicine and direct contact with Dr Rivera-Caudill via text or telephone is included with membership.  DPC relies on memberships, not on health insurance."
  },
  {
    question: "Can you tell me more about why Dr Rivera-Caudill  chose to do  Direct Patient Care (DPC) instead of continuing to practice traditional medicine?",
    answer: "It’s mostly about time! It’s scarcity that is. Lack of time with my patients has been the source of one of my biggest professional frustrations. I’m known for running behind on my schedule, because I was “robbing Peter to pay Paul”. Constantly trying to cheat the clock to be able to stay as much time as the family needed me to be. I've always strived to get to the root cause of a diagnosis, not just to treat the symptoms at hand, but that takes … you guessed it ...time! In the end neither my patients nor I were happy with the time we were allotted. When it came time for me to design my own practice I started with the traditional practice model in mind. But it became very clear that if I accepted health insurance, I would have to hire a lot more personnel to keep up with the insurance companies requirements, in order for my business to be sustainable. That meant I had more expenses to operate, so to keep my doors open I needed to see a large number of patients. Hence, that would place me in the same position I've been for more than 30 years. God has granted me an opportunity to make it on my own, so I want to try to make it better, to make it right.  I love what I do and I long to be a Pediatrician, a healer that gets to know her patients and her families and creates an environment of mutual respect and continuity.  Adopting the DPC model is a modern approach to practice medicine in an old fashion way. Not long ago physicians had direct contact with their patients, knew their families and at times they were considered to be a part of. Having a smaller number of patients to take care of allows  the opportunity to have direct contact with me via telephone, text or email. I can even do some house calls. I am cognizant of the fact that I would not be able to provide care to everyone that wants to see me, but I could never be able to do so, regardless of the model I practice. With DPC I will be able to provide the best care I possibly can. In addition to being more involved in community  service to the Savannah family at large, through various activities geared towards education on healthy living."
  },
  {
    question: "What's the waiting time?",
    answer: "There's virtually no waiting time.  In the event that something comes up, the patient will  be notified. Parents can also decide to try to solve the problem through electronic services like  Telemedicine, text or phone."
  },
  {
    question: "Is DPC the same as Concierge medicine?",
    answer: "No,  though they are similar in the sense that they are a membership model of care. Concierge medical practices usually bill a higher fee, in addition to the patients health insurance for covered services. The DPC depends on membership fees to cover its costs and does not involve health insurance."
  },
  {
    question: "Do you accept my insurance?",
    answer: "Due to above mentioned reasons, The Tiny Beet will be able to provide individualized quality of care working directly with the patient and an out-of-network provider.  We do not bill insurance companies for any services provided. There is a set, flat fee for services, unless clearly specified. No copays or unexpected bills. You might want to opt to have a high deductible PPO. Send out  labs can be sent to be paid by insurance."
  },
  {
    question: "Can you tell me more about Lifestyle Medicine (LM)?",
    answer: "Lifestyle Medicine addressed the root cause of disease with evidence-based therapies in lifestyle behaviors such as diet, sleep, social connectivity and stress. This does not mean that the LM approach goes against the use of conventional treatments like medications, it’s rather in addition to. \nThe Tiny Beet strives to provide its members with personalized education in the areas the families deem necessary."
  },
  {
    question: "Do you accept patients without insurance?",
    answer: "Absolutely!  For many families without insurance one visit to an Emergency Room might prove to be more expensive than a whole year of membership. The Tiny Beet is not NOT an Emergency Room, or Urgent Care, Dr Rivera-Caudill is a general pediatrician that will strive to provide the most comprehensive service she can, in addition to deep discounts on diagnostic services."
  },
  {
    question: "How do I pay?",
    answer: "We accept credit and debit cards or bank drafts. After the contract is signed it will be deducted monthly."
  },
  {
    question: "Is this health insurance?",
    answer: "No it is not. DPC is a membership medical service. We actually advise patients to carry health insurance for situations in which an Emergency Room, expensive medical testing or hospitalization is required."
  },
  {
    question: "How do I schedule appointments?",
    answer: "Once the contract is signed you will be provided with access to the app and instructions on how to contact Dr. Rivera-Caudill’s  personally. From there you can schedule physical or electronic visits. \nAppointments are scheduled every 30 to 60 minutes, based on family’s need or request."
  },
  {
    question: "But my child is really healthy and only sees the pediatrician for well exams. \nWhere's the benefit in paying a monthly fee for that?",
    answer: "It is a blessing to have a child that seldom needs a doctor, but even in those circumstances life happens. In those unpredictable moments, having the peace of mind of the advice of a pediatrician that knows your child and your family’s individual needs can be priceless. Many families even with healthy children find themselves using internet searches for answers that are not always a reliable source. Also we might be able to avoid a visit to an Urgent Care or Emergency Room, which could be the equivalent of months of personalized TTB care. There's also the no waiting time factor in a waiting room. \n\nIn addition by being part of TTB you could be part at no extra cost of educational meetings individualized (or in groups once COVID restrictions subside) to your childs age and family’s needs addressing mind and body health at no extra cost. \n\nYou might never want to go back to a traditional type of care."
  },
  {
    question: "What if my family is on vacation?",
    answer: "This is actually one of the benefits, The Tiny Beet will be your medical home even if you are out of town. We will do our best to help you from afar, depending on the nature of illness the patient still might need to be seen locally, for further evaluation or treatment."
  },
  {
    question: "What happens if Dr. Rivera-Caudill goes on vacation or gets ill?",
    answer: "The Tiny Beet strives to provide the most comprehensive quality pediatric care. We will keep our members informed of planned or unforeseen  circumstances  when they arise. For the most part Dr Rivera-Caudill will continue electronic communication in cases of a short absence from town. If the time away is prolonged she will arrange to have coverage."
  },
  {
    question: "Can a membership be cancelled?",
    answer: "Yes. A membership can be cancelled with 30 days notice. Though, if you change your mind,  there is a re-enrollment fee of $200 per child. In addition since we allow a limited number of patients, once we have a full panel you could lose your spot. Once we are full, we will not accept more patients, and we will open a waiting list for enrollment."
  },
  {
    question: "What services are not covered in the membership?",
    answer: "The list can be seen on the website. It includes cosmetic procedures like ear piercing. The Tiny Beet is a general pediatrics office, not an Emergency Room. We do not have the resources or expertise to provide Emergency care."
  },
  {
    question: "Will Dr. Rivera-Caudill see my child be admitted or has to go to the Emergency room?",
    answer: "Children  admitted or seen through the Emergency department,  will be cared for by their respective specialists. Emergency Room or Hospitalist physicians.  She will communicate with them to plan for management once they are discharged."
  }
]

const FAQ = () => (
  <Section color='sec-dark'>
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
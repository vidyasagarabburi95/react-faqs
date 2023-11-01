// Faqs.js
import {Component} from 'react'

import FaqItem from '../FaqItem' // Correct the import path

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-con">
        <div className="second-bg-con">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(faq => (
              <FaqItem
                key={faq.id}
                questionText={faq.questionText} // Pass questionText as a prop
                answerText={faq.answerText} // Pass answerText as a prop
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

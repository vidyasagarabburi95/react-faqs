// FaqItem.js
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {
    isAnswerVisible: false,
  }

  toggleImage = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }))
  }

  renderAnswer = () => {
    const {isAnswerVisible} = this.state
    const {answerText} = this.props // Get answerText from props
    if (isAnswerVisible) {
      return (
        <div className="answer-container">
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderImage = () => {
    const {isAnswerVisible} = this.state
    const image = isAnswerVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isAnswerVisible ? 'minus' : 'plus'
    return (
      <button
        type="button"
        onClick={this.toggleImage}
        className="toggle-button"
      >
        <img src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {questionText} = this.props // Get questionText from props
    return (
      <li>
        <div className="question-image">
          <h1 className="question-text">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem

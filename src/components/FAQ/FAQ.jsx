import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [userQuestion, setUserQuestion] = useState("");
  const [questions, setQuestions] = useState([]); // Store user-submitted questions

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (userQuestion.trim() !== "") {
      setQuestions([...questions, userQuestion]);
      setUserQuestion(""); // Clear the input field after submission
    }
  };

  const faqData = [
    {
      question: "What is Meal Link?",
      answer: "Meal Link is a platform that connects restaurants, stores, and events with local shelters and food banks to reduce food waste and provide meals to those in need."
    },
    {
      question: "How can I volunteer?",
      answer: "You can sign up on the Volunteer Login page, where you'll be able to provide your details and start helping with food pickups and deliveries."
    },
    {
      question: "Can restaurants donate food?",
      answer: "Yes, restaurants can sign up to donate extra food to local shelters and food banks. Visit the Restaurant Login page for more information."
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleAnswer(index)}
          >
            {item.question}
          </div>
          <div
            className="faq-answer"
            style={{
              maxHeight: activeIndex === index ? `${item.answer.length * 5}px` : "0",
            }}
          >
            {item.answer}
          </div>
        </div>
      ))}

      {/* Section for users to ask a question */}
      <div className="ask-question-box">
        <h3>Have a question? Ask us!</h3>
        <form onSubmit={handleQuestionSubmit}>
          <textarea
            value={userQuestion}
            onChange={handleQuestionChange}
            placeholder="Ask your question here..."
            rows="4"
            required
          />
          <button type="submit">Submit</button>
        </form>

        {questions.length > 0 && (
          <div className="submitted-questions">
            <h4>Submitted Questions:</h4>
            <ul>
              {questions.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;

import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What are the prerequisites for this course?",
      answer: "A basic understanding of JavaScript and web development concepts is recommended, but not required."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, you'll receive a certificate of completion after finishing all course modules and assignments."
    },
    {
      question: "How much time should I dedicate to the course each week?",
      answer: "We recommend dedicating 5-10 hours per week, depending on your prior experience."
    },
    {
      question: "Is the course completely online?",
      answer: "Yes, the course is 100% online and can be accessed from anywhere."
    }
  ];

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Frequently Asked Questions</h3>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
                style={{ fontWeight: '500' }}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

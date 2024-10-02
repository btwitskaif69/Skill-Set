import React from 'react';

export default function FAQ({faqs}) {

  return (
    <div className="container my-5">
      <h3 className="display-6 fw-medium mb-4">Frequently Asked Questions</h3>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item border-bottom" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="fw-semibold accordion-button custom-color collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
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
              <div className="accordion-body" style={{ paddingLeft: "20px" }}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, {useState} from "react";

export default function CourseDescription() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <div className=' container'>
        <div className="display-6 fw-medium" id="scrollspyHeading3">
  Professional Certificate - 9 course series
</div>
<p>
  Looking to kickstart a career in coding and web development? This certificate,
  created by software engineering experts at Meta—the minds behind Facebook and
  Instagram—will set you on the path to becoming a front-end developer.
</p>
<p>In this program, you will master:</p>
<ul>
  <li>
    The basics of coding and crafting interactive web pages with HTML5, CSS,
    and JavaScript.
  </li>
  <li>
    Essential design techniques to build professional-grade layouts using
    popular tools like Bootstrap, React, and Figma.
  </li>
  <li>
    How to manage code with GitHub, work with content management systems (CMS),
    and enhance images using Figma.
  </li>
  <li>
    Tips and strategies to excel in technical interviews for front-end
    developer positions.
  </li>
</ul>

<div
  style={{maxHeight: isExpanded ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 1s ease-in-out, opacity 1s ease', opacity: isExpanded ? '1' : '0'}}>
  {isExpanded && (
    <>
      <p>
        By the program’s conclusion, you’ll apply your skills in a real-world
        project, where you’ll develop a front-end web application from scratch.
        Please note, third-party trademarks, logos, and intellectual property
        referenced remain the property of their respective owners, and
        Coursera’s mention of them does not imply any affiliation or
        endorsement.
      </p>

      <h5>Practical Learning Experience</h5>
      <p>
        This program offers hands-on learning, allowing you to directly apply the
        skills you acquire. Each course concludes with a project to ensure you
        have fully grasped the concepts before moving forward. Across 9 projects,
        you’ll work on tasks such as:
      </p>
      <ul>
        <li>
          Updating your personal Bio page, utilizing your knowledge of HTML5,
          CSS, and UI frameworks.
        </li>
        <li>
          Managing a project on GitHub, employing version control through Git
          repositories and the Linux Terminal.
        </li>
        <li>
          Building a static version of an application, applying concepts of
          React, frameworks, hooks, routing, and bundlers.
        </li>
      </ul>
      <p>
        Finally, you’ll complete a Capstone project, bringing all of your
        newfound skills together to create a fully functioning front-end web
        application.
      </p>
    </>
  )}
</div>

<button
  className="btn btn-primary mb-4"
  onClick={toggleReadMore}
  style={{ backgroundColor: "#210BE3" }}
>
  {isExpanded ? "Read Less" : "Read More"}
</button>
    </div>
  )
}
import React from 'react';

const MetaFrontEndDeveloper = () => {


    const infoItems = [
        { icon: "📚", title: "9 Courses", subtitle: "Comprehensive Series" },
        { icon: "🎓", title: "Beginner", subtitle: "No experience needed" },
        { icon: "⏰", title: "7 Months", subtitle: "6 hours/week" },
        { icon: "👥", title: "304,498", subtitle: "Enrolled students" },
      ];



  const styles = {
    container: {
      padding: '30px',
      maxWidth: '1100px',
      margin: '0 auto',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitle: {
      color: '#6c757d',
      fontSize: '1.1rem',
      textAlign: 'center',
      marginBottom: '20px',
    },
    enrollButton: {
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      padding: '12px 30px',
      fontSize: '1rem',
      borderRadius: '5px',
      display: 'block',
      margin: '20px auto',
      cursor: 'pointer',
    },
    progressBarContainer: {
      backgroundColor: '#e0e0e0',
      borderRadius: '5px',
      height: '5px',
      marginTop: '20px',
      marginBottom: '5px',
      width: '60%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    progressBar: {
      backgroundColor: '#000',
      height: '100%',
      width: '40%',
      borderRadius: '5px',
    },
    enrolledText: {
      color: '#6c757d',
      fontSize: '0.9rem',
      textAlign: 'center',
      marginTop: '5px',
    },
    courseInfoBox: {
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      marginTop: '30px',
      marginBottom: '30px',
      textAlign: 'center',
    },
    infoItem: {
      fontSize: '1rem',
      marginBottom: '10px',
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginTop: '30px',
      marginBottom: '20px',
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
      marginBottom: '10px',
    },
    checkIcon: {
      color: 'green',
      marginRight: '10px',
    },
    skillBadge: {
      backgroundColor: '#f8f9fa',
      color: '#000',
      padding: '5px 10px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      marginRight: '10px',
      marginBottom: '10px',
    },
    skillBadgeContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
    },
    ratingNumber: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginRight: '10px',
    },
    starIcon: {
      color: '#ffc107',
      marginRight: '5px',
    },
    ratingText: {
      fontSize: '1rem',
    },
  };

  return (
    <div className="container" style={styles.container}>


<div>

      {/* Course Information Grid */}
      <div className="row g-3 mt-3">
        {infoItems.map((item, index) => (
          <div key={index} className="col-6 col-md-3 d-flex align-items-center">
            <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3" style={{ fontSize: '24px' }}>
              {item.icon}
            </div>
            <div>
              <p className="fw-semibold mb-0">{item.title}</p>
              <p className="text-muted small">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>





      <div className="container mt-5">
      <div className="row">
        {/* Left Card: What You'll Learn */}
        <div className="col-md-6 d-flex">
          <div className="card h-100 w-100">
            <div className="card-body">
              <h5 className="card-title">What You'll Learn</h5>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Create a responsive website using HTML and CSS</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Use JavaScript to make websites interactive</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Use React to create powerful single-page applications</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Implement version control with Git and GitHub</li>
                <li><i className="bi bi-check-circle-fill text-success me-2"></i>Prepare for technical interviews for front-end developer roles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Card: Skills You'll Gain */}
        <div className="col-md-6 d-flex">
          <div className="card h-100 w-100">
            <div className="card-body">
              <h5 className="card-title">Skills You'll Gain</h5>
              <div className="d-flex flex-wrap">
                <span className="badge bg-light text-dark me-2 mb-2">HTML</span>
                <span className="badge bg-light text-dark me-2 mb-2">CSS</span>
                <span className="badge bg-light text-dark me-2 mb-2">JavaScript</span>
                <span className="badge bg-light text-dark me-2 mb-2">React</span>
                <span className="badge bg-light text-dark me-2 mb-2">Git</span>
                <span className="badge bg-light text-dark me-2 mb-2">Web Development</span>
                <span className="badge bg-light text-dark me-2 mb-2">Front-End Development</span>
                <span className="badge bg-light text-dark me-2 mb-2">UI/UX Design</span>
                <span className="badge bg-light text-dark me-2 mb-2">Responsive Web Design</span>
                <span className="badge bg-light text-dark me-2 mb-2">Web Application Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>








    </div>
  );
};

export default MetaFrontEndDeveloper;

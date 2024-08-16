import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={styles.footer}>
      <section className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h4 className="text-uppercase fw-bold">Skill Set</h4>
            <p>Start your journey now.</p>
            <button className="btn btn-light">Try for Free</button>
            <button className="btn btn-outline-light ms-2">Get a Demo</button>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Company</h6>
            <p><a href="#!" className="text-white">About</a></p>
            <p><a href="#!" className="text-white">Contact</a></p>
            <p><a href="#!" className="text-white">Blog</a></p>
            <p><a href="#!" className="text-white">Terms of Service</a></p>
            <p><a href="#!" className="text-white">Privacy Policy</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Follow Us</h6>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><i className="fab fa-linkedin"></i></a>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><i className="fab fa-x"></i></a>
            <a href="#!" className="btn btn-outline-light btn-floating m-1"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>

      <div className="text-center p-3" style={styles.bottomBar}>
        <p className="mb-0">© 2024. All rights reserved. <a href="#!" className="text-white">Assortium Technologies Pvt. Ltd.</a></p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#000', // Black background color
    color: '#fff', // White text color
    paddingTop: '20px',
    paddingBottom: '20px',
    marginTop: 'auto',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  hr: {
    width: '60px',
    backgroundColor: '#fff', // White color for the horizontal line
    height: '2px',
  },
  bottomBar: {
    backgroundColor: '#111', // Dark grey background
    padding: '1rem 0',
  },
};






// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="text-center text-lg-start text-dark" style={styles.footer}>
//       <section className="d-flex justify-content-between p-4" style={styles.socialSection}>
//         <div className="me-5">
//           <span>Get connected with us on social networks:</span>
//         </div>
//         <div>
//           <a href="/" className="text-dark me-4">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="/" className="text-dark me-4">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="/" className="text-dark me-4">
//             <i className="fab fa-google"></i>
//           </a>
//           <a href="/" className="text-dark me-4">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="/" className="text-dark me-4">
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a href="/" className="text-dark me-4">
//             <i className="fab fa-github"></i>
//           </a>
//         </div>
//       </section>

//       <section>
//         <div className="container text-center text-md-start mt-5">
//           <div className="row mt-3">
//             <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
//               <h4 className="text-uppercase fw-bold">Skill Set</h4>
//               <hr className="mb-4 mt-0 d-inline-block mx-auto" style={styles.hr} />
//               <p>
//                 Here you can use rows and columns to organize your footer
//                 content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit.
//               </p>
//             </div>

//             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold">Products</h6>
//               <hr className="mb-4 mt-0 d-inline-block mx-auto" style={styles.hr} />
//               <p><a href="#!" className="text-dark">MDBootstrap</a></p>
//               <p><a href="#!" className="text-dark">MDWordPress</a></p>
//               <p><a href="#!" className="text-dark">BrandFlow</a></p>
//               <p><a href="#!" className="text-dark">Bootstrap Angular</a></p>
//             </div>

//             <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold">Useful links</h6>
//               <hr className="mb-4 mt-0 d-inline-block mx-auto" style={styles.hr} />
//               <p><a href="#!" className="text-dark">Your Account</a></p>
//               <p><a href="#!" className="text-dark">Become an Affiliate</a></p>
//               <p><a href="#!" className="text-dark">Shipping Rates</a></p>
//               <p><a href="#!" className="text-dark">Help</a></p>
//             </div>

//             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-bold">Contact</h6>
//               <hr className="mb-4 mt-0 d-inline-block mx-auto" style={styles.hr} />
//               <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
//               <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
//               <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
//               <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="text-center p-3" style={styles.bottomBar}>
//         <a className="text-dark" href="https://mdbootstrap.com/">© 2024 Skill Set</a>
//       </div>
//     </footer>
//   );
// }

// const styles = {
//   footer: {
//     backgroundColor: '#f8f9fa', // Light background color
//     marginTop: 'auto',
//     position: 'relative',
//     bottom: 0,
//     width: '100%',
//     paddingTop: '20px',
//     paddingBottom: '20px', // Added bottom padding
//   },
//   socialSection: {
//     backgroundColor: '#007bff', // Primary blue color
//   },
//   hr: {
//     width: '60px',
//     backgroundColor: '#343a40', // Darker color for the horizontal line
//     height: '2px',
//   },
//   bottomBar: {
//     backgroundColor: '#e9ecef', // Light grey background
//   },
// };

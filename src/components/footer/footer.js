import React from "react";
import "./footer.css";

function footer() {
  return (
    <footer>
      {/* <!-- Footer Area Start --> */}
      <section className="footer-Content">
        {/* <!-- Copyright Start  --> */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info float-left">
                  <p>
                    &copy; 2023 - Created by{" "}
                    <a href="https://netlify.app" rel="nofollow">
                      Suraj Kumar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Copyright End --> */}
      </section>
      {/* <!-- Footer area End --> */}
    </footer>
  );
}

export default footer;

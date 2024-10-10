import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col"
               style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.webp"
                 width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col"
               style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link
                           text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/fundies1.jpg"
                 width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2222 Fundies 1 </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Fundamentals of Computer Science 1 </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col"
                style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/fundies2.jpg"
                  width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS2223 Fundies 2 </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Fundamentals of Computer Science 2 </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col"
                style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/algo.png"
                  width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS3241 Algo </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Algorithms and Data Structures </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col"
                style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/programminglanguages.png"
                  width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS4512 Programming Languages </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Programming Languages and Compilers </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col"
                style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/networks.png"
                  width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1515 Networks </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Network Fundamentals </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col"
                style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link
                            text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/discrete.jpg"
                  width="100%" height={160}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1875 Discrete </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Discrete Structures </p>
                  <p className="wd-dashboard-course-title card-text">
                    Fall 2024 Semester Full Term </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

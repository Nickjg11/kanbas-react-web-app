import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2222/Home">
            <img src="/images/fundies1.jpg" width={200} />
            <div>
              <h5>
                 CS2222 Fundies 1
              </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science 1
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2223/Home">
            <img src="/images/fundies2.jpg" width={200} />
            <div>
              <h5>
                 CS2223 Fundies 2
              </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3241/Home">
            <img src="/images/algo.png" width={200} />
            <div>
              <h5>
                 CS3241 Algo
              </h5>
              <p className="wd-dashboard-course-title">
                Algorithms and Data Structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4512/Home">
            <img src="/images/programminglanguages.png" width={200} />
            <div>
              <h5>
                 CS4512 Programming Languages
              </h5>
              <p className="wd-dashboard-course-title">
                Programming Languages and Compilers
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1515/Home">
            <img src="/images/networks.png" width={200} />
            <div>
              <h5>
                 CS1515 Networks
              </h5>
              <p className="wd-dashboard-course-title">
                Network Fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2875/Home">
            <img src="/images/discrete.jpg" width={200} />
            <div>
              <h5>
                 CS1875 Discrete
              </h5>
              <p className="wd-dashboard-course-title">
                Discrete Structures
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

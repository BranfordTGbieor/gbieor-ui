import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "Understanding Agile Project Management",
    img: "img/blog/blog-post-1.png",
    tag: "Management",
    date: { date: "20", month: "Dec", year: "2023" },
    des: [
      "Agile is an iterative approach to project management and software development that focuses on collaboration, customer feedback, and rapid releases.",
      "In an agile approach, some planning and design is done upfront, but the development proceeds in small batches and involves close collaboration with stakeholders. Changes are incorporated continuously and a usable version of a product is often released quicker compared to products developed through the waterfall methodology. This provides many benefits, with arguably the most important being that if software doesn’t meet the needs or expectations of the customer, it  can be remediated in real-time.",
      "Agile is a collection of methodologies, not a single approach to development. It is an aggregation of scrum, eXtreme Programming (XP), and other systems of practice that developers used in years prior, and resulted from those practitioners coming together to unify these approaches into a single set of principles.",
    ],
  },
  {
    title: "Cloud Engineering Career Path",
    img: "img/blog/blog-post-2.png",
    tag: "Development",
    date: { date: "29", month: "Dec", year: "2023" },
    des: [
      "Cloud engineers design, develop, deploy, and monitor cloud systems to provide a secure cloud environment and adequate service availability. They often focus on a single cloud-service provider, such as Azure, Google Cloud Platform, or Amazon Web Services. A cloud engineer should be well-versed in the cloud's software development, scripting languages, and web service architecture.",
      "The cloud engineer education requirements include a bachelor's degree in a scientific field such as Computer Science or IT. Besides that, the following are the essential technical skills that will help you become a successful cloud engineer: Programming Skills, Linux, Networking, Security and Recovery, Storage Skills, Web Services and API, Virtualization, Cloud Service Provider, Let us discuss them in detail",
    ],
  },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "blog" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            latest <span>posts</span>
          </h2>
          <span className="title-head-subtitle">
            tips, insights, and best practices about web design and developpment
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;

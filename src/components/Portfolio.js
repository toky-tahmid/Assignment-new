import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  const [data, setData] = useState({});
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data?.user?.projects[0]?.title);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  React
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                  Nextjs
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  Mern
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Tailwind Css
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[0]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="popup-youtube">
                      <img src={data?.user?.projects[1]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[1]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[1]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="popup-vimeo">
                      <img src={data?.user?.projects[2]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[2]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mern"
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="soundcloude_link mfp-iframe audio">
                      <img src={data?.user?.projects[3]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[3]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src={data?.user?.projects[4]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[4]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[5]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[5]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[6]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[6]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[7]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[7]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[8]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[8]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[9]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[9]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[10]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[10]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[11]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[11]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[12]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[12]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[13]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[13]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title={data?.user?.projects[0].techStack[3]}
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src={data?.user?.projects[14]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[14]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Tailwind Css"
                    data-category={data?.user?.projects[0]?.title}
                  >
                    <a className="portfolio_popup" href="#">
                      <img src={data?.user?.projects[2]?.image.url} />
                      <div
                        className="main"
                        data-img-url={data?.user?.projects[2]?.image.url}
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

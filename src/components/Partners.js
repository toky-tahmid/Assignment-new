import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const Partners = ({ dark }) => {
  const [partners, setPartners] = useState([]);
  console.log(partners);

  useEffect(() => {
    const fetchDataFromJson = async () => {
      const data = await fatchData("/static/partners.json");
      setPartners(data);
    };

    fetchDataFromJson();
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {partners.map((partner, index) => (
                <li
                  className="wow fadeIn"
                  data-wow-duration="1s"
                  key={index}
                  data-wow-delay={`0.${index + 1 * 2}s`}
                >
                  <div className="list_inner">
                    <img
                      src={partner.logo.light}
                      alt="Partner Logo"
                    />
                    <a className="dizme_tm_full_link" href={partner.link} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

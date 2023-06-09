import { Link } from "react-router-dom";
import "./pricingcpStyle.css";

export let Pricingcp = () => {
  return (
    <div>
      <div className="pricing">
        <div className="card-container">
          <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">1 BTC</p>
            <p>- 3 Days -</p>
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to="/contact" className="btn">
              Book
            </Link>
          </div>

          <div className="card">
            <h3>- Suite -</h3>
            <span className="bar"></span>
            <p className="btc">2 BTC</p>
            <p>- 15 Days -</p>
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to="/contact" className="btn">
              Book
            </Link>
          </div>

          <div className="card">
            <h3>- Executive -</h3>
            <span className="bar"></span>
            <p className="btc">3 BTC</p>
            <p>- 25 Days -</p>
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to="/contact" className="btn">
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

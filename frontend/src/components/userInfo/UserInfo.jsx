import { Link } from "react-router-dom";
import "./UserInfo.scss";
import cn from "classnames";
const UserInfo = ({ setProfile, profile }) => {
  return (
    <div className="profile">
      <div className="profile__inner">
        <img
          src="https://avatars.akamai.steamstatic.com/7ee95cb0aca527c8abf6734d3e6e15e0fb1eb4bc_full.jpg"
          alt=""
          className="profile__avatar"
        />
        <Link
          to="#"
          className="profile__close"
          onClick={() => setProfile(!profile)}
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              opacity="0.5"
              d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
              fill="#5b76e1"
            ></path>{" "}
            <path
              d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0607 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
              fill="#5b76e1"
            ></path>{" "}
          </svg>
        </Link>
        <div className="profile__name">
          <h4 className="profile__name-title">NAGETS</h4>
        </div>
        <div className="profile__items">
          <div className="profile__item">
            <p className="profile__item-text">Deposited</p>
            <span>$0.00</span>
          </div>
          <div className="profile__item">
            <p className="profile__item-text">Total won</p>
            <span>$0.00</span>
          </div>
          <div className="profile__item">
            <p className="profile__item-text">Profit</p>
            <span>$0.00</span>
          </div>
        </div>
        <form className="profile__form">
          <label>
            Save your trade url
            <input
              type="text"
              className="profile__trade-input"
              placeholder="Enter your trade url"
            />
            <button className="trade__btn">Сохранить</button>
          </label>
          <label>
            Referral code
            <input
              type="text"
              className="profile__referral-input"
              placeholder="Enter referral code"
            />
            <button className="url__btn">Добавить</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;

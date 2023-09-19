import "./Card.scss";

const Card = ({ price, bidBg, title, subTitle, userBg, userTitle }) => {
  return (
    <div className="bid__item">
      <div className="bid__item-left">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <div className="bid__item-center">
        <img className="bid__card-bg" src={bidBg} alt="bg bid" />
        <span>${price}</span>
      </div>
      <div className="bid__item-right">
        <img className="user__avatar" src={userBg} alt="user avatar" />
        <span className="user__name">{userTitle}</span>
      </div>
    </div>
  );
};

export default Card;

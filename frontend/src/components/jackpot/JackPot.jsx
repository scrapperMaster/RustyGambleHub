import "./JackPot.scss";
import { useEffect, useRef, useState } from "react";
import Roulett from "../roulett/Roulett";
import { jackpotData } from "./TestData";
import Card from "./../card/Card";
const JackPot = () => {
  const ref = useRef();
  const [state, setState] = useState(false);
  const [counter, setCounter] = useState(9);
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    if (state) {
      ref.current.style.animationPlayState = `paused`;
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      //console.log(counter * (100 / 60).toFixed(1), timer);
      if (timer)
        ref.current.style.width = `${counter * (100 / 10).toFixed(1) - 0.1}%`;
      else {
        ref.current.style.width = `calc(100% + 120px)`;
        ref.current.style.animationPlayState = `running`;
        setState(false);
        setCounter(9);
        //setCnt(0);
      }
      return () => clearInterval(timer);
    }
  }, [counter, state]);
  const handleLoad = () => {
    setCounter(59);
  };
  const start = () => {
    if (counter === 9) {
      setState(true);
      setCounter(9);
      setCnt((cnt) => cnt + 1);
    }
    if (state) {
      setCnt((cnt) => cnt + 1);
    } else {
      console.log("HHHH");
    }
  };
  return (
    <div className="jackpot__inner">
      <div className="jackpot__items">
        <div className="jackpot__item">
          <span className="jackpot__item-span">$60051.23</span>
          <p className="jackpot__item-title">Общая сумма</p>
        </div>
        <div className="jackpot__item">
          <span className="jackpot__item-span">$0.00</span>
          <p className="jackpot__item-title">Стоимость депозита</p>
        </div>
        <div className="jackpot__item">
          <span className="jackpot__item-span">%90.10</span>
          <p className="jackpot__item-title">Ваши шансы</p>
        </div>
        <div className="jackpot__item">
          <span className="jackpot__item-span">100/100</span>
          <p className="jackpot__item-title">Всего позиций</p>
        </div>
      </div>
      <div className="jackpot__load">
        <div className="jackpot__load-line" ref={ref}></div>
        <p className="jackpot__stripes-text">
          {state > 0 ? `0:${counter}` : "Ожидание игроков..."}
        </p>
      </div>
      <button className="test" onClick={start}>
        Test JackPot
      </button>
      {cnt > 0 ? (
        <Roulett
          key={jackpotData[cnt - 1].id}
          count={counter}
          cnt={cnt}
          setCnt={setCnt}
        />
      ) : null}
      <div className="jackpot__users-bid">
        {jackpotData.slice(0, cnt).map((data) => (
          <Card
            key={data.id}
            price={data.price}
            bidBg={data.bidBg}
            title={data.title}
            subTitle={data.subTitle}
            userBg={data.userBg}
            userTitle={data.userTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default JackPot;

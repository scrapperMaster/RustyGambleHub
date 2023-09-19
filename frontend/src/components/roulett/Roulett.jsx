import { useEffect, useRef } from "react";
import "./Roulett.scss";
import $ from "jquery";
import { jackpotData } from "./../jackpot/TestData";
const Roulett = ({ cnt, count, setCnt }) => {
  const ref = useRef();
  const listRef = useRef();
  const getRandom = () => {
    let from = 0,
      to = 119,
      n = 120;
    let result = [...Array(to - from + 1).keys()]
      .map((i) => i + from) // range
      .reduce(
        (arr, elt) => (
          arr.splice(Math.random() * (arr.length + 1), 0, elt), arr
        ),
        []
      ) // shuffle
      .slice(0, n);
    return result;
  };
  const jQuerycode = (sum) => {
    const percent = jackpotData
      .slice(0, cnt)
      .map((data) => Math.floor((data.price / sum) * 120));
    console.log(percent, sum);
    for (let i = 0; i < 120; i++) {
      const li = document.createElement("li");
      listRef.current.appendChild(li);
    }
    const random = getRandom();
    let temp = 0;
    for (let i = 0; i < cnt; i++) {
      //console.log(random.slice(temp, percent[i] + 1));
      random.slice(temp, temp + percent[i] + 1).map((data, index) => {
        const imgD = document.createElement("img");
        imgD.src = jackpotData[i].userBg;
        listRef.current.childNodes[data].appendChild(imgD);
      });
      temp += percent[i] + 1;
    }
    //console.log(random);
    for (let i = 0; i < cnt; i++) {}
    $(".window").css({
      right: "0",
    });
    $(".list__fir li").css({
      border: "3px solid #1e1e2b",
      width: "130px",
      height: "130px",
    });
    function selfRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const x = selfRandom(100, 105);
    console.log(x);
    $(".list__fir li:eq(" + x + ")").css({
      border: "3px solid #ffa31a",
    });
    $(".window").animate(
      {
        right: x * 130 + x - 25,
      },
      12000,
      () => setCnt(0)
    );
  };
  useEffect(() => {
    if (count === 0) {
      const priceSum = jackpotData
        .slice(0, cnt)
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue.price,
          0
        );
      const result = jQuerycode(priceSum);
    }
  }, [count]);
  return (
    <>
      <div className="wraperr">
        <div className="arrowup"></div>
        <div className="arrowdown"></div>
        <div className="window" ref={ref}>
          <ul className="list__fir" ref={listRef}></ul>
          <ul className="list">
            {jackpotData.slice(0, cnt).map((data) => (
              <li data-attr={data.id}>
                <img src={data.userBg} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <button className="button" onClick={jQuerycode}>
        Кнопка
      </button> */}
      <div className="win">
        <ul></ul>
      </div>
    </>
  );
};

export default Roulett;

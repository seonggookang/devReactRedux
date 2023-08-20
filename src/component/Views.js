import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux";

// 이 prop으로 count, addSubscriber가 전달됨
// prop을 안 쓰고 구조분해할당
const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <h2>조회수 : {count}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          addView(number);
        }}
      >
        조회하기
      </button>
    </div>
  );
};

const mapStateToProps = ({ view }) => {
  // console.log("views >> ", views);
  return {
    count: view.count,
  };
};

// Function
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()), // 실행코드, Subscribers의 prop으로 들어감
//   };
// };

// Object >> 펑션보다 훨씬 간결함
const mapDispatchToProps = {
  addView: (number) => addView(number), // es6에서는 프로퍼티와 value가 동일하면 생략 가능(인자가 있으면 생략 못함)
};

export default connect(mapStateToProps, mapDispatchToProps)(Views); // 인자들으 리턴값이 Subscribers의 prop으로 들어감

// 좋아요 기능처럼 클릭했을 때 하트에 색깔 들어오고, 다시 클릭했을 때는 색깔이 꺼지는 기능 넣어볼 수 있겠네.

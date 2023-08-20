import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux"; // 파일명 index는 생략 가능

// 이 prop으로 count, addSubscriber가 전달됨
// prop을 안 쓰고 구조분해할당
const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      {console.log(count)}
      <h2>구독자 수 : {count}</h2>
      <button
        onClick={() => {
          addSubscriber();
        }}
      >
        구독하기
      </button>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
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
  addSubscriber, // es6에서는 프로퍼티와 value가 동일하면 생략 가능
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers); // 인자들으 리턴값이 Subscribers의 prop으로 들어감

// 좋아요 기능처럼 클릭했을 때 하트에 색깔 들어오고, 다시 클릭했을 때는 색깔이 꺼지는 기능 넣어볼 수 있겠네.

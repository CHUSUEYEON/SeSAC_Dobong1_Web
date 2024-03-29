const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

export const deposit = () => ({ type: DEPOSIT, payload: payload });
export const withdraw = () => ({ type: WITHDRAW, payload: payload });

const initialState = 0;
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

// const INCREMENT = "counter/INCREMENT";
// const DECREMENT = "counter/DECREMENT";
// import { useRef } from "react";

// const moneyRef = useRef();
// const [money, setMoney] = useState(0);

// const ChangeMoney = () => {
//   setMoney(moneyRef.current.value);
//   moneyRef.current.value = "";
// };

// export const moneyPlus = () => {
//   const moneyRef = useRef();
//   const [money, setMoney] = useState(0);

//   setMoney(moneyRef.current.value);
//   moneyRef.current.value = "";
//   return { type: INCREMENT };
// };
// export const moneyMinus = () => {
//   return { type: DECREMENT };
// };

// export const moneyReducer = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 0;
//     case DECREMENT:
//       return state - 0;
//     default:
//       return state;
//   }
// };

// type generate

// let data = {
//   name: "John",
//   category: "Korean",
//   address: {
//     city: "Calgary",
//     street: "1234 5th Ave",
//     postalCode: "T3K 0B4",
//   },
//   menu: [
//     { name: "pho", price: 10, category: "noodle" },
//     { name: "spring roll", price: 5, category: "appetizer" },
//   ],
// };

// 레스토랑 관련 타입을 직접 생성. why? -> let data의 타입이 분명하게 정의되어 있지 않기 때문에

// 타입을 생성하는 방법에는 두가지가 있다.
// 1. interface
// 2. type
// 큰 차이는 없지만 사용하는 메소드가 다르다.

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  street: string;
  postalCode: string;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

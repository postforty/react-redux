# 리덕스 - 벨로퍼트
## 리덕스 사용 준비
+ npx create-react-app learn-redux
+ yarn add redux
+ 참고: https://react.vlpt.us/redux/03-prepare.html
## 프로젝트 실행
+ yarn start
## 이슈
+ createStore에 취소선과 'createStore' is deprecated와 같은 에러 메시지 발생. import시 다음과 같이 작성하면 해당 이슈가 사라짐.
  + ```import { legacy_createStore as createStore } from "redux";```
## 리액트 리덕스 설치
+ yarn add react-redux

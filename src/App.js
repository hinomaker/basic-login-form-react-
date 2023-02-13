import { useState } from "react";
import "./App.css";
import LoginForm from "./component/LoginForm";

function App() {
  const submitFunction = e => {
    e.preventDefault();
  };
  return (
    <div className="login__info">
      <h1>회원가입</h1>
      <form onSubmit={submitFunction} className="login__form">
        <LoginForm
          inputLabel="email"
          labelName="이메일"
          inputType="email"
          placeholderText="이메일을 입력하세요"
          requiredCondition={true}
        />
        <LoginForm
          inputLabel="password"
          labelName="비밀번호"
          inputType="password"
          placeholderText="비밀번호를 입력하세요"
          requiredCondition={true}
        />
        <LoginForm
          inputLabel="passwordRepeat"
          labelName="비밀번호 재확인"
          inputType="password"
          placeholderText="비밀번호를 다시 입력하세요"
          requiredCondition={true}
        />
        <LoginForm
          inputLabel="name"
          labelName="이름"
          inputType="text"
          placeholderText="이름을 입력하세요"
          requiredCondition={true}
        />
        <LoginForm
          inputLabel="age"
          labelName="나이"
          inputType="number"
          placeholderText="나이를 입력하세요"
          requiredCondition={false}
        />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default App;

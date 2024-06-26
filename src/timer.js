import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);

  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}초</h3>
      <button>1초씩 올리기</button>
    </div>
  );
}

export default TimerComponent;

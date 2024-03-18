function SynteheicEvent() {
  function synteheicEvent(e) {
    console.log(e);
  }
  function printInputValue() {
    // console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={synteheicEvent}>클릭이벤트 콘솔에 찍기 </button>
      <br />
      <input type="text" placeholder="입력" onChange={printInputValue} />
    </div>
  );
}

export default SynteheicEvent;

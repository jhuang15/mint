
export default function PreviewWebsite({ formData }) {

  let selDate= formData.date;
  let newDate = selDate.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$2-$3-$1")
  console.log(newDate)
  CountDownTimer(Date.parse(newDate), 'newcountdown');

  function CountDownTimer(dt, id){
    var end = new Date(dt);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
      var now = new Date();
      var distance = end - now;
        if (distance < 0) {
          clearInterval(timer);
          document.getElementById(id).innerHTML = '0';
          return;
        }
        var days = Math.floor(distance / _day);
        document.getElementById(id).innerHTML = days + ' days ';       
    }
    timer = setInterval(showRemaining, 1000);
  }


  return (
    <main>
      <h2>Preview</h2>
      <p>Welcome to the wedding of {formData.name1} & {formData.name2} 
      <br />
      {formData.data} | {formData.location}
      <br />
      <span id="newcountdown"></span> to go!
      </p>

      
      
    </main>
  );
}
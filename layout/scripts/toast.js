function Main() {
    this.execute = function msg(){
        document.querySelector('#myBtn').onclick=delivered;

      function delivered(){
        alert('your message has been delivered'); 
        document.getElementById('contact-form').reset()
      }
      window.onload= msg;
    }
  }
  new Main().execute();
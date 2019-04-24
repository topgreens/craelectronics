function Main() {
    this.execute = function msg(){
        document.querySelector('#myBtn').onclick=delivered;

      function delivered(){
        alert('your message has been delivered')
      }
      window.onload= msg;
    }
  }
  new Main().execute();
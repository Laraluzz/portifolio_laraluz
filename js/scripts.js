
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    const yi = document.querySelector('.icon i');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
      yi.className='fa-solid fa-x';
    } else {
      x.className = 'navtoggle';
      yi.className='fas fa-bars';
    }
  }


  
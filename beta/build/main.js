document.querySelector('.one').addEventListener('click', () => {
    //remove any
    document.querySelector('.slider').classList.remove('two-slider');
    document.querySelector('.slider').classList.remove('three-slider');
    document.querySelector('.slider').classList.remove('four-slider');
    //remove any bold
    document.querySelector('.two').classList.remove('bold');
    document.querySelector('.three').classList.remove('bold');
    document.querySelector('.four').classList.remove('bold');
    //add hidden
    document.querySelector('#designers').classList.add('hide');
    document.querySelector('#sellers').classList.add('hide');
    document.querySelector('#collections').classList.add('hide');
    //add
    document.querySelector('.slider').classList.add('one-slider');
    document.querySelector('.one').classList.add('bold');
    //remove hidden
    document.querySelector('#listings').classList.remove('hide');
  }); 
  
  document.querySelector('.two').addEventListener('click', () => {
    
    //remove any
    document.querySelector('.slider').classList.remove('one-slider');
    document.querySelector('.slider').classList.remove('three-slider');
    document.querySelector('.slider').classList.remove('four-slider');
    //remove any bold
    document.querySelector('.one').classList.remove('bold');
    document.querySelector('.three').classList.remove('bold');
    document.querySelector('.four').classList.remove('bold');
    //add hidden
    document.querySelector('#listings').classList.add('hide');
    document.querySelector('#sellers').classList.add('hide');
    document.querySelector('#collections').classList.add('hide');
    //add
    document.querySelector('.slider').classList.add('two-slider');
    document.querySelector('.two').classList.add('bold');
    //remove hidden
    document.querySelector('#designers').classList.remove('hide');
  }); 
  
  document.querySelector('.three').addEventListener('click', () => {
    //remove any
    document.querySelector('.slider').classList.remove('one-slider');
    document.querySelector('.slider').classList.remove('two-slider');
    document.querySelector('.slider').classList.remove('four-slider');
    //remove any bold
    document.querySelector('.one').classList.remove('bold');
    document.querySelector('.two').classList.remove('bold');
    document.querySelector('.four').classList.remove('bold');
    //add hidden
    document.querySelector('#listings').classList.add('hide');
    document.querySelector('#designers').classList.add('hide');
    document.querySelector('#collections').classList.add('hide');
    //add
    document.querySelector('.slider').classList.add('three-slider');
    document.querySelector('.three').classList.add('bold');
    //remove hidden
    document.querySelector('#sellers').classList.remove('hide');
  }); 
  
  document.querySelector('.four').addEventListener('click', () => {
    //remove any slider
    document.querySelector('.slider').classList.remove('one-slider');
    document.querySelector('.slider').classList.remove('two-slider');
    document.querySelector('.slider').classList.remove('three-slider');
    //remove any bold
    document.querySelector('.one').classList.remove('bold');
    document.querySelector('.two').classList.remove('bold');
    document.querySelector('.three').classList.remove('bold');
    //add hidden
    document.querySelector('#listings').classList.add('hide');
    document.querySelector('#sellers').classList.add('hide');
    document.querySelector('#designers').classList.add('hide');
    //add-slider
    document.querySelector('.slider').classList.add('four-slider');
    //add-bold
    document.querySelector('.four').classList.add('bold');
    //remove hidden
    document.querySelector('#collections').classList.remove('hide');
  }); 
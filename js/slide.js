export default class Slide{
  constructor(slide, wrapper){
    this.slide = document.querySelector(slide)//class ul
    this.wrapper = document.querySelector(wrapper)// class div
  }

  onStart(event){
    event.preventDefault();
    this.wrapper.addeventListener('mousemove', this.onMove);
  }

  onMove(event){
    console.log('moveu');
  }

  onEnd(event){
    console.log('acabou');
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }

  addSlideEvents(){
    this.wrapper.addeventListener('mousedown', this.onStart);
    this.wrapper.addeventListener('mouseup', this.onEnd);
  }

  bindEvents(){
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init(){
    this.addSlideEvents();
    return this;
  }

}
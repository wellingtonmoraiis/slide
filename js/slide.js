export default class Slide{
  constructor(slide, wrapper){
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  }

  onStart(event){
    event.preventDefault();
  }

  addSlideEvents(){
    this.wrapper.addeventListener('mousedown', this.onStart);
  }

  bindEvents(){
    this.onStart = this.onStart.bind(this);
  }

  init(){
    this.addSlideEvents();
    return this;
  }

}
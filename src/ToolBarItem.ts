module toolBar {

  export class ToolBarItem {
    private __el: HTMLElement;

    constructor(itemElement: HTMLElement) {
      this.__el = itemElement;
      this.__el.addEventListener('click', (e) => {
        this.toggleActiveState();
      });
    }

    private addClass(className: string) {
      this.__el.classList.add(className);
    }
    
    private removeClass(className: string) {
      this.__el.classList.remove(className);
    }

    get enabled() {
      return !this.__el.classList.contains('disabled');
    }

    set enabled(value: boolean) {
      let currentValue: boolean = this.enabled;
      
      if(currentValue === value) {
        return;
      }
      if(value) {
        this.removeClass('disabled');
      } else {
        this.addClass('disabled');
      }
    }

    get activated() {
      return this.__el.classList.contains('active');
    }

    set activated(value: boolean) {
      let currentValue: boolean = this.enabled;

      if(currentValue === value || !this.enabled) {
        return;
      }
      if(value) {
        this.addClass('activate');
      } else {
        this.removeClass('activate');
      } 
    }

    toggleActiveState() {
      this.activated = !this.activated;
    }

    removeFrom(parentElement: HTMLElement) {
      parentElement.removeChild(this.__el);
    }
  }

  //item.enable = false; (a boolean flag)
}
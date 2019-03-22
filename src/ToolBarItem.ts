module toolBar {

  export class ToolBarItem {
    item: ToolBarItem;
    private __el: HTMLElement;

    constructor(itemElement: HTMLElement) {
      this.__el = itemElement;
      this.__el.addEventListener('click', (e) => {
        //TODO ad call to activate or deactivate item
      });
    }

    get enabled() {
      
    }
  }

  //item.enable = false; (a boolean flag)
}
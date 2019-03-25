/// <reference path="ToolBarItem.ts"/>
module toolBar {

  function createToolBarItems(itemElements: NodeList) {
    let items: ToolBarItem[] = [];

    [].forEach.call(itemElements, function(el: HTMLElement, index: number, array: ToolBarItem[]){

      let item: ToolBarItem = new ToolBarItem(el);
      items.push(item); 
    })

    return items;
  };
  export class ToolBar {
    items: ToolBarItem[];
    private __el: HTMLElement;
    constructor(toolBarElement: HTMLElement) {
      this.__el = toolBarElement;

      let itemElements = toolBarElement.querySelectorAll(".toolbar-item");

      this.items = createToolBarItems(itemElements);
    }

    //add element
    add() {
      let span: HTMLElement = document.createElement("span");
      span.className = "toolbar-item";

      this.__el.appendChild(span);
      let item: ToolBarItem = new ToolBarItem(span);
      this.items.push(item);
    }

    //remove element
    remove(index: number) {
      let len: number = this.items.length;
      
      if(index > len || index < 0) {
        throw new Error(`Index is out of range(${0} - ${len})`);
      }
      let item: ToolBarItem | null = this.items[index];
      
      this.items.splice(index, 1);
      
      item.removeFrom(this.__el);
      item = null;
    }

    appendTo(parentElement: HTMLElement) {
      parentElement.appendChild(this.__el);
    }
  }

  export function create(elementId: string) {
    let element: HTMLElement | null = document.getElementById(elementId);
    if(!element) {
      element = document.createElement("section");
      element.id = elementId;
    } 
    return new ToolBar(element);
  }
}
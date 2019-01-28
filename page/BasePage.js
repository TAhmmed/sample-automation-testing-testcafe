import { Selector } from 'testcafe';

export class BasePage {
    selectElement(element){
        return Selector(element)
    }

    selectSiblingIndex(element, text, index){
        return this.selectElementWithText(element, text).sibling(index)
    }

    selectElementWithText(element, text){
        return this.selectElement(element).withText(text)
    }
}
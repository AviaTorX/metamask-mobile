import Gestures from '../helpers/Gestures';
import Selectors from '../helpers/Selectors';
import { 
    SEND_ADDRESS_INPUT_FIELD,
    SEND_WARNING_MESSAGE,
    UNDERSTAND_WARNING_CONTINUE,
    ADD_ADDRESS_BUTTON,
    SEND_CANCEL_BUTTON
 } from '../testIDs/Screens/SendScreen.testIds';

 import { 
   AMOUNT_SCREEN,
} from '../testIDs/Screens/AmountScreen.testIds';
class SendScreen{

    get sendAddressInputField (){
       return Selectors.getElementByPlatform(SEND_ADDRESS_INPUT_FIELD);
    }

    get sendWarningMessage (){
        return Selectors.getElementByPlatform(SEND_WARNING_MESSAGE);
     }

     get sendCancelButton (){
        return Selectors.getElementByPlatform(SEND_CANCEL_BUTTON);
     }

     get understandWarningcontinue (){
        return Selectors.getElementByPlatform(UNDERSTAND_WARNING_CONTINUE);
     }

     get amountScreen (){
        return Selectors.getElementByPlatform(AMOUNT_SCREEN);
     }

     get addAddressButton(){
        return Selectors.getElementByPlatform(ADD_ADDRESS_BUTTON);
     }

    async typeAddressInSendAddressField(address){
        await Gestures.typeText(this.sendAddressInputField, address);
    }

    async isSendWarningMessageVisible(message){
        await expect(await (Selectors.getXpathElementByText(message))).toBeDisplayed();
    }

    async isTextVisible(message){
        await expect(await (Selectors.getXpathElementByText(message))).toBeDisplayed();
    }

     async isContinueTextVisible(){
        await expect(this.understandWarningcontinue).toBeDisplayed();
    }

    async tapAddAddressButton(){
        await Gestures.tapTextByXpath(this.addAddressButton);
     }

     async tapCancelButton(){
        await Gestures.tap(this.sendCancelButton);
     }

    async tapOnText(text){
       await Gestures.tapTextByXpath(text);
    }

    async isAmountScreenDisplayed(){
        await expect(this.amountScreen).toBeDisplayed();
    }

    async isChangedContactNameVisible(contactName){
      await expect(await Selectors.getXpathElementByText(contactName)).toBeDisplayed();
  }
}
export default new SendScreen();

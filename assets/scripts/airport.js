/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

console.log("Open Map Airport");

// Waiting for the API to be ready
WA.onInit().then(() => {
   console.log('Scripting API ready');
   console.log('Player tags: ', WA.player.tags);
}).catch(e => console.error(e));

// Popup 1
let popup1 = undefined;
WA.room.onEnterLayer('popup_zona').subscribe(() => {
   popup1 = WA.ui.openPopup("popup_info", "Olá!", [{
      label: "Olá",
      className: "primary",
      callback: (popup) => {
         popup.close();
         popup1 = undefined;
      }
   }]);
});
WA.room.onLeaveLayer('popup_zona').subscribe(() => {
   popup1.close();
   popup1 = undefined;
});

// Popup 2
let popup2 = undefined;
WA.room.onEnterLayer('popup_zona2').subscribe(() => {
   popup2 = WA.ui.openPopup("popup_info2", "Olá!", [{
      label: "Olá!",
      className: "primary",
      callback: (popup) => {
         popup.close();
         popup2 = undefined;
      }
   }]);
});
WA.room.onLeaveLayer('popup_zona2').subscribe(() => {
   popup2.close();
   popup2 = undefined;
});
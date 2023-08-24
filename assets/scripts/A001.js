/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

console.log("Open Map A001");
// Waiting for the API to be ready

let currentPopup = undefined;

WA.onInit().then(() => {
   console.log('Scripting API ready');
   console.log('Player tags: ', WA.player.tags);
}).catch(e => console.error(e));

// Popup 1
WA.room.onEnterLayer('popup_zona').subscribe(() => {
   infoPopup = WA.ui.openPopup("popup_info", "Desculpe o incoveniente, estamos tentando resolver a pane dos nossos sistemas. Enquanto isso, se precisar de algo, temos um totem aqui do lado onde você pode buscar todas as informações que precisa!", [{
      label: "Precisa de ajuda?",
      className: "primary",
      callback: (popup) => {
         popup.close();
      }
   }]);
});
WA.room.onLeaveZone('popup_zona2', closePopUp);

// Popup 2
WA.room.onEnterLayer('popup_zona').subscribe(() => {
   currentPopup = WA.ui.openPopup("popup_info2", "Ao pousar tivemos uma pequena pane em nossos sistemas e a porta do avião não esta abrindo manualmente. Precisamos do código de desbloqueio para resetar os sistemas e liberar a saída de todos. Pode me ajudar a encontrar?", [{
      label: "Desembarque...",
      className: "primary",
      callback: (popup) => {
         popup.close();
      }
   }]);
});
WA.room.onLeaveZone('popup_zona2', closePopUp);

function closePopUp() {
   if (currentPopup !== undefined) {
      currentPopup.close();
      currentPopup = undefined;
   }
}

/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

console.log("Open Map A001");

// Waiting for the API to be ready
WA.onInit().then(() => {
   console.log('Scripting API ready');
   console.log('Player tags: ', WA.player.tags);
}).catch(e => console.error(e));

// Popup info 1
let popup1 = undefined;
WA.room.onEnterLayer('popup_zona').subscribe(() => {
   popup1 = WA.ui.openPopup("popup_info", "Desculpe o incoveniente, estamos tentando resolver a pane dos nossos sistemas. Enquanto isso, se precisar de algo, temos um totem aqui do lado onde você pode buscar todas as informações que precisa!", [{
      label: "Obrigado!",
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

// Popup info 2
let popup2 = undefined;
WA.room.onEnterLayer('popup_zona2').subscribe(() => {
   popup2 = WA.ui.openPopup("popup_info2", "Ao pousar tivemos uma pequena pane em nossos sistemas e a porta do avião não esta abrindo manualmente. Precisamos do código de desbloqueio para resetar os sistemas e liberar a saída de todos. Pode me ajudar a encontrar?", [{
      label: "Vamos lá!",
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

// Popup Game 1
let game_pop_1 = undefined;
WA.room.onEnterLayer('game_pop_1').subscribe(() => {
   game_pop_1 = WA.ui.openPopup("game_pop_1", "Autonomia", [{
      label: "Ok",
      className: "success",
      callback: (popup) => {
         popup.close();
         game_pop_1 = undefined;
      }
   }]);
});
WA.room.onLeaveLayer('game_pop_1').subscribe(() => {
   game_pop_1.close();
   game_pop_1 = undefined;
});

// Popup Game 2
let game_pop_2 = undefined;
WA.room.onEnterLayer('game_pop_2').subscribe(() => {
   game_pop_2 = WA.ui.openPopup("game_pop_2", "Comunicação", [{
      label: "Ok",
      className: "success",
      callback: (popup) => {
         popup.close();
         game_pop_2 = undefined;
      }
   }]);
});
WA.room.onLeaveLayer('game_pop_2').subscribe(() => {
   game_pop_2.close();
   game_pop_2 = undefined;
});

// Popup Game 3
let game_pop_3 = undefined;
WA.room.onEnterLayer('game_pop_3').subscribe(() => {
   game_pop_3 = WA.ui.openPopup("game_pop_3", "Confiança", [{
      label: "Ok",
      className: "success",
      callback: (popup) => {
         popup.close();
         game_pop_3 = undefined;
      }
   }]);
});
WA.room.onLeaveLayer('game_pop_3').subscribe(() => {
   game_pop_3.close();
   game_pop_3 = undefined;
});

// Popup Game 4
let game_pop_4 = undefined;
WA.room.onEnterLayer('game_pop_4').subscribe(() => {
   game_pop_4 = WA.ui.openPopup("game_pop_4", "Desenvolvimento", [{
      label: "Ok",
      className: "success",
      callback: (popup) => {
         popup.close();
         game_pop_4 = undefined;
      }
   }]);
});
WA.room.onLeaveLayer('game_pop_4').subscribe(() => {
   game_pop_4.close();
   game_pop_4 = undefined;
});

// Popup Game 5
let game_pop_5 = undefined;
WA.room.onEnterLayer('game_pop_5').subscribe(() => {
   game_pop_5 = WA.ui.openPopup("game_pop_5", "Protagonismo", [{
      label: "Ok",
      className: "success",
      callback: (popup) => {
         popup.close();
         game_pop_5 = undefined;
      }
   }]);
});
WA.room.onLeaveLayer('game_pop_5').subscribe(() => {
   game_pop_5.close();
   game_pop_5 = undefined;
});
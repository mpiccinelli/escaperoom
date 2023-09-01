/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

console.log("Open Map Airport");

// Waiting for the API to be ready
WA.onInit().then(() => {
   console.log('Scripting API ready');
   console.log('Player tags: ', WA.player.tags);
}).catch(e => console.error(e));

// Add action bar button 'Abrir o mapa'.
WA.ui.actionBar.addButton({
   id: 'map-btn',
   type: 'action',
   label: 'Abrir o mapa',
   callback: (event) => {
      console.log('Botão clicado', event);
      // When a user clicks on the action bar button 'Abrir o mapa', we remove it.
      WA.ui.modal.openModal({
         title: "Mapa geral do aeroporto",
         src: 'https://culturanomad.com.br/game/map_airport',
         allow: "fullscreen",
         allowApi: true,
         position: "center"
     });
   } 
});
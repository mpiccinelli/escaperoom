/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
console.log("Open Map A003");
// Waiting for the API to be ready
WA.onInit().then(() => {
   console.log('Scripting API ready');
   console.log('Player tags: ',WA.player.tags);
}).catch(e => console.error(e));
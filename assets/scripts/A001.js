/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
console.log("Open Map A001");
// Waiting for the API to be ready
WA.onInit().then(() => {
   console.log('Scripting API ready');
   console.log('Player tags: ',WA.player.tags);
}).catch(e => console.error(e));
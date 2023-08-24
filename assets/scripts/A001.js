/// <reference path="../../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
console.log("Open Map A001");

// Waiting for the API to be ready
WA.onInit().then(() => {
   console.log('Scripting API ready');
   console.log('Player tags: ',WA.player.tags)

   // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
   bootstrapExtra().then(() => {
       console.log('Scripting API Extra ready');
   }).catch(e => console.error(e));

}).catch(e => console.error(e));

let currentPopup = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    WA.chat.sendChatMessage("Message from the Scripting API", "MrRobot");
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

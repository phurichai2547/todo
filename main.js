import { addbtn, loadHandler, beforeUnloadHandler } from "./eventhandler/eventcontroller.js";

window.addEventListener('unload', beforeUnloadHandler)
window.addEventListener('load', loadHandler)





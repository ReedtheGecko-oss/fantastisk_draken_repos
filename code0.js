gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.idToCallbackMap = new Map();
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDOperatorPlusBitmapTextObjects1= [];
gdjs.TitleCode.GDOperatorPlusBitmapTextObjects2= [];
gdjs.TitleCode.GDScorelabelObjects1= [];
gdjs.TitleCode.GDScorelabelObjects2= [];


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_any_button_released.func(runtimeScene, 1, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "07 Name Entry.mp3", 1, true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Scorelabel"), gdjs.TitleCode.GDScorelabelObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDScorelabelObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDScorelabelObjects1[i].getBehavior("Text").setText("Hi-Score: " + gdjs.evtTools.string.subStr("000000", 0, 6 - gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))))) + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDOperatorPlusBitmapTextObjects1.length = 0;
gdjs.TitleCode.GDOperatorPlusBitmapTextObjects2.length = 0;
gdjs.TitleCode.GDScorelabelObjects1.length = 0;
gdjs.TitleCode.GDScorelabelObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDOperatorPlusBitmapTextObjects1.length = 0;
gdjs.TitleCode.GDOperatorPlusBitmapTextObjects2.length = 0;
gdjs.TitleCode.GDScorelabelObjects1.length = 0;
gdjs.TitleCode.GDScorelabelObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;

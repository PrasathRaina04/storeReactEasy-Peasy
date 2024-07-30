import { Action, Thunk, action, thunk } from "easy-peasy";
import { JsonPractice } from "../../interface";

interface JsonState{
    
      jsonPractice: JsonPractice;
    jsonPracticeList: Array<JsonPractice>;
}

interface JsonAction{
    setJsonPractice: Action<this, JsonPractice>;
    setJsonPracticeList:Action<this, Array<JsonPractice>>;
}


export interface JsonModel extends JsonState, JsonAction{

}

export const jsonModel: JsonModel={
    jsonPractice: {},
    jsonPracticeList: [],

    setJsonPractice: action((state, jsonPractice) => {
        state.jsonPractice = jsonPractice;
    }),
    setJsonPracticeList: action((state, jsonPracticeList) => {
        state.jsonPracticeList = jsonPracticeList;
    }),
}
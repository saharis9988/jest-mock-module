import { loadData } from "./loader";

export async function dataHandler(){
    const obj = await loadData();
    return obj.data.map(x => x*2); 
}

export async function anotherDataHandler(){
    const obj = await loadData();
    return obj.type;
}
export function SaveItem(key: string, value: string){
    sessionStorage.setItem(key, value);
}

export function GetItem(key: string){
    return sessionStorage.getItem(key);
}


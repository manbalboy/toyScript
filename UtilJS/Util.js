

// isEmpty는 파라미터 값이 비었는지 확인한다. 빈 값이라 정의한 값들은 아래와 같다.
// String :'' ,new String() ,`` Template literals ,${''} Template literals
// Array : [],  new Array() 
// Object : {} ,new Object() , new Proxy({}, {}) Proxy
// null : null
// undefined : undefined


function isEmpty(value) { 
    if (value === null) {return true} 
    if (typeof value === 'undefined') {return true} 
    if (typeof value === 'string' && value === '') {return true} 
    if (Array.isArray(value) && value.length < 1) {return true} 
    if (typeof value === 'object' && value.constructor.name === 'Object' && Object.keys(value).length < 1 && Object.getOwnPropertyNames(value) < 1) {return true} 
    if (typeof value === 'object' && value.constructor.name === 'String' && Object.keys(value).length < 1) {return true} // new String() 
    return false;
}

var a = [{a:"t"},{a:"d"},{a:"t"}]


//특정값이 존재하는 index 행의 배열요소를 제거 
function fn_deleteArrayElement(oObject) {
    var idx ="";
    do{
        idx = oObject.findIndex(function(item) {return item.a === "t"}) // findIndex = find + indexOf 
        if(idx > -1)oObject.splice(idx, 1)
    } while(idx > -1);
    
    console.log("type : ", type , "    oOBject : ", oObject);
    return oObject;
}
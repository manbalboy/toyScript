

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


str.replace(regex, '') 방식으로 정규식을 이용해 바로수정하던지



두번째방법.

var regexp = /^[0-9]*$/

v = $(this).val();

if( !regexp.test(v) ) {

	alert("숫자만 입력하세요");

	$(this).val(v.replace(regexp,''));

}





//1. 숫자만

var regex= /[^0-9]/g



//2. 한글만

var regex= /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;



//3. 이메일

var regex=/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;



//4. 전화번호

var regex= /^\d{2,3}-\d{3,4}-\d{4}$/;



//5. 비밀번호

//- 아래와 같은 방법으로 규칙을 정한다음에 포함여부에 따라 처리해주면 됩니다.



var num = pw.search(/[0-9]/g);

var eng = pw.search(/[a-z]/ig);

var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);



if( (eng >= 0) &&  (num >= 0 || spe >= 0)){

	// 정상

} else {

	// 오류

}
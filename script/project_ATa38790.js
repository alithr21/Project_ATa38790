function changeImg(object){
    var target = document.getElementById("activity");
    target.src = object.value;
}
function apply(Form){
    var name = Form.elements["fullname"].value;
    var email = Form.elements["email"].value;
    var int = Form.elements["about"];
    let txt = "";
    for(let node of int){
        if(node.checked){
            txt += node.value + ";"
        }
    }
    
    var targetOutPut = document.getElementById('output');
    targetOutPut.innerText += name + " || " + email + " || " + "intrested about: " + txt;
}

    

var data = {
    "subject" : [
        {
            "subjectname" : "lý thuyết đồ thị",
            "subjectid" : "CT175",
            "image" : "image\8022682955_421bc6ff5a_b-e1629676847648.webp",
            "hard" : "5",
            "author" : "Gia Bảo",
            "documentname" : "code cả kỳ",
            "describe" : "Đi sâu nghiên cứu về đồ thị, các thuật toán liên quan tới đồ thị khó vải ra mà các em phải hiểu và học thuộc. Có code tổng hợp thi cuối kỳ nhưng phải hiểu bài nha.",
            "document" : "Document\Phan Gia Bao Thoery Graph.docx"
        }
    ]
}

function show() {
    var searchSpace = document.getElementById("search-space").value.toLowerCase();
    var content = document.getElementsByClassName("content");
    var contentnone = document.getElementsByClassName("content-none");
    var flag = 0;
    var div = document.createElement("div");

    for(var i=0; i<data.subject.length; i++){
        if(data.subject[i].subjectname == searchSpace){

            content[0].style.display = "block";
            // div.innerHTML = `

            // `;
            flag = 1;
        }
    }

    if(flag == 0){
        contentnone[0].style.display = "block";
        content[0].style.display = "none";
    }else{
        contentnone[0].style.display = "none";
    }

}

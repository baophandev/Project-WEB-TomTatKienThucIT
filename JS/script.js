var data = {
  "subject": [
    {
      "subjectname": "lý thuyết đồ thị",
      "subjectid": "ct175",
      "image": "image/8022682955_421bc6ff5a_b-e1629676847648.webp",
      "hard": "5",
      "author": "Gia Bảo",
      "documentname": "code cả kỳ",
      "describe": "Đi sâu nghiên cứu về đồ thị, các thuật toán liên quan tới đồ thị khó vải ra mà các em phải hiểu và học thuộc. Có code tổng hợp thi cuối kỳ nhưng phải hiểu bài nha.",
      "document": "Document/Phan Gia Bao Thoery Graph.docx"
    },
    {
      "subjectname": "phân tích và thiết kế thuật toán",
      "subjectid": "ct174",
      "image": "image/images.jpg",
      "hard": "4",
      "author": "Gia Bảo",
      "documentname": "Lý thuyết cuối kỳ",
      "describe": "Học về các thuật toán do các nhà khoa học khác nghĩ ra chứ không có bắt tụi em code thuật toán mới đâu :))",
      "document": "Document/Lý thuyết cuối kì PT&TKTT.docx"
    }
  ]
};

function load() {
  window.location.href = "index.html";
}

function show() {
  var searchSpace = document.getElementById("search-space").value.toLowerCase();
  var content = document.getElementsByClassName("content");
  var contentnone = document.getElementsByClassName("content-none");
  var show_container = document.getElementsByClassName("show-container");

  for (var i = 0; i < data.subject.length; i++) {
    if (
      data.subject[i].subjectname == searchSpace ||
      data.subject[i].subjectid == searchSpace
    ) {
      var div = document.createElement("div");
      div.innerHTML = `
        <div class="content">
          <div class="content-top">
            <div class="img">
              <img src="${data.subject[i].image}" alt="">
            </div>
            <div class="topic">
              <p>${data.subject[i].subjectname.toUpperCase()} - <span style="color: rgb(186, 186, 70);">${data.subject[i].subjectid.toUpperCase()}</span></p>
              <p>Độ khó: ${data.subject[i].hard}</p>
              <p style="color: rgb(192, 192, 77);"><i class="fas fa-pen-square"></i> ${data.subject[i].author}</p>
            </div>
          </div>
          <div class="content-bottom">
            <p>${data.subject[i].describe}</p>
          </div>
          <div class="document">
            <a href="${data.subject[i].document}">${data.subject[i].documentname}</a>
          </div>
        </div>
      `;

      show_container[0].appendChild(div);
      return;
    }
  }

  if (searchSpace == "all") {
    for (var i = 0; i < data.subject.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `
        <div class="content">
          <div class="content-top">
            <div class="img">
              <img src="${data.subject[i].image}" alt="">
            </div>
            <div class="topic">
              <p>${data.subject[i].subjectname.toUpperCase()} - <span style="color: rgb(186, 186, 70);">${data.subject[i].subjectid.toUpperCase()}</span></p>
              <p>Độ khó: ${data.subject[i].hard}</p>
              <p style="color: rgb(192, 192, 77);"><i class="fas fa-pen-square"></i> ${data.subject[i].author}</p>
            </div>
          </div>
          <div class="content-bottom">
            <p>${data.subject[i].describe}</p>
          </div>
          <div class="document">
            <a href="${data.subject[i].document}">${data.subject[i].documentname}</a>
          </div>
        </div>
      `;

      show_container[0].appendChild(div);
    }
  }
}

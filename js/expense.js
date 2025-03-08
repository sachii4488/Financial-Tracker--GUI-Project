var form = document.getElementById("form");

document.getElementById("addBtn").onclick = function () {
  form.classList.add("body_enable");
};

document.getElementById("removeBtn").onclick = function () {
  form.classList.remove("body_enable");
};

function formAdd() {
  var frm = document.getElementsByName("incomeForm")[0];
  frm.reset();
  return false;
}

function addNewData() {
  var incomeName = document.getElementById("incomNm").Value;
  var incomeAmount = document.getElementById("incomAm").value;
  var incomeTitle = document.getElementById("incmTitle").value;
  var incomeDate = document.getElementById("incmDate").value;
  var incomeNote = document.getElementById("incmNote").value;
  var display = document.getElementById("newData");

  display.innerHTML = `<div>
<div class="mb-4">
  <div class="card shadow h-100 py-2 info_card top">
    <div class="card-body">
      <div class="row no-gutters align-items-center">
        <div class="col mr-2 cd">
          <div class="cd_left">
            <div class="cd_title">${incomeName} LKR.${incomeAmount}</div>
            <div class="cd_info">
              Date: ${incomeDate}
              <br />
              Title: ${incomeTitle}
              <br />
              Note: ${incomeNote}
              <br />
            </div>
          </div>
          <div class="cd_right">
            <div class="cd_btn">
              <a href="#" style="text-decoration: none">
                <div class="btn_dlt bt">
                  <i class="bi bi-trash"></i>Delete
                </div>
              </a>
              <a href="#" style="text-decoration: none">
                <div class="btn_edit bt">
                  <i class="bi bi-pen"></i>Edit
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;
}

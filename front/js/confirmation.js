// pre-construct
// let confirmBtn = document.getElementById("confirm")
// let orderId = id of order

function confirm() {
    let orderIdText = document.getElementById("orderId")
    orderIdText.innerHTML = `${orderId}.`
    storageAccess.clear()
    console.log(localStorage)
}

// confirmBtn.addEventListener("click", function mouseEvent (){
//     confirm()
// })

// pre-construct
// let confirmBtn = document.getElementById("confirm")
// let orderId = id of order
// URL param + orderId (same as product.html)

function confirm() {
    let orderIdText = document.getElementById("orderId")
    orderIdText.innerHTML = `${orderId}.`
    storageAccess.clear()
    console.log(localStorage)
}
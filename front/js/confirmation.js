// Get orderId from URL
let urlparams = (new URL(location)).searchParams;
let orderId = urlparams.get('id');

// Print orderId to client and clear localStorage
function confirm() {
    let orderIdText = document.getElementById("orderId")
    orderIdText.innerHTML = `${orderId}.`
    storageAccess.clear()
    console.log(localStorage)
}

confirm()
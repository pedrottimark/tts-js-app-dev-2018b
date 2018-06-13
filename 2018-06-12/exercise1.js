const billAmount = 100;

// =============================================
function gratuity(bill) {
  return bill * 0.2;
}

function totalWithGrat(bill) {
  return gratuity(bill) + bill;
}
// =============================================

console.log("Your total with tip is $", totalWithGrat(billAmount));

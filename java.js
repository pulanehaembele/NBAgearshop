
// ===== CHECKOUT PAGE LOGIC =====
document.addEventListener('DOMContentLoaded', function () {
  const removeButtons = document.querySelectorAll('.remove-btn');
  const quantityInputs = document.querySelectorAll('input[type="number"]');

  function updateTotal() {
    let grandTotal = 0;
    const rows = document.querySelectorAll('tbody tr:not(.total-row)');

    rows.forEach(row => {
      const price = parseFloat(row.children[2].textContent.replace('P', '')) || 0;
      const qty = parseInt(row.querySelector('input').value) || 0;
      const totalCell = row.children[3];
      const total = price * qty;
      totalCell.textContent = `P${total}`;
      grandTotal += total;
    });

    const grandTotalCell = document.querySelector('.total-row td[colspan="2"]');
    if (grandTotalCell) {
      grandTotalCell.textContent = `P${grandTotal}`;
    }
  }

  // Remove item
  removeButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      this.closest('tr').remove();
      updateTotal();
    });
  });

  // Update total on quantity change
  quantityInputs.forEach(input => {
    input.addEventListener('input', updateTotal);
  });

  updateTotal(); // initial total

  // Proceed to checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      // Redirect to a confirmation or payment page
      window.location.href = 'payment.html'; // change this as needed
    });
  }
});

// ===== FEEDBACK PAGE LOGIC =====
document.addEventListener('DOMContentLoaded', function () {
  const feedbackForm = document.querySelector('form[action="submit_feedback.php"]');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default form submission (demo only)
      alert('Thank you for your feedback!');
      feedbackForm.reset(); // clear the form
    });
  }
});

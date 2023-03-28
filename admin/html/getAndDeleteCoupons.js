function addRow(coupon) {
    var table = document.getElementById("couponsTable"); // Get the table element
    var tbody = document.getElementById("couponsTableBody"); // Get the table body element
    var row = tbody.insertRow(); // Insert a new row at the end of the table

    // Add cells to the row
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    // var cell6 = row.insertCell();
    // var cell7 = row.insertCell();

    // Set the cell values
    cell1.innerHTML = tbody.rows.length; // Set the "#" column value to the new row index
    cell2.innerHTML = coupon.code;
    cell3.innerHTML = coupon.discount;
    cell4.innerHTML = coupon.expiration_date;

    cell5.innerHTML = `<div class="dropdown">
    <button
      type="button"
      class="btn p-0 dropdown-toggle hide-arrow"
      data-bs-toggle="dropdown"
    >
      <i class="bx bx-dots-vertical-rounded"></i>
    </button>

    <div class="dropdown-menu">
      <a class="dropdown-item" href="viewSingleCoupons.html?id=${coupon.coupon_id}"
        ><i class="bx bx-edit-alt me-1"></i> Edit</a
      >
      <a class="dropdown-item" onClick="handleClick(${coupon.coupon_id})"
 href="javascript:void(0);"
        ><i class="bx bx-trash me-1"></i> Delete</a
      >
    </div>
  </div>`

}






axios.get('http://localhost:5000/api/v1/coupons')
    .then(response => {
        const data = response.data;
        data.forEach(item => {
            addRow(item)
        });
    })
    .catch(error => console.log(error));






function handleClick(coupon_id) {
    const couponId = coupon_id;
    console.log(couponId);
    // // Remove the row from the table
    try {
        const deleteResponse = axios.delete(`http://localhost:5000/api/v1/coupons/${couponId}`)
        console.log(deleteResponse);
        location.reload()

        console.log(couponId);

    } catch (error) {
        console.log(error);
    }

}
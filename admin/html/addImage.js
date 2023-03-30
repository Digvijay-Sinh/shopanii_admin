function addImage() {
    // event.preventDefault();
    const form = document.getElementById('addImageForm');
    const formData = new FormData();

    const files = document.querySelector('[name="image"]').files;
    // console.log(files);

    // Append each file to the FormData object
    for (let i = 0; i < files.length; i++) {
        // console.log(i);
        formData.append(`images`, files[i]);
        // console.log(files[i]);
    }

    // for (let index = 0; index < files.length; index++) {
    //     const element = formData.get(`images[${index}]`);
    //     console.log(element);

    // }

    // const data = formData.get('images')
    // const pid = formData.get('productId')
    // console.log(pid);

    // console.log(formData.productId);
    // console.log(formData);

    // Send the FormData object to the server using Axios
    axios.post('http://localhost:5000/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        console.log(response.data);

    }).catch(error => {
        console.error(error);
    });
}
// Get all the files from the file input field
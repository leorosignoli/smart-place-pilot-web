

function PostData(submittedForm) {
 
      
      var formData = new FormData(submittedForm);
      var object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      console.log(json);
      fetch('http://localhost:8080/smart-place-pilot-rs/api/role/', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: json
      })
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

  return (
    <>
    </>
  )
}

export default PostData;
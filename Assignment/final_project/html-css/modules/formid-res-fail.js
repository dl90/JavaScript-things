/**
 * @author Don (dl90)
 */

/**
 * @const html response file type does not match
 */
const htmlFail = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Success</title>

  <style>
  .back-button {
  border: none;
  font-size: 1.2em;
  padding: 10px;
  margin: 2%;
  }
  
  .back-button:hover {
  background-color: lightgray;
  }
  </style>
</head>

<body>
  <h1 class="uploaded-message"> File type is not supported, we only do PNG files 😕</h1>
  <button class="back-button"> Go back to homepage! </button>
  <script>
    const homepage = "/"
    const button = document.querySelector(".back-button");
    button.addEventListener('click', event => {
      event.preventDefault();
      window.location.replace(homepage);
    })
  </script>
</body>
</html>`;

module.exports = { htmlFail };
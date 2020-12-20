$(function () {

  $("#enter").on("click", function () {
    post();
    setTimeout(get(), 1000);
  });

  $("#load").on("click", () => {
    get();
  })
});

function get () {
  $(".list").html("");
  $.ajax({
    url: "/thing",
    type: "get",
    success: function (data) {
      data.forEach(ele => {
        $(".list").append(`<li>${JSON.stringify(ele)}</li>`);
      })
    }
  });
}

function post () {
  $.ajax({
    url: "/",
    type: "post",
    data: {
      id: $("#id").val(),
      name: $("#name").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      food: $("#food").val(),
      allergies: $("#allergies").val()
    }
  })
}

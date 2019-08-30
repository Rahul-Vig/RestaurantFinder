// $(".admin-btn").on("click", function() {
//   location.href = "/admin";
// });

$("#login").on("click", function() {
  var admin = {
    username: $("#username").val(),
    password: $("#password").val()
  };

  console.log(admin);

  $.ajax("/", {
    type: "POST",
    data: admin
  }).then(function(outcome) {
    console.log(outcome);
    if (outcome.success === false) {
      swal("Incorrect User Name or Password");
    } else {
      swal("Welcome Admin");
      window.location.href = "/admin";
    }
  });
});

$(".add-btn").on("click", function() {
  location.href = "/add";
});

$(".addFran-btn").on("click", function() {
  location.href = "/franchise";
});

$("modify-btn").on("click", function() {
  location.href = "/modify";
});

$("delete-btn").on("click", function() {
  location.href = "/delete";
});

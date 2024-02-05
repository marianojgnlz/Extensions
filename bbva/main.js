var $bancaOnlineButton = document.querySelector("[title='Banca Online']")

$bancaOnlineButton.addEventListener('click', () => {
    setTimeout(myFunction, 1000);
});

function myFunction() {
    var iframe = document.querySelector("iframe")
    var $userNameInput = iframe.contentDocument.querySelector("input[name=username]")
    $userNameInput.type = "username";
}

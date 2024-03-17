var a = 1

function eye() {
    if (a == 1) {
        document.getElementById("pass_eye").src = "images/view.png"
        document.getElementById("password").type = "text"

        if (document.getElementById("con_password") != null) {
            document.getElementById("con_password").type = "text"
        }


        a = 0
    } else {
        document.getElementById("pass_eye").src = "images/hide.png"
        document.getElementById("password").type = "password"
        if (document.getElementById("con_password") != null) {
            document.getElementById("con_password").type = "password"
        }
        a = 1
    }
}

function login_pannel() {

    if (document.getElementById("mainpannel_2") != null) {
        document.getElementById("mainpannel_2").remove();
    }

    var div = document.createElement("div")
    div.setAttribute("id", "mainpannel_2")
    div.setAttribute("class", "col-md-6")

    //elements of mainpannel_2 of login

    var uname = document.createElement("label")
    uname.innerHTML = "UserName"
    div.append(uname)

    var uname_inp = document.createElement("input")
    uname_inp.type = "text"
    uname_inp.setAttribute("id", "user_name")
    uname_inp.placeholder = "Enter UserName"
    div.append(uname_inp)

    var pas_lab = document.createElement("label")
    pas_lab.innerHTML = "Password"
    div.append(pas_lab)

    var pas_inp = document.createElement("input")
    pas_inp.type = "password"
    pas_inp.setAttribute("id", "password")
    pas_inp.placeholder = "Password"
    div.append(pas_inp)

    var eye_img = document.createElement("img")
    eye_img.src = "images/hide.png"
    eye_img.setAttribute("onclick", "eye()")
    eye_img.setAttribute("id", "pass_eye")
    div.append(eye_img)

    var login_button = document.createElement("button")
    login_button.innerHTML = "LogIn"
    login_button.setAttribute("id", "login_btn")
    login_button.setAttribute("onclick", "login()")
    div.append(login_button)

    document.getElementById("mainpannel").append(div)

    // twiking some property

    document.getElementById("lg_sp_pannel").style.height = "60vh"
    document.getElementById("login").style.filter = "drop-shadow(0px 0px 3px rgb(255, 255, 255))"
    document.getElementById("login").style.color = "white"
    document.getElementById("pass_eye").style.top = "-11.4vh"
    document.getElementById("signup").style.filter = "drop-shadow(0px 0px 0px)"
    document.getElementById("signup").style.color = "rgb(161, 161, 161)"
}

function signup_pannel() {

    if (document.getElementById("mainpannel_2") != null) {
        document.getElementById("mainpannel_2").remove();
    }

    var div = document.createElement("div")
    div.setAttribute("id", "mainpannel_2")
    div.setAttribute("class", "col-md-6")

    //elements of mainpannel_2 of signup

    var email = document.createElement("label")
    email.innerHTML = "E-mail"
    div.append(email)

    var email_inp = document.createElement("input")
    email_inp.type = "email"
    email_inp.setAttribute("id", "mail")
    email_inp.placeholder = "Enter Your Mail"
    div.append(email_inp)

    var uname = document.createElement("label")
    uname.innerHTML = "UserName"
    div.append(uname)

    var uname_inp = document.createElement("input")
    uname_inp.type = "text"
    uname_inp.setAttribute("id", "user_name")
    uname_inp.placeholder = "Enter UserName"
    div.append(uname_inp)

    var pas_lab = document.createElement("label")
    pas_lab.innerHTML = "Password"
    div.append(pas_lab)

    var pas_inp = document.createElement("input")
    pas_inp.type = "password"
    pas_inp.setAttribute("id", "password")
    pas_inp.placeholder = "Password"
    div.append(pas_inp)

    var eye_img = document.createElement("img")
    eye_img.src = "images/hide.png"
    eye_img.setAttribute("onclick", "eye()")
    eye_img.setAttribute("id", "pass_eye")
    div.append(eye_img)

    var re_pas_lab = document.createElement("label")
    re_pas_lab.innerHTML = "Confirm Password"
    re_pas_lab.setAttribute("id", "c_pass_label")
    div.append(re_pas_lab)

    var re_pas_inp = document.createElement("input")
    re_pas_inp.type = "password"
    re_pas_inp.setAttribute("id", "con_password")
    re_pas_inp.placeholder = "Re-Enter Password"
    div.append(re_pas_inp)

    var login_button = document.createElement("button")
    login_button.innerHTML = "SignUp"
    login_button.setAttribute("id", "Signup_btn")
    login_button.setAttribute("onclick", "Signup()")
    div.append(login_button)

    document.getElementById("mainpannel").append(div)

    // twiking some property

    document.getElementById("lg_sp_pannel").style.height = "85vh"
    document.getElementById("signup").style.filter = "drop-shadow(0px 0px 3px rgb(255, 255, 255))"
    document.getElementById("signup").style.color = "white"
    document.getElementById("pass_eye").style.top = "-7.7vh"
    document.getElementById("login").style.filter = "drop-shadow(0px 0px 0px)"
    document.getElementById("login").style.color = "rgb(161, 161, 161)"

}

function login_page() {

    if (document.getElementById("lg_sp_pannel")!=null) {
        return
    }

    var lg_sp_pannel = document.createElement("div")
    lg_sp_pannel.setAttribute("id", "lg_sp_pannel")

    var lg_pannel = document.createElement("div")
    lg_pannel.setAttribute("id", "lg_pannel")
    lg_sp_pannel.append(lg_pannel)

    var pannel_head = document.createElement("div")
    pannel_head.setAttribute("id", "pannel_head")
    lg_pannel.append(pannel_head)

    //login button

    var login_a = document.createElement("div")
    pannel_head.append(login_a)

    var login_a_btn = document.createElement("a")
    login_a_btn.setAttribute("id", "login")
    login_a_btn.setAttribute("class", "buttons")
    login_a_btn.setAttribute("onclick", "login_pannel()")
    login_a_btn.innerHTML="LogIn"
    login_a.append(login_a_btn)

    //signup button

    var signup_a = document.createElement("div")
    pannel_head.append(signup_a)

    var signup_a_btn = document.createElement("a")
    signup_a_btn.setAttribute("id", "signup")
    signup_a_btn.setAttribute("class", "buttons")
    signup_a_btn.setAttribute("onclick", "signup_pannel()")
    signup_a_btn.innerHTML="SignUp"
    signup_a.append(signup_a_btn)

//mainpannel

    var mainpannel = document.createElement("div")
    mainpannel.setAttribute("id","mainpannel")
    lg_pannel.append(mainpannel)

    document.getElementById("bdy").append(lg_sp_pannel)

    login_pannel()
}
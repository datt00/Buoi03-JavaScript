console.log("IT Training Center - JavaScript loaded");
const centerName = "IT Training Center";
const slogan = "Learn Technology - Build Your Future";

document.getElementById("welcome-title").innerHTML =
    "Welcome to " + centerName;

document.getElementById("welcome-message").innerText = slogan;
const courseNames = [
    "HTML & CSS",
    "JavaScript",
    "ASP.NET MVC",
    "Database"
];

const courseTitleElements = document.querySelectorAll(".course-name");

courseTitleElements.forEach(function (element, index) {
    element.innerHTML = courseNames[index];
});
const quickCourses = [
    "HTML & CSS",
    "JavaScript",
    "ASP.NET MVC",
    "Database"
];

function showQuickCourses() {
    let output = "";

    for (const course of quickCourses) {
        output += "<li>" + course + "</li>";
    }

    document.getElementById("quick-course-list").innerHTML = output;
}

showQuickCourses();

const jsCourse = {
    name: "JavaScript",
    duration: "6 Weeks",
    tuition: "$150"
};

function showCourseDetail() {
    let output = "";

    for (const key in jsCourse) {
        output += "<p>" + key + ": " + jsCourse[key] + "</p>";
    }

    document.getElementById("course-detail").innerHTML = output;
}

function getTuition(course) {
    switch (course) {
        case "html-css":
            return 100;

        case "javascript":
            return 150;

        case "aspnet-mvc":
            return 200;

        case "database":
            return 150;

        default:
            return 0;
    }
}

function registerCourse() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;

    const learningModeElement =
        document.querySelector('input[name="learningMode"]:checked');

    if (
        fullName === "" ||
        email === "" ||
        phone === "" ||
        course === "" ||
        learningModeElement === null
    ) {
        document.getElementById("registration-result").innerHTML =
            "<p>Please fill in all required information.</p>";

        return;
    }

    const learningMode = learningModeElement.value;
    const tuition = getTuition(course);

    document.getElementById("registration-result").innerHTML =
        "<p>Registration successful!</p>" +
        "<p>Name: " + fullName + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Phone: " + phone + "</p>" +
        "<p>Course: " + course + "</p>" +
        "<p>Learning Mode: " + learningMode + "</p>" +
        "<p>Tuition: $" + tuition + "</p>";
}
const reviewNames = document.getElementsByClassName("review-name");

for (let i = 0; i < reviewNames.length; i++) {
    console.log(reviewNames[i].innerHTML);
}

const footerParagraphs = document.getElementsByTagName("p");

for (let i = 0; i < footerParagraphs.length; i++) {
    console.log(footerParagraphs[i].innerText);
}

function showInnerHTML() {
    const content = document.getElementById("demo-content");

    document.getElementById("content-result").textContent =
        content.innerHTML;
}

function showInnerText() {
    const content = document.getElementById("demo-content");

    document.getElementById("content-result").textContent =
        content.innerText;
}

function showTextContent() {
    const content = document.getElementById("demo-content");

    document.getElementById("content-result").textContent =
        content.textContent;
}

function demoInnerText() {
    document.getElementById("content-demo").innerText =
        "Hello from innerText!";
}

function demoTextContent() {
    document.getElementById("content-demo").textContent =
        "Hello from textContent!";
}
const footer = document.querySelector(".footer");

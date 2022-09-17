let array_admin = [
    {
        "Name": "Aditya",
        "username":"adityajoshi-08",
        "password": "aditya"
    },
    {
        "Name": "Farhan Alam",
        "username":"farhandotdev",
        "password":'hello'
    }
]

function getMeetingDetails(){
    let meeting_details = {
    "nameOfMeeting" : document.getElementById("nameOfMeeting"),
    "timeOfMeeting" : document.getElementById("timeOfMeeting"),
    "dateOfMeeting" : document.getElementById("dateOfMeeting"),
    "descriptionOfMeeting" : document.getElementById("descriptionOfMeeting")
    }
}


function send(){
    let adminUserId = document.getElementById("admin-id").value
    let password = document.getElementById("admin-password").value
    // verification check

    array_admin.forEach(admin => {
        if (admin.username == adminUserId && admin.password != password){
            alert("Wrong password!!")
        }
    })


}
document.getElementById("send").addEventListener('click', send);
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

function updateMeetingDetails(){
    console.log(1)
    meetings = [
    {
        meetingLink : "meet.google.com",
        meetingTopic : "Discussion Panel"
    },
    {
        meetingLink : "meet.google.com",
        meetingTopic : "Open-source"
    }

]

meetings.forEach(meet => {
    document.getElementById("meetings").innerHTML = ``;
   let x = document.createElement('div')
   x.className = "row-for-meeting"
   x.innerHTML += `
   <a href="${meet.meetingLink}"><button>Joining Link</button></a>
           <h2>${meet.meetingTopic}</h2>
   `;
   x.querySelector("h2").style.color = "#950101"
   x.querySelector("button").style.padding = "8px 35px"
   x.querySelector("button").style.borderRadius = "10px"
   x.querySelector("button").style.border = "none"
   document.getElementById("meetings").appendChild(x)
})
}

document.getElementById("refresh").addEventListener('click',updateMeetingDetails);
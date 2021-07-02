
document.querySelector(".button-container")
.addEventListener("click", ()=>{
    let text = document.getElementById("filter-jobs").value;
//    console.log(text);
})

function getJobs(){
    return fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
}

function showJobs(jobs){
    console.log("Jobs in showjobs", jobs);
    let jobsContainer = document.querySelector(".jobs-container");
   
    let jobsHTML = "";
    jobs.forEach(job => {
        jobsHTML += `
            <div class="job-tile">
            <div class="top">
                <img src="./img/icons8-linkedin-circled-100.png">
                <span class="iconify" data-icon="ic-baseline-more-horiz" data-inline="false"></span>
            </div>
            <div class="rolename">
                <span>Lead Product Design</span>
            </div>
            <div class="discription">
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto dolorum quidem magni aliquam provident alias obcaecati, nostrum libero porro neque quae, ipsa amet, minima similique sed consequuntur architecto dolor!
                </span>
            </div>
            <div class="buttons">
                <div class="button apply-now">
                    Apply now
                </div>
                <div class="button">
                    message
                </div>
            </div>
        `
    })
    console.log(jobsHTML);

}
getJobs().then(data => {
    showJobs(data);
});
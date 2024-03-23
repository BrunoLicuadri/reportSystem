const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");


//getting new date, current year and month

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["Janeiro", "Fevereiro", "Março", "Abril","Maio", "Junho", "Julho",
                "Agosto", "Setembro", "Outubo", "Novembro", "Dezembro"]

const renderCalendar = () => {
    let firstDayOfTheMonth = new Date(currYear, currMonth, 1).getDay(),   //getDay() returns the day of the week(0 to 6); getting first day of the month
    lastDayOfTheMonth = new Date(currYear, currMonth +1,0).getDate(),   //getDate() returns the day of the Month(1 to 31); gettin the last day
    lastDayOfMonth = new Date(currYear, currMonth, lastDayOfTheMonth).getDay(),   //gettin the last day of the current month
    lastDayOfTheLastMonth = new Date(currYear, currMonth, 0).getDate();   //gettin the last day of previous month
    let liTag = "";

    for (let i = firstDayOfTheMonth; i > 0; i--) {  //creating li of previous month last days
        liTag += `<li class="inactive">${lastDayOfTheLastMonth -i +1}</li>`;
        
    }

    for (let i = 1; i <= lastDayOfTheMonth; i++) { //creating li of all days on the current month
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() //adding active class to li if the current day,
                        && currYear === new Date().getFullYear() ? "active" : ""; // month and year matched
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {  //creating li of the next month first days
        liTag += `<li class="inactive">${ i - lastDayOfMonth +1}</li>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach( icon => {
    icon.addEventListener("click", ()=> {       //adding click event on both icons
        
        //if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth -1 : currMonth +1;

        if(currMonth < 0 || currMonth > 11){ //if current month is less than 0 or greater then 11
            //creating nre date of the current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); //updating current year with new date year
            currMonth = date.getMonth(); //updating current month with new date month
        } else{ // else pass new Date as data value
            date = new Date();
        }

        renderCalendar();
    })
})
const toggle = () => {
    if (document.body.classList.contains('dark-mode'))
        document.body.classList.remove('dark-mode');
    else 
        document.body.classList.add('dark-mode');

    if(document.getElementsByClassName('btn-outline-success').length) {
        document.getElementById('header').href = 'images/logo2.png';
        while (document.getElementsByClassName('btn-outline-success').length) {
            let element = document.querySelector('.btn-outline-success');
            element.classList.remove('btn-outline-success');
            element.classList.add('btn-outline-info');
        }
        
        while (document.getElementsByClassName('navbar-light').length) {
            let element = document.querySelector('.navbar-light');
            element.classList.remove('navbar-light');
            element.classList.add('navbar-dark');
        }

        document.querySelector('.fas.fa-sun').className = 'fas fa-moon';
        document.querySelector('.fas.fa-moon').style.color = '#fff';
    }
    else {   
        document.getElementById('header').href = 'images/logo1.png';
        while (document.getElementsByClassName('btn-outline-info').length) {
            let element = document.querySelector('.btn-outline-info');
            element.classList.remove('btn-outline-info');
            element.classList.add('btn-outline-success');
        }

        while (document.getElementsByClassName('navbar-dark').length) {
            let element = document.querySelector('.navbar-dark');
            element.classList.remove('navbar-dark');
            element.classList.add('navbar-light');
        }

        document.querySelector('.fas.fa-moon').className = 'fas fa-sun';
        document.querySelector('.fas.fa-sun').style.color = '#000';
    }
}

const clicked = () => {
    let elem = event.target;
    let pages = document.getElementsByClassName('courses-container');
    document.querySelector('li.page-item.active').classList.remove('active');
    elem.parentNode.classList.add('active');
    for (let i = 0; i < pages.length; i++) 
        pages[i].style.display = 'none';
    pages[Number.parseInt(elem.innerHTML)-1].style.display = 'flex';
}

const filter = () => {
    let courses = [];
    let searchbox = document.querySelector('input#course-search-box');
    let sort = document.querySelector('input[type=radio][name="sort"]:checked');
    let category = document.querySelectorAll('input[type=checkbox][name="category"]:checked');
    let duration = document.querySelectorAll('input[type=checkbox][name="duration"]:checked');
    let fees = document.querySelectorAll('input[type=checkbox][name="fees"]:checked');

    let filter = searchbox.value.toUpperCase()
    let categoryList = [], durationList = [], feesList = [];
    for (let i = 0; i < category.length; i++)
        categoryList.push(Number.parseInt(category[i].value));
    for (let i = 0; i < duration.length; i++)
        durationList.push(Number.parseInt(duration[i].value));
    for (let i = 0; i < fees.length; i++)
        feesList.push(Number.parseInt(fees[i].value));

    for (let i = 0; i < Courses.length; i++) {
        let Filter = false, Category = true, Duration = true, Fees = true;

        if (Courses[i].title.toUpperCase().indexOf(filter) > -1)
            Filter = true;
        
        if (categoryList.length > 0) {
            Category = false;
            for (let j = 0; j < categoryList.length; j++) {
                if (Courses[i].category === categoryList[j]) {
                    Category = true;
                    break;
                }
            }
        }        

        if (durationList.length > 0) {
            Duration = false;
            let time = 0;
            if (Courses[i].duration < 3)
                time = 1;
            else if (Courses[i].duration >= 3 && Courses[i].duration <= 6)
                time = 2;
            else if (Courses[i].duration > 6)
                time = 3;
        
            for (let j = 0; j < durationList.length; j++) {
                if (time === durationList[j]) {
                    Duration = true;
                    break;
                }
            }
        }

        if (feesList.length > 0) {
            Fees = false;
            let price = 0;
            if (Courses[i].fees === 0)
                price = 1;
            else if (Courses[i].fees >= 1 && Courses[i].fees <= 1000)
                price = 2;
            else if (Courses[i].fees >= 1001 && Courses[i].fees <= 5000)
                price = 3;
            else if (Courses[i].fees >= 5001 && Courses[i].fees <= 10000)
                price = 4;
            else if (Courses[i].fees > 10000)
                price = 5; 

        
            for (let j = 0; j < feesList.length; j++) {
                if (price === feesList[j]) {
                    Fees = true;
                    break;
                }
            }
        }

        if ((Filter && Category && Duration && Fees))
            courses.push(Courses[i]);
    }

    if (sort !== null) {
        sort = Number.parseInt(sort.value);
        if (sort === 1)
            courses.sort((a, b) => (a.title > b.title ? 1 : -1));
        if (sort === 2)
            courses.sort((a, b) => (a.duration > b.duration ? 1 : -1));
        if (sort === 3)
            courses.sort((a, b) => (a.fees > b.fees ? 1 : -1));
    }
    
    display(courses);
}

clear.addEventListener("click", ()=>{
    document.querySelector("input#course-search-box").value = "";
    let radio = document.querySelectorAll('input[type=radio]:checked');
    let checkbox = document.querySelectorAll('input[type=checkbox]:checked');
    for (let i = 0; i < radio.length; i++)
        radio[i].checked = false;
    for (let i = 0; i < checkbox.length; i++)
        checkbox[i].checked = false;
    filter();
})

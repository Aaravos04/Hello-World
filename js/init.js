const display = (courses) => {
    let pagination = document.querySelector('ul.pagination');
    document.getElementById('courses-container').innerHTML = "";
    pagination.innerHTML = "";

    if (courses.length === 0)
        document.getElementById('courses-container').innerHTML = `
            <center>
                <h3>Oops! No Available Courses for given filters.</h3>
            </center>
        `;

    for (let i = 0; i <= (courses.length / 6); i++) {
        if (i*6 == courses.length) 
            break;

        let pages = document.createElement('div');
        let pageItem = document.createElement('li');
        pages.className = 'courses-container';

        if (i === 0) 
            pageItem.className = 'page-item active';
        else 
            pageItem.className = 'page-item';
        pageItem.innerHTML = '<a class="page-link" onclick="clicked()">' + (i+1) + '</a>';

        for (let j = 0; j < 6 && ((i*6+j) < courses.length); j++) {
            let element = document.createElement('div');
            element.className = 'card m-2 course-container';
            element.style.width = '15.25rem';
            element.innerHTML = `
                <img src="` + courses[i*6+j].image + `" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="course-title">` + courses[i*6+j].title + `</h5>
                <p class="card-text">Lorem ipsum dolor sit amet nandi consectetur adipisicing.</p>
                <ul class="my-1">
                    <li><span>Course Duration: </span> ` + courses[i*6+j].duration +  ` months</li>
                    <li><span>Course Fees: </span> ` + ((courses[i*6+j].fees == 0) ? "Free" : ("₹" + courses[i*6+j].fees)) + `</li>
                </ul>
                <a onclick="alert('Please Login to Enroll!')" class="btn btn-outline-success mt-2">Enroll Now</a>
                </div>
            `;
            
            pages.appendChild(element);
        }

        if (i !== 0)
            pages.style.display = 'none';    
        pagination.appendChild(pageItem);
        document.getElementById('courses-container').appendChild(pages);
    }
}

const subjectContainer = document.getElementById('subject-container');
for (let i = 0; i < subjects.length; i++) {
    let element = document.createElement('div');
    element.className = 'subject m-2';
    element.innerHTML = `
        <center>
            <i class="` + subjects[i].name + `"></i>
            <p>` + subjects[i].title + `</p>
        </center>
    `;
    subjectContainer.appendChild(element);
}

const reviewRows = document.getElementsByClassName('review-row');
for (let i = 0; i < reviewRows.length; i++) {
    for (let j = 0; j < 3; j++) {
        let element = document.createElement('div');
        let rating = '';
        for (let k = 0; k < reviews[i * 3 + j].rating; k++)
            rating += '★';
        rating = '<p style="color: #ffb61b; margin: 0;">' + rating + '</p>'
        element.className = 'col-md-4';
        element.innerHTML = `
            <center>
                <div class="review px-md-4 py-md-3 my-2">
                ` + rating + `<b>` + reviews[i * 3 + j].name + `</b>` + `
                <p class="comment my-1">` + reviews[i * 3 + j].comment + `</p>
                </div>
            </center>
        `;
        reviewRows[i].appendChild(element);
    }
}

display(Courses);

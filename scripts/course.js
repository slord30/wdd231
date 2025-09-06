// array of courses
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true //I completed this course so this set to true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false //I have not completed this course so it is set to false
    }
]

// DOM references - grabbing the references in my html to assign a variable to
const container = document.querySelector('#courses-container');
const totalCredits = document.querySelector('#total-credits');
const allBtn = document.querySelector('#all-btn');
const cseBtn = document.querySelector('#cse-btn');
const wddBtn = document.querySelector('#wdd-btn');

// create a function to render the courses. courseArray is a parameter name for the array of courses to display when you call the function renderCourses
function renderCourses(courseArray) {
    //clear old content so it doesn't keep building on each other
    container.innerHTML = ""; //JavaScript property that lets you get or set the HTML content inside an element

    //build cards
    courseArray.forEach(course => {
        const card = document.createElement('div'); //create a div to build the cards
        card.classList.add('course-card'); //JavaScript property that gives you an easy way to work with the CSS classes of an element in the DOM.
        if (course.completed) card.classList.add('completed');

        //add checkmark if completed
        const subjectText = course.completed
            ? `<span class="checkmark">✓ </span>${course.subject}`
            : course.subject;

       
        //shorten description to 100 max characters
        const shortDesc = course.description.length > 25
            ? course.description.substring(0, 25) + "..."
            : course.description;

        card.innerHTML = `
            <h3>${subjectText} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p class="description">${shortDesc}</p>
            ${course.description.length > 25 ? '<button class="read-more">Read More</button>' : ''}
            <p><strong>Tech:</strong> ${course.technology.join(', ')}</p>`;

        // card.innerHTML = `
        // <h3>${course.subject} ${course.number}: ${course.title}</h3>
        // <p><strong>Credits:</strong> ${course.credits}</p>
        // <p>${course.description}</p>
        // <p><strong>Tech:</strong> ${course.technology.join(', ')}</p>`;

        container.appendChild(card);

        //if description is long, wire up "Read More" button
        const readMoreBtn = card.querySelector('.read-more');
        if (readMoreBtn) {
            const descEl = card.querySelector('.description');
            let expanded = false;

            readMoreBtn.addEventListener('click', () => {
                expanded = !expanded;
                descEl.textContent = expanded ? course.description : shortDesc;
                readMoreBtn.textContent = expanded ? "Read Less" : "Read More";
            });
        }
    });

    //calculate total credits
    const credits = courseArray.reduce((sum, c) => sum + c.credits, 0);
    totalCredits.textContent = `Total Credits: ${credits}`;
}

//event listeners - what happens when each button is clicked
allBtn.addEventListener('click', () => renderCourses(courses));
cseBtn.addEventListener('click', () => renderCourses(courses.filter(c => c.subject === "CSE")));
wddBtn.addEventListener('click', () => renderCourses(courses.filter(c => c.subject === "WDD")));

// show all courses on page load
renderCourses(courses);

///////////code to change background color of button when it is selected

// Select all filter buttons
const filterButtons = document.querySelectorAll('.course-options button');

// Add listener to "Web Certificate Courses" buttons so color background color changes when it is the selected button.
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove "current" from all
        filterButtons.forEach(btn => btn.classList.remove('current'));

        // add "current" to the clicked one
        button.classList.add('current');
    });
});
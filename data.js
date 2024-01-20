const subjects = [
    {
        title: 'Basic Programming',
        name: 'fa-solid fa-brackets-curly'
    },
    {
        title: 'Web Development',
        name: 'fa-solid fa-code'
    },
    {
        title: 'Data Science',
        name: 'fa-solid fa-chart-simple'
    },
    {
        title: 'Android Development',
        name: 'fa-brands fa-android'
    },
    {
        title: 'Machine Learning',
        name: 'fa-solid fa-microchip-ai'
    },
    {
        title: 'Game Development',
        name: 'fa-solid fa-gamepad-modern'
    },
    {
        title: 'Graphics Designing',
        name: 'fa-solid fa-palette'
    },
    {
        title: 'Cloud Computing',
        name: 'fa-solid fa-cloud'
    },
    {
        title: 'Virtual Reality',
        name: 'fa-solid fa-vr-cardboard'
    }
];

const reviews = [
    {
        name: 'Leonardo da Vinci',
        rating: 4,
        comment: 'Aut eligendi dignissimos, repellat unde itaque nostrum aliquid ullam tempora dolore asperiores exercitationem quas esse illo! Ipsam repella.'
    },
    {
        name: 'Dennis Ritchie',
        rating: 5,
        comment: 'Deserunt iure unde minus magnam voluptate, officia aspernatur? At est animi harum nesciunt ea. Earum assumenda corporis, eligendi aliquid?'
    },
    {
        name: 'Michel Jackson',
        rating: 4,
        comment: 'Pariatur repellendus consequr itaque libero minus. Maxime, impedit enim porro praesentium expedita, ipsum numquam vitae, porro praesentium!'
    },
    {
        name: 'Linus Torvalds',
        rating: 3,
        comment: 'Numquam quae asperiores cum blanditiis! Amet quidem optio id velit repudiandae accusantium, laboriosam sequi quo deserunt maxime, modi saepe!'
    },
    {
        name: 'Pablo Picasso',
        rating: 5,
        comment: 'Accusantium optio quae beatae veniam voluptates molestiae nisi illum veritatis voluptatibus pariatur velit dolorem consequuntur iste laudantium.'
    },
    {
        name: 'Satya Nadella',
        rating: 3,
        comment: 'Sequi nisi totam, excepturi aliquam corporis fugiat deserunt praesentium esse perferendis ea soluta tempore, inventore id pariatur veniam.'
    },
    {
        name: 'Mark Zuckerberg',
        rating: 4,
        comment: 'Delectus fugiat quo corrupti soluta reprehenderit dolor maxime cumque labore animi in, mollitia eveniet consequuntur nihil nulla saepe quodim?'
    },
    {
        name: 'Elon Musk',
        rating: 4,
        comment: 'Nam quisquam facere, suscipit cupiditate quae ullam eaque. Illum assumenda repellendus dolor! Dolorum maiores commodi maxime ipsum cumque.'
    },
    {
        name: 'Sundar Pichai',
        rating: 4,
        comment: 'Numquam possimus id optio illo exercitationem tempora velit non expedita, odio rem architecto sed placeat laudantium ex consequatur vero labore.'
    },
    {
        name: 'Albert Einstein',
        rating: 3,
        comment: 'Consequatur repellat rerum esse ullam, sint suscipit quasi ratione possimus quisquam assumenda sed ad alias eum sapiente! Magnam nobis doloremque.'
    },
    {
        name: 'Issac Newton',
        rating: 4,
        comment: 'Accusantium optio quae beatae veniam voluptates molestiae nisi illum veritatis voluptatibus pariatur velit dolorem consequuntur iste laudantium.'
    },
    {
        name: 'Bill Gates',
        rating: 5,
        comment: 'Natus voluptatem praesentium eaque nemo cumque fugiat corrupti maxime reiciendis, consect ab sit et, eum, tenetur error nostrum nobis id animi!'
    },

]

const Courses = [
    {
        title: 'Master Photoshop - Beginner to Pro',
        duration: 6,
        fees: 2499,
        image: 'courses/img1.jpg',
        category: 7
    },
    {
        title: 'MERN Stack - Full Stack Development',
        duration: 11,
        fees: 11499,
        image: 'courses/img2.jpg',
        category: 2
    },
    {
        title: 'Basics of Programming with C',
        duration: 8,
        fees: 899,
        image: 'courses/img3.jpg',
        category: 1
    },
    {
        title: 'Android Development - Android Studio',
        duration: 6,
        fees: 5499,
        image: 'courses/img4.jpg',
        category: 4
    },
    {
        title: 'Full Stack Web Development',
        duration: 9,
        fees: 8999,
        image: 'courses/img5.jpg',
        category: 2
    },
    {
        title: '2D & 3D Game Development - Unity',
        duration: 6,
        fees: 3599,
        image: 'courses/img6.jpg',
        category: 6
    },
    {
        title: 'Introduction to Python Programming',
        duration: 8,
        fees: 1999,
        image: 'courses/img7.png',
        category: 1
    },
    {
        title: 'Web Development - HTML, CSS, JavaScript',
        duration: 2,
        fees: 0,
        image: 'courses/img8.jpg',
        category: 2
    },
    {
        title: 'Database Management - Microsoft SQL Server',
        duration: 6,
        fees: 4999,
        image: 'courses/img9.jpg',
        category: 3
    },
    {
        title: 'Artificial Intelligence - Machine Learning',
        duration: 11,
        fees: 12999,
        image: 'courses/img10.jpg',
        category: 5
    },
    {
        title: 'Learn Virtual Reality - SteamVR',
        duration: 8,
        fees: 8999,
        image: 'courses/img11.jpg',
        category: 9
    },
    {
        title: '3D Game Development - Unreal Engine',
        duration: 8,
        fees: 4499,
        image: 'courses/img12.jpg',
        category: 6
    },
    {
        title: 'Programming in Java for Beginners',
        duration: 6,
        fees: 2999,
        image: 'courses/img13.jpg',
        category: 1
    },
    {
        title: 'Game Development with Python - Pygame',
        duration: 2,
        fees: 0,
        image: 'courses/img14.jpg',
        category: 6
    },
    {
        title: 'Virtual Reality using Oculus',
        duration: 8,
        fees: 8999,
        image: 'courses/img15.jpg',
        category: 9
    },
    {
        title: 'Learn 3D Modelling with Blender',
        duration: 8,
        fees: 2999,
        image: 'courses/img16.jpg',
        category: 7
    },
    {
        title: 'Introduction to Programming - C++',
        duration: 6,
        fees: 999,
        image: 'courses/img17.jpg',
        category: 1
    },
    {
        title: 'Learn Android Development with Kotlin',
        duration: 6,
        fees: 3299,
        image: 'courses/img18.png',
        category: 4
    },
    {
        title: 'Learn Deep Learning with Python',
        duration: 8,
        fees: 6999,
        image: 'courses/img19.jpg',
        category: 5
    },
    {
        title: 'MEAN Stack - Full Stack Development',
        duration: 11,
        fees: 11499,
        image: 'courses/img20.png',
        category: 2
    },
    {
        title: 'Data Science & Database Management',
        duration: 6,
        fees: 7999,
        image: 'courses/img21.jpg',
        category: 3
    },
    {
        title: 'Introduction to Cloud Computing',
        duration: 8,
        fees: 6499,
        image: 'courses/img22.jpg',
        category: 8
    },
    {
        title: 'Graphics Designing - Adobe Illustrator',
        duration: 6,
        fees: 2499,
        image: 'courses/img23.png',
        category: 7
    }
];
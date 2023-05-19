import { IoIosStarHalf, IoIosStarOutline, IoIosStar } from 'react-icons/io'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { ImPhone, ImHome3,  } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

import { library, basketball, cafeteria, london, newyork, washington, user1, user2, about, certificate } from './images'


export const 
homePage = {
    topHeading: "World's Biggest University",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topButton: 'VISIT US TO KNOW MORE',
    courses: [
        {
            title: 'Intermediate',
            content: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc. Lorem ipsum dolor sit amet, consect et dolor et dolor"
        },
        {
            title: 'Degree',
            content: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc. Lorem ipsum dolor sit amet, consect et dolor et dolor"
        },
        {
            title: 'Post Graduation',
            content: "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc. Lorem ipsum dolor sit amet, consect et dolor et dolor"
        },
    ],
    campuses: [
        {
            location: 'London',
            pic: london
        },
        {
            location: 'New York',
            pic: newyork
        },
        {
            location: 'Washington DC',
            pic: washington
        },
    ],
    facilities: [
        {
            title: 'World Class Library',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            pic: library
        },
        {
            title: 'Largest Play Ground',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            pic: basketball
        },
        {
            title: 'Tasty and Healthy Food',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            pic: cafeteria
        },
    ],
    reviews: [
        {
            userName: 'Christine Berkley',
            pic: user1,
            rating: <> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarOutline />  </>
        },
        {
            userName: 'David Byer',
            pic: user2,
            rating: <> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />  </>
        },
    ],
    bottomHeading: 'Enroll For Our Various Online Courses Anywhere From The World',
    contactButton: 'CONTACT US'
},


aboutPage = {
    topHeading: 'About Us',
    secondHeading: "We are the world's largest university",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae perferendis eius, animi velit sapiente debitis quas quasi perspiciatis beatae id voluptatum omnis dolores ab impedit molestias vero nisi tempore.",
    button: 'EXPLORE NOW',
    pic: about
},


coursesPage = {
    topHeading: 'Our Courses',
    secondHeading: 'Courses We Offer',
    courses: homePage.courses,
    facilities: homePage.facilities
},


blogsPage = {
    topheading: 'Our Certificate & Online Programs For 2023',
    pic: certificate,
    postCategories: [
        {
            title: 'Business Analytics',
            totalPosts: 21
        },
        {
            title: 'Data Science',
            totalPosts: 28
        },
        {
            title: 'Machine Learning',
            totalPosts: 15
        },
        {
            title: 'Computer Science',
            totalPosts: 34
        },
        {
            title: 'AutoCAD',
            totalPosts: 42
        },
        {
            title: 'Journalism',
            totalPosts: 22
        },
        {
            title: 'Commerce',
            totalPosts: 13
        },
    ],
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, exercitationem laborum. Nihil, tenetur repellat? Pariatur sit qui distinctio sint, illum cumque velit hic provident dolorum doloremque minus vitae totam incidunt nam inventore animi laboriosam veniam possimus obcaecati debitis magni. \n Mollitia repellendus consectetur dolor, fugit facere recusandae facilis beatae inventore quas? Repudiandae cumque explicabo natus pariatur similique voluptates blanditiis consectetur illum consequuntur, repellendus enim modi libero temporibus dolorum, dolorem qui reprehenderit sequi molestiae expedita, iure quasi dolor tenetur quaerat? Dolor quo provident aut harum alias nihil? Nisi quia sed architecto? Nam porro praesentium natus consequuntur reprehenderit eaque, minima rem facere numquam! Illum, et alias. \n Cupiditate hic beatae modi ab rerum voluptas nisi sequi ea provident. Laudantium qui sapiente quidem aspernatur doloribus blanditiis rem harum explicabo ducimus, nostrum, recusandae, voluptatem dicta. Quis vitae quos officiis quidem dolore fugit voluptates cupiditate laudantium, suscipit ipsa. Numquam harum ex soluta voluptates consectetur maxime? Ullam, officia, dolore temporibus doloremque eius veritatis delectus velit est optio sed veniam, quis facilis porro. \n At quaerat adipisci in officiis quidem modi ut ipsum dolor. Dignissimos vel numquam provident doloremque quas, quod iusto accusamus molestias vitae quibusdam similique consequuntur omnis asperiores sint minus officia magnam autem, harum laboriosam enim dolorem suscipit!",
    
    button: 'POST COMMENT',
},


contactPage = {
    topHeading: 'Contact Us',
    address: {
        icon: <ImHome3 />,
        location: 'Xyz Road, Abc Building \n Bangalore, Kamataka, IN'
    },
    contact: {
        icon: <ImPhone />,
        phone: '+1 0123456789 \n Monday to Saturday 10 Am to 6 Pm'
    },
    emailAddress: {
        icon: <HiOutlineMail />,
        email: 'info@example.com \n Email us your query'
    },
    button: 'Send Message',
},


footerSection = {
    title: 'About Us',
    content: 'Lorem ipsum dolor sit am id, con consectetur adipiscing el aspect et, consectetur adipiscing el aspect et, consectetur adipiscing el aspect et.',
    socialIcons: <> <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaLinkedin /> </>
}
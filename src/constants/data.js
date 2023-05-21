import { IoIosStarHalf, IoIosStarOutline, IoIosStar } from 'react-icons/io'
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { ImPhone, ImHome3,  } from 'react-icons/im'
import { HiOutlineMail } from 'react-icons/hi'

import { library, basketball, cafeteria, london, newyork, washington, user1, user2, about, certificate, logo } from './images'


export const 

navMenuData = {
    logo: logo,
    logoText: 'Eduford',
    navLinks: [
        {
            page: "HOME",
            path: ''
        },
        {
            page: "ABOUT",
            path: '/about-us'
        },
        {
            page: "COURSES",
            path: '/courses'
        },
        {
            page: "BLOGS",
            path: '/blogs'
        },
        {
            page: "CONTACT",
            path: 'contact'
        },
    ],
},



homePageData = {
    topHeading: "World's Biggest University",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    topButton: 'VISIT US TO KNOW MORE',
    courses: [
        {
            title: 'Intermediate',
            content: 
                "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc. Lorem ipsum dolor sit amet, consect et dolor et dolor"
        },
        {
            title: 'Degree',
            content: 
                "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc. Lorem ipsum dolor sit amet, consect et dolor et dolor"
        },
        {
            title: 'Post Graduation',
            content: 
                "lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc. Lorem ipsum dolor sit amet, consect et dolor et dolor"
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
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            pic: library
        },
        {
            title: 'Largest Play Ground',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            pic: basketball
        },
        {
            title: 'Tasty and Healthy Food',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
            pic: cafeteria
        },
    ],
    reviews: [
        {
            reviewer: 'Christine Berkley',
            reviewerPic: user1,
            reviewerOpinion: 
                'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc dolor sit amet animi velit sapiente debitis quas quasi.',
            reviewerRating: <> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarOutline />  </>
        },
        {
            reviewer: 'David Byer',
            reviewerPic: user2,
            reviewerOpinion: 
                'Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag nunc dolor sit amet animi velit sapiente debitis quas quasi.',
            reviewerRating: <> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />  </>
        },
    ],
    bottomHeading: 'Enroll For Our Various Online Courses From  Anywhere In The World',
    contactButton: 'CONTACT US'
},



aboutPageData = {
    topHeading: 'About Us',
    secondHeading: "We are the world's largest university",
    content: 
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, exercitationem laborum. Nihil, tenetur repellat? Pariatur sit qui distinctio sint, illum cumque velit hic provident dolorum doloremque minus vitae totam incidunt nam inventore animi laboriosam veniam possimus obcaecati debitis magni.",
    button: 'EXPLORE NOW',
    pic: about
},



coursesPageData = {
    topHeading: 'Our Courses',
    secondHeading: 'Courses We Offer',
    thirdHeading: 'Our Facilities',
    courses: homePageData.courses,
    facilities: homePageData.facilities
},



blogsPageData = {
    topHeading: 'Our Certificate & Online Programs For 2023',
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
    blog: 
        <>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, exercitationem laborum. Nihil, tenetur repellat? Pariatur sit qui distinctio sint, illum cumque velit hic provident dolorum doloremque minus vitae totam incidunt nam inventore animi laboriosam veniam possimus obcaecati debitis magni. 
            </p> 
            <p>
                Mollitia repellendus consectetur dolor, fugit facere recusandae facilis beatae inventore quas? Repudiandae cumque explicabo natus pariatur similique voluptates blanditiis consectetur illum consequuntur, repellendus enim modi libero temporibus dolorum, dolorem qui reprehenderit sequi molestiae expedita, iure quasi dolor tenetur quaerat? Dolor quo provident aut harum alias nihil? Nisi quia sed architecto? Nam porro praesentium natus consequuntur reprehenderit eaque, minima rem facere numquam! Illum, et alias. 
            </p>
            <p>
                Cupiditate hic beatae modi ab rerum voluptas nisi sequi ea provident. Laudantium qui sapiente quidem aspernatur doloribus blanditiis rem harum explicabo ducimus, nostrum, recusandae, voluptatem dicta. Quis vitae quos officiis quidem dolore fugit voluptates cupiditate laudantium, suscipit ipsa. Numquam harum ex soluta voluptates consectetur maxime? Ullam, officia, dolore temporibus doloremque eius veritatis delectus velit est optio sed veniam, quis facilis porro. 
            </p>
            <p>
                At quaerat adipisci in officiis quidem modi ut ipsum dolor. Dignissimos vel numquam provident doloremque quas, quod iusto accusamus molestias vitae quibusdam similique consequuntur omnis asperiores sint minus officia magnam autem, harum laboriosam enim dolorem suscipit!"
            </p>
        </>,
    button: 'POST COMMENT',
},



contactPageData = {
    topHeading: 'Contact Us',
    button: 'SEND MESSAGE',
    contactDetails: [
        {
            icon: <ImHome3 />,
            info: <>  Xyz Road, Abc Building <br/> Bangalore, Kamataka, IN </>
        },
        {
            icon: <ImPhone />,
            info: <> 1 0123456789 <br/> Monday - Saturday, &nbsp; 10 am - 6 pm </>
        },
        {
            icon: <HiOutlineMail />,
            info: <>  info@example.com <br/> Email us your query </>
        },
    ],
},



footerSectionData = {
    title: 'About Us',
    content: 
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, exercitationem laborum. Nihil, tenetur repellat? Pariatur sit qui distinctio sint, illum cumque velit hic provident dolorum doloremque minus vitae totam incidunt nami.",
    socialIcons: [ 
        <FaFacebookF />, 
        <FaTwitter />, 
        <FaInstagram />, 
        <FaLinkedin /> 
    ]
}
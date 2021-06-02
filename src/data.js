const dummyExperiences = [
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622648220/dagoxqqocltzbhj50wz9.jpg',
        text:"Explore with a local of your choice",
        title:"Beverages"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622648205/mxpvgo8icrqsodmi6hhg.jpg',
        text:"Explore with a local of your choice",
        title:"Locals"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622648187/ycz3nrnqzbpawwhuvcru.jpg',
        text:"Explore with a local of your choice",
        title:"Exploration"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622624342/zjyt8pjtaac0alegttgj.jpg',
        text:"Explore with a local of your choice",
        title:"Travelling"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622648187/ycz3nrnqzbpawwhuvcru.jpg',
        text:"Explore with a local of your choice",
        title:"Beverages"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622459396/xkauttjqatq8zqr9zeeu.jpg',
        text:"Explore with a local of your choice",
        title:"Locals"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622625003/qmod7neczc4yhst4p4zh.jpg',
        text:"Explore with a local of your choice",
        title:"Exploration"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1622459400/ocrvwe1aoqupphaogvbe.jpg',
        text:"Explore with a local of your choice",
        title:"Travelling"
    },
]

//lets do a quick filter
//we want to return only the first 6 images for the sake of the grid design

export const sixImagesWeWant = dummyExperiences.filter((item,index)=>index<=5);

export default dummyExperiences;

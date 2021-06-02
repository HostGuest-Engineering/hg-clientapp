const dummyExperiences = [
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827952/image3_onnomy.jpg',
        text:"Explore with a local of your choice",
        title:"Beverages"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827944/image2_mhysas.jpg',
        text:"Explore with a local of your choice",
        title:"Locals"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827943/colors2_remstc.jpg',
        text:"Explore with a local of your choice",
        title:"Exploration"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827943/colors1_mniwl8.jpg',
        text:"Explore with a local of your choice",
        title:"Travelling"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827952/image3_onnomy.jpg',
        text:"Explore with a local of your choice",
        title:"Beverages"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827944/image2_mhysas.jpg',
        text:"Explore with a local of your choice",
        title:"Locals"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827943/colors2_remstc.jpg',
        text:"Explore with a local of your choice",
        title:"Exploration"
    },
    {
        img: 'https://res.cloudinary.com/liveservers/image/upload/v1621827943/colors1_mniwl8.jpg',
        text:"Explore with a local of your choice",
        title:"Travelling"
    },
]

//lets do a quick filter
//we want to return only the first 6 images for the sake of the grid design

export const sixImagesWeWant = dummyExperiences.filter((item,index)=>index<=5);

export default dummyExperiences;

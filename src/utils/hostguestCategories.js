const hostguestCategories = [
    {
        category: "Sports And Health",
        value: "Sports And Health",
        key:0
    },
    {
        category: "Music And Dance",
        value: "Music And Dance",
        key:1
    },
    {
        category: "Arts Craft And Culture",
        value: "Arts Craft And Culture",
        key:2
    },
    {
        category: "Adrenaline And Adventure / Nature And Outdoors",
        value: "Adrenaline And Adventure / Nature And Outdoors",
        key:3
    },
    {
        category: "Night Life And Parties",
        value: "Night Life And Parties",
        key:4
    },
    {
        category: "Improv Magic And Comedy",
        value: "Improv Magic And Comedy",
        key:5
    },
    {
        category: "Sci-fi And Games",
        value: "Sci-fi And Games",
        key:6
    },
    {
        category: "Wellness And Spirituality",
        value: "Wellness And Spirituality",
        key:7
    },
    {
        category: "Food And Drink",
        value: "Food And Drink",
        key:8
    },
    {
        category: "Social Good",
        value: "Social Good",
        key:9
    },
    {
        category: "Lectures And Workshops",
        value: "Lectures And Workshops",
        key:10
    },

]


export default hostguestCategories;

export const handleSubCategories = (category)=>{
    return {
        'Sports And Health':[
            {
                category: "Athletics",
                value: "Athletics",
                key: 1
            },{
                category: "Fencing",
                value: "Fencing",
                key: 2
            }, {
                category: "Work Out Sessions",
                value: "Work Out Sessions",
                key: 3
            }, {
                category: "Kung Fu",
                value: "Kung Fu",
                key: 4
            }, {
                category: "Samurai Sword Fighting",
                value: "Samurai Sword Fighting",
                key: 5
            }, {
                category: "Calisthenics",
                value: "Calisthenics",
                key: 6
            }, {
                category: "Acrobatics",
                value: "Acrobatics",
                key: 7
            }, {
                category: "Board Games",
                value: "Board Games",
                key: 8
            }, {
                category: "Bowling",
                value: "Bowling",
                key: 9
            }, {
                category: "Pong",
                value: "Pong",
                key: 10
            },
            {
                category: "Gymnastics",
                value: "Gymnastics",
                key: 11
            }, {
                category: "Cycling",
                value: "Cycling",
                key: 12
            }, {
                category: "Yoga",
                value: "Yoga",
                key: 13
            }, {
                category: "Swimming",
                value: "Swimming",
                key: 14
            }, {
                category: "Spin classes",
                value: "Spin classes",
                key: 15
            }, {
                category: "Badminton",
                value: "Badminton",
                key: 16
            }, {
                category: "Golf",
                value: "Golf",
                key: 17
            }, {
                category: "Lawn / Table Tennis",
                value: "Lawn / Table Tennis",
                key: 18
            }, {
                category: "Roller Skating",
                value: "Roller Skating",
                key: 19
            }, {
                category: "Self Defense Classes",
                value: "Self Defense Classes",
                key: 20
            }, {
                category: "Martial Arts",
                value: "Martial Arts",
                key: 21
            }
        ],
        'Music And Dance': [
            {
                category: "Samurai Sword Fighting",
                value: "Private Musical Concerts(jazz,hip-hop, rock, EDM, RNB,karaoke)",
                key: 5
            }, {
                category: "Private Jam Sessions",
                value: "Private Jam Sessions",
                key: 6
            }, {
                category: "Salsa Classes",
                value: "Salsa Classes",
                key: 7
            }, {
                category: "Musician Hangouts",
                value: "Musician Hangouts",
                key: 8
            }, {
                category: "Ballroom Dances",
                value: "Ballroom Dances",
                key: 9
            }, {
                category: "Jazz Concerts",
                value: "Jazz Concerts",
                key: 10
            }, {
                category: "Operas",
                value: "Operas",
                key: 11
            }, {
                category: "Dance Improvisations",
                value: "Dance Improvisations",
                key: 12
            }, {
                category: "Samba Classes",
                value: "Samba Classes",
                key: 13
            }, {
                category: "Ballet",
                value: "Ballet",
                key: 14
            }, {
                category: "Poetry",
                value: "Poetry",
                key: 15
            }, {
                category: "Hip Hop street dances",
                value: "Hip Hop street dances",
                key: 16
            }, {
                category: "African ceremonies",
                value: "African ceremonies",
                key: 17
            }, {
                category: "A Capella",
                value: "A Capella",
                key: 18
            }, {
                category: "Drumming",
                value: "Drumming",
                key: 19
            }, {
                category: "Chanting Mantras",
                value: "Chanting Mantras",
                key: 20
            }, {
                category: "Musical chairs",
                value: "Musical chairs",
                key: 21
            }
        ],
        'Adrenaline And Adventure / Nature And Outdoors': [
        {
            category: "Horseback riding",
            value: "Horseback riding",
            key: 1
        }, {
            category: "Camping",
            value: "Camping",
            key: 2
        }, {
            category: "Bungee jumping",
            value: "Bungee jumping",
            key: 3
        }, {
            category: "Skydiving",
            value: "Skydiving",
            key: 4
        }, {
            category: "Hiking",
            value: "Hiking",
            key: 5
        }, {
            category: "Ziplining",
            value: "Ziplining",
            key: 6
        }, {
            category: "Rock climbing",
            value: "Rock climbing",
            key: 7
        }, {
            category: "Canyoning",
            value: "Canyoning",
            key: 8
        }, {
            category: "Cliff jumping",
            value: "Cliff jumping",
            key: 9
        }, {
            category: "Roller coasting",
            value: "Roller coasting",
            key: 10
        }, {
            category: "Gliding",
            value: "Gliding",
            key: 11
        }, {
            category: "Caving",
            value: "Caving",
            key: 12
        }, {
            category: "Mountain biking",
            value: "Mountain biking",
            key: 13
        }, {
            category: "Birdwatching",
            value: "Birdwatching",
            key: 14
        }, {
            category: "Disc golf",
            value: "Disc golf",
            key: 15
        }
    ],
    'Arts Craft And Culture': [
        {
            category: "Making mosaics",
            value: "Making mosaics",
            key: 1
        }, {
            category: "Carpentry",
            value: "Carpentry",
            key: 2
        }, {
            category: "Picture puzzles",
            value: "Picture puzzles",
            key: 3
        }, {
            category: "Photography and Film",
            value: "Photography and Film",
            key: 4
        }, {
            category: "Poetry in parks",
            value: "Poetry in parks",
            key: 5
        }, {
            category: "Decorating",
            value: "Decorating",
            key: 6
        }, {
            category: "Designing",
            value: "Designing",
            key: 7
        }, {
            category: "Molding",
            value: "Molding",
            key: 8
        }, {
            category: "Weaving",
            value: "Weaving",
            key: 9
        }, {
            category: "Sewing",
            value: "Sewing",
            key: 10
        }, {
            category: "Acrylics",
            value: "Acrylics",
            key: 11
        }, {
            category: "Bead Making",
            value: "Bead Making",
            key: 12
        }, {
            category: "Sculpting",
            value: "Sculpting",
            key: 13
        }, {
            category: "Painting",
            value: "Painting",
            key: 14
        }, {
            category: "Makeup Classes",
            value: "Makeup Classes",
            key: 15
        }
    ],
    'Night Life And Parties': [
        {
            category: "Costume Parties",
            value: "Costume Parties",
            key: 4
        }, {
            category: "Nighttime Pool Parties",
            value: "Nighttime Pool Parties",
            key: 5
        }, {
            category: "Bonfires",
            value: "Bonfires",
            key: 6
        }, {
            category: "Club Hopping",
            value: "Club Hopping",
            key: 7
        }, {
            category: "Dinner Experiences",
            value: "Dinner Experiences",
            key: 8
        }, {
            category: "House Parties",
            value: "House Parties",
            key: 9
        }, {
            category: "Haunted house experiences",
            value: "Haunted house experiences",
            key: 10
        }
    ],
    'Improv Magic And Comedy': [
        {
            category: "Comedy Classes",
            value: "Comedy Classes",
            key: 2
        }, {
            category: "Improv Classes",
            value: "Improv Classes",
            key: 3
        }, {
            category: "Stand Up Comedy",
            value: "Stand Up Comedy",
            key: 4
        }, {
            category: "Magic Shows",
            value: "Magic Shows",
            key: 5
        }
    ],
    'Sci-fi And Games': [
        {
            category: "Treasure Hunts",
            value: "Treasure Hunts",
            key: 1
        }, {
            category: "Alternate Reality Games",
            value: "Alternate Reality Games",
            key: 2
        }, {
            category: "Board Game Competitions",
            value: "Board Game Competitions",
            key: 3
        }, {
            category: "Trivia",
            value: "Trivia",
            key: 4
        }, {
            category: "Escape Room Experiences",
            value: "Escape Room Experiences",
            key: 5
        }, {
            category: "Console & PC Live Games",
            value: "Console & PC Live Games",
            key: 6
        }
    ],
    'Wellness And Spirituality': [
        {
            category: "Religious Holiday Celebrations",
            value: "Religious Holiday Celebrations",
            key: 1
        }, {
            category: "Church Gatherings",
            value: "Church Gatherings",
            key: 2
        }, {
            category: "Fasting Sessions",
            value: "Fasting Sessions",
            key: 3
        }, {
            category: "Prayer Meetings",
            value: "Prayer Meetings",
            key: 4
        }, {
            category: "Samadhi Classes",
            value: "Samadhi Classes",
            key: 5
        }, {
            category: "Yoga",
            value: "Yoga",
            key: 6
        }, {
            category: "Meditation",
            value: "Meditation",
            key: 7
        }
    ],
    'Food And Drink': [
        {
            category: "Cooking Classes",
            value: "Cooking Classes",
            key: 1
        }, {
            category: "Food Tours",
            value: "Food Tours",
            key: 2
        }, {
            category: "Wine Connoisseuring Classes",
            value: "Wine Connoisseuring Classes",
            key: 3
        }, {
            category: "Gin / Whiskey Tasting",
            value: "Gin / Whiskey Tasting",
            key: 4
        }, {
            category: "Beer Making Classes",
            value: "Beer Making Classes",
            key: 5
        }, {
            category: "Private Dinners",
            value: "Private Dinners",
            key: 6
        }, {
            category: "Brunches",
            value: "Brunches",
            key: 7
        }, {
            category: "Baking Experiences",
            value: "Baking Experiences",
            key: 8
        }
    ],
    'Social Good': [
        {
            category: "Orphanage Visits",
            value: "Orphanage Visits",
            key: 1
        }, {
            category: "Visits to Cancer Centers",
            value: "Visits to Cancer Centers",
            key: 2
        }, {
            category: "Volunteering",
            value: "Volunteering",
            key: 3
        }, {
            category: "Child Care",
            value: "Child Care",
            key: 4
        }, {
            category: "Community Services",
            value: "Community Services",
            key: 5
        }, {
            category: "Caring for people with disabilities",
            value: "Caring for people with disabilities",
            key: 6
        }
    ],
    'Lectures And Workshops': [{
            category: "Lectures and Workshops",
            value: "Lectures and Workshops",
            key: 1
        }, {
            category: "Coding Bootcamps",
            value: "Coding Bootcamps",
            key: 2
        }, {
            category: "Entreprenuership Classes",
            value: "Entreprenuership Classes",
            key: 3
        }, {
            category: "Business Classes",
            value: "Business Classes",
            key: 4
        }, {
            category: "Science / Engineering Lectures",
            value: "Science / Engineering Lectures",
            key: 5
        }
    ]
    }[category]
}
var responses = {};

var getOrg = '{\
            "splashImageURL":"http://media.nbcdfw.com/images/653*367/ARC+Logo+2015b.jpg",\
            "imageURL": "https://pbs.twimg.com/profile_images/681113912595464193/mnEs5a6u.jpg",\
            "name":"Dallas Red Cross",\
            "username":"username",\
            "missionStatement":"we will eventually add more fields",\
            "otherInfo":"Lorem Ipsum Dolor Sit amet consectetur",\
            "condensedEvents":[\
                {\
                    "imageURL": "http://site.xyz/img/orgs/<Org_Name>/events/splash.jpg",\
                    "title": "<Event_Title>",\
                    "org":"<Org_Name>",\
                    "eventURL":"http://site.xyz/orgs/<Org_Name>/<Event_Title>/",\
                    "location":"<Location>",\
                    "attendees":10,\
                    "maxAttendees":30\
                },{\
                    "imageURL": "http://site.xyz/img/orgs/<Org_Name>/events/splash.jpg",\
                    "title": "<Event_Title>",\
                    "org":"<Org_Name>",\
                    "eventURL":"http://site.xyz/orgs/<Org_Name>/<Event_Title>/",\
                    "location":"<Location>",\
                    "attendees":10,\
                    "maxAttendees":30\
                }\
            ],\
            "condensedVolunteers":[\
                {\
                    "imageURL": "http://site.xyz/img/users/username/profile.jpg",\
                    "firstName":"Hugh",\
                    "lastName":"Mungus",\
                    "username":"mongo",\
                    "profileURL":"http://site.xyz/users/mongo"\
                },{\
                    "imageURL": "http://site.xyz/img/users/username/profile.jpg",\
                    "firstName":"John",\
                    "lastName":"Higgins",\
                    "username":"higgy",\
                    "profileURL":"http://site.xyz/users/mongo"\
                }\
            ]\
}';
responses.getOrg = JSON.parse(getOrg);
module.exports = responses;

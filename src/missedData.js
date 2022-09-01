import  PhoneMissedIcon  from "@mui/icons-material/PhoneMissed";

const missedData = [ 
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1620418025834-f4379baf1de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvJTIwc291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Mr Lai',
        desc: "Missed",
        icon: (<PhoneMissedIcon style={{fontSize: 'large', color: 'red', marginRight: '5px'}} />),
        time: 'Yesterday',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1614777986387-015c2a89b696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpJTIwYm9sb2duZXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Akere koro',
        desc: "Missed",
        icon: (<PhoneMissedIcon style={{fontSize: 'large', color: 'red', marginRight: '5px'}} />),
        time: 'Thursday',
    },
]

export default missedData
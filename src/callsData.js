import  CallReceivedIcon  from "@mui/icons-material/CallReceived";
import  CallMadeIcon  from "@mui/icons-material/CallMade";

const callsData = [
    {
        id: 1,
        img: 'https://media.istockphoto.com/photos/hot-dog-with-french-fries-chips-top-view-picture-id472083538?k=20&m=472083538&s=612x612&w=0&h=CDljy3DK0GayRZxiIRX-98OCyit_H0kspgcCeHPk6ug=',
        name: 'Kwesi Arthur',
        desc: "Outgoing",
        icon: (<CallMadeIcon style={{fontSize: 'large', color: 'green', marginRight: '5px'}} />),
        time: '09:03',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Animashaun',
        desc: "Incoming",
        icon: (<CallReceivedIcon style={{fontSize: 'large', color: 'green', marginRight: '5px'}} />),
        time: '12:48',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Shola Church',
        desc: "Outgoing",
        icon: (<CallMadeIcon style={{fontSize: 'large', color: 'green', marginRight: '5px'}} />),
        time: '03:38',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1582454235987-1e597bafcf58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: 'Shegbowe',
        desc: "Outgoing",
        icon: (<CallMadeIcon style={{fontSize: 'large', color: 'green', marginRight: '5px'}} />),
        time: '18:30'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1620418025834-f4379baf1de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvJTIwc291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Mr Lai',
        desc: "Incoming",
        icon: (<CallReceivedIcon style={{fontSize: 'large', color: 'green', marginRight: '5px'}} />),
        time: 'Yesterday',
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1614777986387-015c2a89b696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpJTIwYm9sb2duZXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Akere koro',
        desc: "Incoming",
        icon: (<CallReceivedIcon style={{fontSize: 'large', color: 'green', marginRight: '5px'}} />),
        time: 'yesterday',
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1550367363-ea12860cc124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYiUyMGNob3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Iyana Oba',
        desc: "Outgoing",
        icon: (<CallMadeIcon style={{fontSize: 'large', color: 'green', marginRight: '5px'}} />),
        time: '11/08/22',
    },

]

export default callsData;
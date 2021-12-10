import MeetupList from '../components/meetups/MeetupList'

  const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a first meetup!'
    },
    {
      id: 'm2',
      title: 'A Second Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 10, 12345 Some City',
      description: 'This is a second meetup!'
    }
  ];

  export default function Home(props) {
    
    return (
      <MeetupList meetups={props.meetups}/>
    )
  }

  // export async function getServerSideProps(contex){
  //   const req = contex.req;
  //   const res = contex.res;

  //   return{
  //     props:{
  //       meetups:DUMMY_MEETUPS
  //     }
  //   }
  // }

  export async function getStaticProps() {
    return{
      props:{
        meetups : DUMMY_MEETUPS
      },
      revalidate:1 //it will re-rander page after every second
    }
  } 
import MeetupItem from '../../components/meetups/MeetupItem'

export function MeetupDetails (){
    return(
        <MeetupItem
            image = {'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'}
            title={'A First Meetup'}
            address = {'Some address 5, 12345 Some City'}
            description = {'This is a first meetup!'}
        />
    )
}
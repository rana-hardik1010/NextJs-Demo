import {useRouter} from 'next/router'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
    const router = useRouter();
    return (
        <NewMeetupForm/>
    )
}

export default NewMeetup
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Profile: FunctionComponent = () => {
  const DATA_PROFILE = gql`
    query profileData {
      myProfile {
        id
        avatar {
          smallUrl
        }
        firstname
        lastname
        language
        birthDate
        isVisible
        retribution
      }
    }
  `

  const { loading, error, data } = useQuery(DATA_PROFILE)

  console.log('data', data)
  console.log('error', error)
  return (
    <>
      <Link to="/">Home</Link>
    </>
  )
}
export default Profile

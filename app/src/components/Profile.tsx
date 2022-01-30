import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfilForm from './ProfileForm'
import ProfilInformation from './ProfileInformation'

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

  const [edit, setEdit] = useState(false)
  const { loading, error, data } = useQuery(DATA_PROFILE)
  const toggleEdit = () => {
    setEdit(!edit)
  }
  console.log('data', data)
  console.log('error', error)
  return (
    <>
      <Link to="/"> &#x2190; Home</Link>
      <div className="flex flex-col items-center justify-center gap-3 mb-10">
        <img
          className="h-32 w-32 object-cover rounded-full border"
          src={`http://localhost:4000${data?.myProfile.avatar.smallUrl}`}
          alt="user"
        />
        <h1 className="text-3xl">
          {data?.myProfile.firstname} {data?.myProfile.lastname}
        </h1>
      </div>
      <section className="text-lg">
        <div className="flex">
          <h2 className="text-2xl mb-3">Information</h2>
          <img
            onClick={toggleEdit}
            className="h-4 w-5 object-contain ml-2"
            src="https://www.nicepng.com/png/detail/32-324948_pen-clipart-logo-png-edit-pencil-icon-png.png"
            alt="edit"
          />
        </div>

        {edit ? (
          <ProfilForm profile={data?.myProfile} />
        ) : (
          <ProfilInformation profile={data?.myProfile} />
        )}
      </section>
    </>
  )
}
export default Profile

import { FunctionComponent } from 'react'
import Moment from 'react-moment'

interface Profile {
  birthDate: string
  language: string
  isVisible: boolean
  retribution: number
}
const ProfileInformation: FunctionComponent<{ profile: Profile }> = ({ profile }) => (
  <div>
    <p>
      Birthdate: <Moment format="DD/MM/YYYY" date={profile.birthDate} />
    </p>
    <p>Language: {profile.language}</p>
    <p>Retribution: {profile.retribution} €/day</p>
    <p>
      Visible profil:{' '}
      <span className={profile.isVisible ? 'text-green-700' : 'text-red-700'}>
        {profile.isVisible ? 'Yes' : 'No'}
      </span>
    </p>
  </div>
)

// const ReactFCComponent: React.FC<{ profile: Profile }> = ({ children, profile }) => {
//   return <div title={title}>{children}</div>
// }

export default ProfileInformation

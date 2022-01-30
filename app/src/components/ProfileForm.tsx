import { useMutation } from '@apollo/client'
import { Field, Form, Formik } from 'formik'
import gql from 'graphql-tag'
import { FunctionComponent } from 'react'

interface Profile {
  firstname: string
  lastname: string
  isVisible: boolean
  retribution: number
}
const ProfileForm: FunctionComponent<{ profile: Profile }> = ({ profile }) => {
  const MODIFY_PROFILE = gql`
    mutation modifyProfile {
      modifyProfile(input: $newProfile) {
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
  const [modifyProfile, newProfile] = useMutation(MODIFY_PROFILE)
  return (
    <div>
      <Formik
        initialValues={{
          isVisible: profile.isVisible,
          firstName: profile.firstname,
          lastName: profile.lastname,
          retribution: profile.retribution,
        }}
        onSubmit={async (values) => {
          profile.isVisible = values.isVisible
          profile.firstname = values.firstName
          profile.lastname = values.lastName
          profile.retribution = values.retribution
          modifyProfile({
            variables: { newProfile: { ...profile } },
          })
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form className="flex flex-col gap-1 w-1/2">
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" />

          <label>
            <Field type="checkbox" name="toggle" /> Visible profile
          </label>

          <label htmlFor="retribution">Retribution (€/day)</label>
          <Field id="retribution" name="retribution" type="number" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default ProfileForm

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
    mutation modifyProfile($newProfile: Profile!) {
      modifyProfile(input: $newProfile) {
        input
      }
    }
  `

  const [modifyProfile, { data, loading, error }] = useMutation(MODIFY_PROFILE)
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
          const newProfile = { ...profile }
          newProfile.isVisible = values.isVisible
          newProfile.firstname = values.firstName
          newProfile.lastname = values.lastName
          newProfile.retribution = values.retribution
          console.log(newProfile)
          modifyProfile({
            variables: { input: { ...newProfile } },
          })
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

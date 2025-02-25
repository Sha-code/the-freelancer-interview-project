import { gql } from 'graphql-tag'
import { Language, Profile, Resolvers } from '../generated/graphql'

/**
 * Use this object mock as if it was retrieved from a database.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MOCK_FREELANCER = {
  id: 'a6af7583-ff4b-44b5-abc7-daf5444f3b9b',
  avatar: {
    '64x64': '/avatar/a6af7583-ff4b-44b5-abc7-daf5444f3b9b/64x64.png',
    '256x256': '/avatar/a6af7583-ff4b-44b5-abc7-daf5444f3b9b/256x256.png',
    '512x512': '/avatar/a6af7583-ff4b-44b5-abc7-daf5444f3b9b/512x512.png',
  },
  firstname: 'Gordon',
  lastname: 'Champlin',
  language: Language.KLINGON,
  birthDate: new Date(1990, 12, 31).toISOString(),
  isVisible: false,
  retribution: 500,
}

export const typeDefs = gql`
  type Avatar {
    smallUrl: String!
    largeUrl: String!
    xLargeUrl: String!
  }

  enum Language {
    FRENCH
    ENGLISH
    KLINGON
  }

  # Todo: Write a type for the freelancer's profile.
  type Profile {
    id: String!
    avatar: Avatar!
    firstname: String!
    lastname: String!
    language: Language!
    birthDate: String!
    isVisible: Boolean!
    retribution: Int!
  }
  type Query {
    helloWorld: String!

    # Todo: Write a query to retrieve the current freelancer's profile.
    myProfile: Profile!
  }

  # Todo: Write a mutation to update the current freelancer's profile.
  type Mutation {
    modifyProfile: Profile!
  }
`

export const resolvers: Resolvers = {
  Query: {
    /**
     * Example of resolver.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    helloWorld(root, args, context) {
      return 'Hello!'
    },

    /**
     * @Todo
     * Implement the query to retrieve the current freelancer's profile.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    myProfile(root, args, context) {
      const profile: Profile = {
        ...MOCK_FREELANCER,
        avatar: {
          smallUrl: MOCK_FREELANCER.avatar['64x64'],
          largeUrl: MOCK_FREELANCER.avatar['256x256'],
          xLargeUrl: MOCK_FREELANCER.avatar['512x512'],
        },
      }
      return profile
    },
  },

  /**
   * @Todo
   * Implement the mutation to update the current freelancer's profile.
   */
  Mutation: {
    modifyProfile(input) {
      console.log('input in mutation', input)
      const newProfile = {
        ...input,
      }
      return newProfile
    },
  },
}

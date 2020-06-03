<template>
    <div>
     <feed-pages
       :basisPosts="basisPosts"
     />
    </div>
</template>

<script>

import FeedPages from '../components/Pages/feed/feedPages'
export default {
  name: 'feedPage',
  components: { FeedPages },
  data: function () {
    return {
      postId: Date.now(),
      postId2: this.postId++,
      // basis posts
      basisPosts: [
        {
          id: 1,
          Name: 'Theresa Steward',
          profession: 'iOS developer',
          profileFace: 'https://cdn1.savepice.ru/uploads/2020/5/30/3a0b077358bb1d44874a37a6d471cc31-full.png',
          message: 'What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).',
          feedSocial: 'and liked this',
          feedLink: 'Ted Bell,Annette Nguyen, Cody Hawkins',
          url: '',
          likes: 42,
          comments: 9,
          files: '',
          fileName: '',
          flag: false,
          type: '',
          size: ''
        },
        {
          id: 2,
          Name: 'Kyle Fisher',
          profileFace: 'https://cdn1.savepice.ru/uploads/2020/5/30/5bf25d2a9fdcfa0981025351094c0716-full.png',
          profession: 'Product designer at Commandor Corp.',
          message: 'How’s your day going, guys?',
          url: 'https://cdn1.savepice.ru/uploads/2020/5/30/f63562290ce089c78de851954436d949-full.png' || '',
          feedSocial: 'comment this',
          feedLink: 'Audrey Alexander',
          likes: 12,
          comments: 3,
          files: '',
          fileName: '',
          flag: false,
          type: 'image/png',
          size: ''
        },
        {
          id: 3,
          Name: 'Brandon Wilson',
          profileFace: 'https://cdn1.savepice.ru/uploads/2020/5/30/1b1bebf98ba1dc37ebd03a1da534f882-full.png',
          profession: 'Senior UX designer',
          message: 'There is some new guidelines for iOS',
          url: '',
          feedSocial: 'High rated post from your feed',
          feedLink: '',
          likes: 89,
          comments: 7,
          files: this.posts || '',
          file2: this.posts || '',
          fileName: 'iOS 11 guidelines for UX/UI designers' || '',
          fileName2: 'iOS 11 guidelines for developers' || '',
          type: 'PDF',
          flag: true,
          size: 324 || '',
          size2: 245 || ''
        },
        {
          id: 4,
          Name: 'Audrey Alexander',
          profileFace: 'https://cdn1.savepice.ru/uploads/2020/5/30/37f2832fcda043d97d668eac212b41ef-full.png',
          profession: 'STeam lead at Google',
          message: 'The bun runs along the road and meets a wolf.' +
            ' «Little bun, little bun, I want to eat you!» says the wolf. ' +
            '«I ran away from Grandfather, I ran away from Grandmother, ' +
            'I ran away from the hare. And I can run away from you,' +
            ' grey wolf!» says the bun and runs away.',
          url: '',
          feedSocial: 'First post from',
          feedLink: 'Audrey Alexander',
          likes: 10,
          comments: 0,
          files: '',
          fileName: '',
          type: '',
          flag: false,
          size: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

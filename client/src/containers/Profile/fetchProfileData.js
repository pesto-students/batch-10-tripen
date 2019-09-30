export default function fetchProfileData(userId, setUserData) {
  const isLoggedIn = () => true;
  const dummyData = {
    userId,
    isLoggedIn: isLoggedIn(),
    username: 'DK22',
    fullName: 'Donkey Kong',
    profilePic: 'http://lorempixel.com/100/100/people/',
    publicTimelines: [
      {
        timelineId: 'DK22T123',
        coverPicUrl: '',
        title: 'title123',
        tagline: 'tagline123',
      },
      {
        timelineId: 'DK22T1234',
        coverPicUrl: '',
        title: 'title1234',
        tagline: 'tagline1234',
      },
    ],
    privateTimelines: [
      {
        timelineId: '_DK22T12345',
        coverPicUrl: '',
        title: 'title12345',
        tagline: 'tagline12345',
      },
    ],
  };
  setUserData(dummyData);
}

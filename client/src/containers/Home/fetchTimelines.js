export default function fetchTimelines(setTimelineData, setIsFetching) {
  setIsFetching(true);
  const timelineData = [
    {
      _id: 'DK22T123',
      coverImg: 'http://lorempixel.com/180/100/nature/',
      title: 'title123',
      tagline: 'tagline123',
      updatedAt: '2019-10-01T12:50:11Z',
    },
    {
      _id: 'DK22T1234',
      coverImg: 'http://lorempixel.com/180/100/nature/',
      title: 'title1234',
      tagline: 'tagline1234',
      updatedAt: '2019-10-01T12:50:11Z',
    },
    {
      _id: 'DK22T1235',
      coverImg: 'http://lorempixel.com/180/100/nature/',
      title: 'title1235',
      tagline: 'tagline1235',
      updatedAt: '2019-10-01T12:50:11Z',
    },
    {
      _id: 'DK22T1236',
      coverImg: 'http://lorempixel.com/180/100/nature/',
      title: 'title1236',
      tagline: 'tagline1236',
      updatedAt: '2019-10-01T12:50:11Z',
    },
  ];
  setTimelineData(timelineData);
}

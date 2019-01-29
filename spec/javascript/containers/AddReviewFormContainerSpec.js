import NewReviewPage from '../../../app/javascript/react/containers/NewReviewFormContainer'
import fetchMock from 'fetch-mock'

describe('review new page', () => {
  it('should pass', () => {
    fetchMock.get('/api/v1/airlines/5/reviews', {
      status: 201,
    });
    fetch('/api/v1/airlines/5/reviews').then(() => {console.log('working?')}).catch(() => { console.log('error')})
  });
});

import commentCounter from "./commentCounter";

describe('test counter function', () => {
  
  test('comment counter counts', () => {

    const testData = [
      {
        item_id: 1,
        username: 'jim',
        comment: 'this is a test',
      },
      {
        item_id: 1,
        username: 'jim',
        comment: 'this is a test',
      },
      {
        item_id: 1,
        username: 'jim',
        comment: 'this is a test',
      },
      {
        item_id: 1,
        username: 'jim',
        comment: 'this is a test',
      },
    ]
  
    const execution = commentCounter(testData);
  
  
    expect(execution).toBe(testData.length);
  })
  
  test('empty should return 0', () => {
  
    const testData = []
  
    const execution = commentCounter(testData);
  
    expect(execution).toBe(testData.length);
  })
})


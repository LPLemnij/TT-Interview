// This excercise is meant for you to showcase what you can do from a programming perspective and how well you can interact with apis, etc.
// What you have to do is make a button that fetches data from 'https://jsonplaceholder.typicode.com/posts' when clicked and displays the
// first word of the title and the first word of the body in a scrollable table. No need to worry about making it look good too much,
// this is not a styling interview.
//
// Partial example of json response from above link: [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   }
// ]

function Fetching() {
  return <div>Table Goes Here</div>
}

export default Fetching

// function Fetching() {
//     const [firstWordTitle, setFirstWordTitle] = useState([])
//     const [firstWordBody, setFirstWordBody] = useState([])

//     let data = fetch('https://jsonplaceholder.typicode.com/posts').then((data) =>
//       data.json().then((data) => console.log(data))
//     )

//     const getFirstWord = (data) => {
//       for (let i = 0; i < data.length; i++) {
//         let bodyArr = []
//         let titleArr = []
//         bodyArr.push(data[i].body.split(' '))
//       }
//     }

//     useEffect(() => {
//       getFirstWord(data)
//     }, [])

//     return <div>Table Goes Here</div>
//   }

//   export default Fetching

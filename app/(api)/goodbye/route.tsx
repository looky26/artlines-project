// export async function GET(request: Request) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
//     return new Response(JSON.stringify(data));
//   }




export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}



export default function Home() {
const url = process.env.NEXT_PUBLIC_ENVIROMENT
console.log("hello", url)
  return (
    <div className="font-rubik">
      Hello World {url}
    </div>
  );
}

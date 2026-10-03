const teladesenho = new Array(500).fill(null);


export default function Tela() {
  return (
    <div className="grid grid-cols-[repeat(25,1fr)] w-[500px] h-[400px] border border-gray-800 mx-auto mt-10">
      {teladesenho.map((_, index) => (
        <div key={index} className="border border-gray-300 aspect-square"></div>
      ))}
    </div>
  );
}
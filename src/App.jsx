export default function App() {

  const file = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const kaspersky = [[1, 2], [7, 9]]

  const isPresent = (index) => {
    const status = kaspersky.every(obj => {
      if ((obj[0] <= index) && index <= obj[1]) {
        return false
      }
      else {
        return true
      }
    })

    return !status
  }

  return (
    <div className="p-3 flex justify-center items-center gap-3">
      <div>Kaspersky</div>
      <div className="w-full bg-slate-400 h-10 border-2 flex">
        {
          file.map((singleFile) => {
            return <div key={singleFile} className={`h-full w-full ${isPresent(singleFile) ? "bg-red-400" : "bg-green-400"} border p-2 text-center`}>{singleFile}</div>
          })
        }
      </div>
    </div>
  )
}
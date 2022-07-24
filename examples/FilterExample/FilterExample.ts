import { punctuation } from "../../utils/constants"

type TExampleArray = {
  id: number
  name: string
}

const ExampleArray: TExampleArray[] = [
  {
    id: 1,
    name: 'teste-1'
  },
  {
    id: 2,
    name: 'teste-2'
  }
]

const filterArray = ExampleArray.filter(item => item.name.toString().normalize('NFD').replace(punctuation, "").includes('teste-1') && item.id.toString().includes('1'))
  .map(item => item)

console.log(filterArray)
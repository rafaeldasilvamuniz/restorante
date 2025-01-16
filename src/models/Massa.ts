class Massa {
  id: number
  description: string
  image: string
  infos: string[]
  title: string
  button: JSX.Element
  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    button: JSX.Element
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.button = button
  }
}

export default Massa

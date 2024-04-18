type Props = {
  name: String
}

function Icon({ name }: Props) {
  return <span className="material-symbols-outlined">{name}</span>
}

export default Icon

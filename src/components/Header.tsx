import { Button } from "./Button"

interface headerProps {
  title: string,

  showAdd: boolean,
  onAdd(): void,

}

const Header = (props: headerProps) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color={props.showAdd ? "red" : "green" } text={props.showAdd ? "Close" : "Add"} onClick={props.onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

export default Header
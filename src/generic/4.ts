/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Task {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Task> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { Page };

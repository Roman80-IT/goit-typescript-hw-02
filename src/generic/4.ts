/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

//* Використовуємо `interface` для визначення типу властивостей компонента
interface ComponentProps {
  title: string;
}

//* Клас компонента, який приймає тип T, що розширює інтерфейс ComponentProps
class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

//* Клас сторінки, який розширює клас Component та використовує інтерфейс ComponentProps
class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад використання
const pageInstance = new Page({ title: "My Page" });
pageInstance.pageInfo();

export {};

import "./App.css";
import Subscribers from "./component/Subscribers";
// 리덕스를 사용하기 위해 기본앱을 provider라는 걸로 감싸야함
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./component/Display";
import Views from "./component/Views";
import Comments from "./component/Comments";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comments />
        <Subscribers />
        <Views />
        <Display />
      </div>
    </Provider>
  );
}

export default App;

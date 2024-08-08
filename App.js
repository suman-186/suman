import './App.css';
import Header from './Header';
import { Formik } from 'formik';
import * as Yup from 'yup';



 function App() {
  return (
    <div>
      <Header/>
      <Formik/>
    </div>
  )
}
export default App
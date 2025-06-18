import logo from './logo.svg';
import './App.css';
import ValidatedInput from './components/ValidatedInput';
import EmailPasswordValidation from './components/EmailPasswordValidation';
import MultiInputValidationForm from './components/MultiInputValidationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Bài tập 4: Form Validation</h1>
        <ValidatedInput />
        <hr style={{ margin: '20px 0', width: '80%', borderColor: 'white' }} />
        <h1>Bài tập 5: Email và Mật khẩu Validation</h1>
        <EmailPasswordValidation />
        <hr style={{ margin: '20px 0', width: '80%', borderColor: 'white' }} />
        <h1>Bài tập 6: Multi Input Validation Form</h1>
        <MultiInputValidationForm />
      </header>
    </div>
  );
}

export default App;

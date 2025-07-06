import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import './App.css';

const CLIENT_ID = '380190720976-7at8eicpfav7h62oiant1hemqopltt44.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleLogin = () => {
    const auth = gapi.auth2.getAuthInstance();
    auth.signIn().then(user => {
      const profile = user.getBasicProfile();
      alert(`Signed in as ${profile.getName()}`);
    });
  };

  return (
    <div className="app">
      <button className="google-button" onClick={handleLogin}>
        Connect Google Calendar
      </button>
    </div>
  );
}

export default App;

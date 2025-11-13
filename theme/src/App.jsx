import Page from "./component/Page.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

export default App
import { Stack, DefaultTheme } from './lib';
import { Button } from './core';

function App() {
  return (
    <DefaultTheme>
      <Stack m={5} spacing={2} direction="row" alignItems="center">
        <Button variant="contained">Hello</Button>
      </Stack>
    </DefaultTheme>
  );
}

export default App;

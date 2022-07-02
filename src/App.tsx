import { Stack, SkuadDefaultTheme } from './lib';
import { Button } from './core';

function App() {
  return (
    <SkuadDefaultTheme>
      <Stack m={5} spacing={2} direction="row" alignItems="center">
        <Button variant="contained">Hello</Button>
      </Stack>
    </SkuadDefaultTheme>
  );
}

export default App;

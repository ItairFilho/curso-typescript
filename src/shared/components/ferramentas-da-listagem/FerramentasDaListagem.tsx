import { Button, TextField, Paper, useTheme, Icon} from '@mui/material';
import { Box } from '@mui/material';

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDaBusca?: (novoTexto: string) => void;

    textoBotãoNovo?: string;
    mostrarbotãoNovo?: boolean;
    aoClicarEmNovo?: () => void;
 }
export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  aoMudarTextoDaBusca ,
  mostrarInputBusca = false,
  textoDaBusca= '',
  textoBotãoNovo='Novo',
  aoClicarEmNovo,
  mostrarbotãoNovo= true}) => {
  const theme = useTheme();
  return( 
    <Box height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      gap={1}
      alignItems='center'
      component={Paper}>
      { mostrarInputBusca && ( <TextField 
        size='small'
        placeholder='Pesquisar...'
        value={textoDaBusca}
        onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)} />)}
      <Box flex={1} display='flex'justifyContent='end' >
        { mostrarbotãoNovo && (<Button 
          color='primary'
          variant='contained'
          disableElevation 
          onClick={aoClicarEmNovo}
          endIcon={<Icon>add</Icon>}>
          {textoBotãoNovo}
        </Button>)}
      </Box>
    </Box>
  );
};
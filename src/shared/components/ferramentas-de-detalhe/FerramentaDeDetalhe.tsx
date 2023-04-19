import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';

interface IFerramentaDeDetalheProps {
   TextoBotãoNovo?: string;

   mostrarBotãoNovo?: boolean;
   mostrarBotãoVoltar?: boolean;
   mostrarBotãoApagar?: boolean;
   mostrarBotãoSalvar?: boolean;
   mostrarBotãoSalvarEVoltar?: boolean;

   mostrarBotãoNovoCarregando?: boolean;
   mostrarBotãoVoltarCarregando?: boolean;
   mostrarBotãoApagarCarregando?: boolean;
   mostrarBotãoSalvarCarregando?: boolean;
   mostrarBotãoSalvarEVoltarCarregando?: boolean;

   aoClicarEmNovo?: () => void;
   aoClicarEmVoltar?: () => void;
   aoClicarEmApagar?: () => void;
   aoClicarEmSalvar?: () => void;
   aoClicarEmSalvarEVoltar?: () => void;

}
export const FerramentaDeDetalhe: React.FC<IFerramentaDeDetalheProps> = ({
  TextoBotãoNovo = 'Novo',
  mostrarBotãoNovo = true,
  mostrarBotãoVoltar = true,
  mostrarBotãoApagar = true,
  mostrarBotãoSalvar = true,
  mostrarBotãoSalvarEVoltar = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar,

  mostrarBotãoNovoCarregando = false,
  mostrarBotãoVoltarCarregando = false,
  mostrarBotãoApagarCarregando = false,
  mostrarBotãoSalvarCarregando = false,
  mostrarBotãoSalvarEVoltarCarregando = false,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box height={theme.spacing(5)}  
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      gap={1}
      alignItems='center'
      component={Paper}>
      { (mostrarBotãoSalvar && !mostrarBotãoSalvarCarregando) && (<Button 
        color='primary'
        variant='contained'
        disableElevation
        onClick={aoClicarEmSalvar}  
        startIcon={<Icon>save</Icon>}>
        <Typography variant='button' noWrap >
          Salvar
        </Typography>
      </Button>)}
      { mostrarBotãoSalvarCarregando && (<Skeleton width={110} height={60}/>)}
      { (mostrarBotãoSalvarEVoltar && !mostrarBotãoSalvarEVoltarCarregando && !smDown && !mdDown) && (<Button 
        color='primary'
        variant='outlined'
        disableElevation
        onClick={aoClicarEmSalvarEVoltar}
        startIcon={<Icon>save</Icon>}>
        <Typography variant='button' noWrap>
            salvar e voltar
        </Typography>
      </Button>)}
      { (mostrarBotãoSalvarEVoltarCarregando && !smDown && !mdDown) && (<Skeleton width={177} height={61}/>)}
      { (mostrarBotãoApagar && !mostrarBotãoApagarCarregando) && (<Button 
        color='primary'
        variant='outlined'
        disableElevation
        onClick={aoClicarEmApagar}
        startIcon={<Icon>delete</Icon>}>
        <Typography variant='button' noWrap>
            apagar
        </Typography>
      </Button>)}
      { mostrarBotãoApagarCarregando && (<Skeleton width={111} height={61}/>)}
      { (mostrarBotãoNovo && !mostrarBotãoNovoCarregando && !smDown) && (<Button 
        color='primary'
        variant='outlined'
        disableElevation
        onClick={aoClicarEmNovo}  
        startIcon={<Icon>add</Icon>}>
        <Typography variant='button' noWrap>
          {TextoBotãoNovo}
        </Typography>
      </Button>)}
      { (mostrarBotãoNovoCarregando && !smDown) && (<Skeleton width={91} height={61}/>)}
      {mostrarBotãoVoltar &&
       (mostrarBotãoSalvar || mostrarBotãoSalvarEVoltar || mostrarBotãoNovo || mostrarBotãoApagar)
        &&
        (<Divider variant='middle' orientation='vertical' />)}
      { (mostrarBotãoVoltar && !mostrarBotãoVoltarCarregando) && (<Button 
        color='primary'
        variant='outlined'
        disableElevation
        onClick={aoClicarEmVoltar}
        startIcon={<Icon>arrow_back</Icon>}>
        <Typography variant='button' noWrap>
          voltar
        </Typography>
      </Button>)}
      { mostrarBotãoVoltarCarregando && (<Skeleton width={108} height={61}/>)}
    </Box>
  );
};
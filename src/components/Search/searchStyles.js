const styles = theme => ({
  paperRoot: {
    margin: '60px 0',
    [theme.breakpoints.down('md')]: {
      margin: '40px 0',
    },
  },
  paper: {
    padding: '20px 20px',
    [theme.breakpoints.down('md')]: {
      padding: '10px 30px',
    },
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '95% 5%',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '90% 10%',
    },
  },
  formInput: {
    width: '100%',
    height: '100%',
    margin: '0',
    [theme.breakpoints.down('md')]: {},
  },
})

export default styles

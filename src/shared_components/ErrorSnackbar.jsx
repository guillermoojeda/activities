

export default function ErrorSnackbar(){

  

  return(
    <Snackbar 
    open={snackOpen} 
    autoHideDuration={4000} 
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    sx={{minWidth:'80vw'}}
    >
      <Alert onClose={handleClose} severity={outcome} sx={{ width: '100%' }}>
        {
          outcome === 'success' ? 
          <span>Login successful</span> :
          <span>Error during login: {ans.message}</span>
        }
      </Alert>
    </Snackbar>
  )
}

import { Button, Grid, TextField, Typography } from "@mui/material";

export const FinDeLaCompra = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div style={{ margin: 30 }}>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        Fin de la compra
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        style={{ display: "flex", justifyContent: "start" }}
      >
        Ingresa tus datos para generar la Orden de compra
      </Typography>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              label="Nombre"
              color="secondary"
              focused
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              label="Apellido"
              color="secondary"
              focused
              fullWidth
              name="apellido"
              onChange={handleChange}
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              label="Email"
              color="secondary"
              focused
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {" "}
            <TextField
              label="Telefono"
              color="secondary"
              focused
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
        </Grid>
      </form>
      <div style={{ margin: 30 }}>
        <Typography gutterBottom variant="h4" component="div">
          Pago con Tarjeta
        </Typography>
        <form action="">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                label="Numero de Tarjeta"
                color="secondary"
                focused
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                label="Vencimiento"
                color="secondary"
                focused
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField label="Titular" color="secondary" focused fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField label="Codigo" color="secondary" focused fullWidth />
            </Grid>
          </Grid>
          <Grid>
            <Button variant="contained" onClick={handleSubmit}>
              Comprar
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};

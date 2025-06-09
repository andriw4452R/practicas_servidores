import app from './app.http2'; // o './app.http' según el que hayas configurado

app.listen(3000, () => {
  console.log('Servidor Express corriendo en el puerto 3000');
});

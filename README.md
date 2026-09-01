# Proyecto de registro con React y Vite

Este proyecto es una versión mejorada de un formulario de registro, manteniendo tus variables principales como `nombre`, `correo`, `contrasena` y `rol`, y agregando la lógica que faltaba para que funcione como una aplicación real.

## ¿Qué se agregó?

- Validación de campos del formulario.
- Manejo de estado con `useState`.
- Confirmación de contraseña.
- Checkbox de términos y condiciones.
- Mensajes de error y éxito.
- Navegación con `react-router-dom` entre `Registro` y `Home`.
- Persistencia con `localStorage` para guardar la información del usuario registrado.
- Vista de bienvenida con la información del usuario en la página de inicio.

## ¿Para qué sirve?

Sirve para registrar usuarios en una aplicación web con un flujo completo:

1. El usuario llena sus datos.
2. El sistema valida que la información sea correcta.
3. Se guarda la información del usuario.
4. Se navega a la vista principal para mostrar la información registrada.

## Estructura principal

- `src/assets/Components/Pages/Registro/Registro.jsx`: formulario de registro.
- `src/assets/Components/Pages/Home/Home.jsx`: vista de bienvenida con datos del usuario.
- `src/assets/Components/Router/Router.jsx`: rutas de navegación de la app.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

## Variables principales usadas

- `nombre`
- `correo`
- `contrasena`
- `rol`

Estas variables se mantienen y se usan en el formulario y en la vista final para mostrar el contenido registrado.

## Resultado esperado

La aplicación permite:

- registrar un usuario,
- validar campos,
- confirmar contraseña,
- mostrar errores si falta información,
- guardar la información del usuario,
- redirigir a la vista home con los datos del registro.
